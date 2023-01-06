import useCountdown from "assets/hooks/useCountdown";
import React, { useEffect, useState, useRef } from "react";
import ReactPlayer from "react-player";
import { useQuery } from "react-query";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { getAnime, getStreamLink } from "services/api";
import Loader from "components/Loader";

const Streams = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showStream, setShowStream] = useState(false);
  const [player, setPlayer] = useState(null);
  const [playedSeconds, setPlayedSeconds] = useState(0);
  const [queryParams] = useSearchParams();
  const [selectStream, setSelectStream] = useState({
    url: "",
    quality: "",
    isM3U8: true,
  });
  const {
    data,
    isLoading: streamLoading,
    isError: streamError,
  } = useQuery(["stream-episode", id], () => getStreamLink(id), {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
  const {
    data: animeList,
    isLoading,
    isError,
  } = useQuery(
    ["stream-anime-list", queryParams.get("anime")],
    () => getAnime(queryParams.get("anime")),
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      enabled: !queryParams.get("anime") == false,
    }
  );

  const refFunc = (video) => {
    setPlayer(video);
  };

  useEffect(() => {
    if (data && !showStream) {
      const item = data.sources.find((item) => {
        if (item.quality.includes("720")) {
          return true;
        }
        if (item.quality.includes("default")) {
          return true;
        }
      });
      setSelectStream(item ? item : data[0]);
    }
  }, [data]);

  useEffect(() => {
    if (!streamLoading && playedSeconds > 5) {
      localStorage.setItem(id, playedSeconds);
    }
  }, [playedSeconds]);
  useEffect(() => {
    if (!streamLoading) {
      const obj = { episode: id, anime: animeList };
      localStorage.setItem("lastEpisode", JSON.stringify(obj));
    }
  }, [streamLoading]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  console.log(selectStream);
  return (
    <div>
      <Loader
        loading={(isLoading || streamLoading) && (!isError || !streamError)}
      />
      <div className="mt-10 lg:mx-40 md:mx-20 sm:mx-10 mx-1">
        <div className="bg-zinc-800 w-full p-1 rounded flex justify-between">
          <div className="flex gap-1">
            <div className="text-zinc-300 p-1">
              Episode {id.split("-").slice(-1)}
            </div>
            <div className="sm:block hidden border-2 border-zinc-500"></div>
            <div className="text-zinc-500 p-1 sm:block hidden">
              {" "}
              Internal Player
            </div>
          </div>
          <div className="flex gap-3 mr-4 text-zinc-300 justify-between items-center">
            <div className="hover:text-zinc-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6"
              >
                <path d="M12 .75a8.25 8.25 0 00-4.135 15.39c.686.398 1.115 1.008 1.134 1.623a.75.75 0 00.577.706c.352.083.71.148 1.074.195.323.041.6-.218.6-.544v-4.661a6.714 6.714 0 01-.937-.171.75.75 0 11.374-1.453 5.261 5.261 0 002.626 0 .75.75 0 11.374 1.452 6.712 6.712 0 01-.937.172v4.66c0 .327.277.586.6.545.364-.047.722-.112 1.074-.195a.75.75 0 00.577-.706c.02-.615.448-1.225 1.134-1.623A8.25 8.25 0 0012 .75z" />
                <path
                  fillRule="evenodd"
                  d="M9.013 19.9a.75.75 0 01.877-.597 11.319 11.319 0 004.22 0 .75.75 0 11.28 1.473 12.819 12.819 0 01-4.78 0 .75.75 0 01-.597-.876zM9.754 22.344a.75.75 0 01.824-.668 13.682 13.682 0 002.844 0 .75.75 0 11.156 1.492 15.156 15.156 0 01-3.156 0 .75.75 0 01-.668-.824z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="hover:text-zinc-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
            </div>
            <div className="hover:text-zinc-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div
              className="hover:text-zinc-500"
              onClick={() => {
                let prevId = id.split("-");
                let newId = id.split("-").pop() * 1;
                if (
                  (animeList?.status === "Completed" &&
                    animeList?.totalEpisodes * 1 > newId) ||
                  (animeList?.status === "Ongoing" &&
                    animeList?.nextAiringEpisode?.episode * 1 > newId)
                ) {
                  prevId.splice(-1);
                  prevId.push(newId + 1);
                  window.scrollTo(0, 0);
                  setPlayedSeconds(0);
                  navigate(`/stream/${prevId.join("-")}?anime=${animeList.id}`);
                }
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6"
              >
                <path d="M5.055 7.06c-1.25-.714-2.805.189-2.805 1.628v8.123c0 1.44 1.555 2.342 2.805 1.628L12 14.471v2.34c0 1.44 1.555 2.342 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256L14.805 7.06C13.555 6.346 12 7.25 12 8.688v2.34L5.055 7.06z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="mx-1">
          <ReactPlayer
            ref={refFunc}
            key={selectStream.url}
            url={selectStream.url}
            onStart={() => {
              if (localStorage.getItem(id)) {
                player.seekTo(localStorage.getItem(id));
              }
            }}
            controls={true}
            playing={true}
            light={true}
            onProgress={({ playedSeconds }) => setPlayedSeconds(playedSeconds)}
            width="100%"
            height="550px"
          />
        </div>
        <div className="bg-zinc-800 w-full p-4 rounded text-2xl text-zinc-300">
          <div>
            <div className="flex gap-2 justify-start items-center text-sm">
              <div>Quality: {selectStream.quality}</div>
              <div className="border-2 border-zinc-500 h-full"></div>
              <div
                className="flex items-center gap-1 text-blue-300 cursor-pointer"
                onClick={() => {
                  setShowStream(true);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.828 2.25c-.916 0-1.699.663-1.85 1.567l-.091.549a.798.798 0 01-.517.608 7.45 7.45 0 00-.478.198.798.798 0 01-.796-.064l-.453-.324a1.875 1.875 0 00-2.416.2l-.243.243a1.875 1.875 0 00-.2 2.416l.324.453a.798.798 0 01.064.796 7.448 7.448 0 00-.198.478.798.798 0 01-.608.517l-.55.092a1.875 1.875 0 00-1.566 1.849v.344c0 .916.663 1.699 1.567 1.85l.549.091c.281.047.508.25.608.517.06.162.127.321.198.478a.798.798 0 01-.064.796l-.324.453a1.875 1.875 0 00.2 2.416l.243.243c.648.648 1.67.733 2.416.2l.453-.324a.798.798 0 01.796-.064c.157.071.316.137.478.198.267.1.47.327.517.608l.092.55c.15.903.932 1.566 1.849 1.566h.344c.916 0 1.699-.663 1.85-1.567l.091-.549a.798.798 0 01.517-.608 7.52 7.52 0 00.478-.198.798.798 0 01.796.064l.453.324a1.875 1.875 0 002.416-.2l.243-.243c.648-.648.733-1.67.2-2.416l-.324-.453a.798.798 0 01-.064-.796c.071-.157.137-.316.198-.478.1-.267.327-.47.608-.517l.55-.091a1.875 1.875 0 001.566-1.85v-.344c0-.916-.663-1.699-1.567-1.85l-.549-.091a.798.798 0 01-.608-.517 7.507 7.507 0 00-.198-.478.798.798 0 01.064-.796l.324-.453a1.875 1.875 0 00-.2-2.416l-.243-.243a1.875 1.875 0 00-2.416-.2l-.453.324a.798.798 0 01-.796.064 7.462 7.462 0 00-.478-.198.798.798 0 01-.517-.608l-.091-.55a1.875 1.875 0 00-1.85-1.566h-.344zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z"
                    clipRule="evenodd"
                  />
                </svg>

                <div>Change Quality</div>
              </div>
              {showStream && (
                <select
                  name="stream"
                  id="stream"
                  className="bg-[#313030] border-2 border-zinc-600 rounded w-24 p-1"
                  onChange={(e) =>
                    setSelectStream(data?.sources[e.target.value])
                  }
                >
                  {data?.sources?.map((item, index) => {
                    if (item.quality == selectStream.quality) {
                      return (
                        <option value={index} key={index} selected>
                          {item.quality}
                        </option>
                      );
                    }
                    return (
                      <option value={index} key={index}>
                        {item.quality}
                      </option>
                    );
                  })}
                </select>
              )}
            </div>
          </div>
          <div className="mt-2">
            {animeList?.title?.english
              ? animeList?.title?.english
              : animeList?.title?.romaji}
          </div>
          <div className="mt-2 text-sm">
            Genres:{" "}
            <span className="text-blue-300">
              {animeList?.genres?.join(" ,")}
            </span>
          </div>
          <div>
            <div className="flex gap-2 justify-start items-center text-sm">
              <div
                className="flex items-center gap-1 text-blue-300 cursor-pointer"
                onClick={() => {
                  navigate(`/anime/${animeList.id}`);
                }}
              >
                <div className="mt-2 flex justify-center items-center gap-2">
                  More Info{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-4 h-4"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M15.75 2.25H21a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0V4.81L8.03 17.03a.75.75 0 01-1.06-1.06L19.19 3.75h-3.44a.75.75 0 010-1.5zm-10.5 4.5a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V10.5a.75.75 0 011.5 0v8.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V8.25a3 3 0 013-3h8.25a.75.75 0 010 1.5H5.25z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between text-sm text-zinc-400 mt-2">
            <div>Next Ep: {animeList?.nextAiringEpisode?.episode}</div>
            <div>Total Episodes: {animeList?.totalEpisodes}</div>
          </div>
          <div className="flex flex-wrap gap-5 mt-4">
            {animeList?.episodes.map((item) => (
              <button
                className={`${
                  id.split("-").slice(-1) == item.number
                    ? "bg-zinc-800 text-blue-200 border-2 border-blue-200"
                    : "text-zinc-800 bg-blue-200"
                } rounded w-20 col-span-1 hover:bg-zinc-800 hover:text-blue-200`}
                key={item.id}
                onClick={() => {
                  window.scrollTo(0, 0);
                  setPlayedSeconds(0);
                  navigate(`/stream/${item.id}?anime=${animeList.id}`);
                }}
              >
                {item.number}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Streams;
