import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getAnime } from "services/api";
import Loader from "components/Loader";
import EpsiodeList from "./EpisodeList";
import Routes from "./Routes";
import Synopsis from "./Synopsis";
import { useDispatch } from "react-redux";
import { submitAnime } from "app/reducer/AnimeSlice";
import useScrollToTop from "hooks/useScrollToTop";

const Anime = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [showEpsiodeList, setShowEpisodeList] = useState(false);
  const { data, isLoading } = useQuery(["get-anime", id], () => getAnime(id));

  useScrollToTop();
  useEffect(() => {
    if (data) {
      dispatch(submitAnime(data));
    }
  }, [data]);
  return (
    <div>
      <Loader loading={isLoading} />
      <EpsiodeList
        show={showEpsiodeList}
        setShow={setShowEpisodeList}
        episodes={data?.episodes ? data?.episodes : []}
        id={id}
      />
      <div>
        <div
          style={{
            backgroundImage: `url(${data?.cover}`,
          }}
          className="col-span-7 h-80 bg-cover bg-opacity-0 p-4 relative"
        >
          <div className="inset-0 bg-zinc-600 opacity-80 absolute w-full h-full"></div>
        </div>
        <div className="lg:-top-32 mx-10 relative block lg:grid grid-cols-8 gap-5">
          <div className="col-span-2 lg:block flex gap-5">
            <div className="lg:top-0 -top-32 relative">
              <img
                src={data?.image}
                alt={""}
                className="object-cover w-full h-80"
              />
            </div>
            <div className="lg:bg-zinc-800 text-zinc-300 text-sm w-full">
              {" "}
              <div className="px-2">
                <div>{data?.title.english}</div>
                <div>{data?.title.romaji}</div>
              </div>
              <div className="flex justify-center items-center border-y-2 p-1 my-2 border-zinc-600">
                Information
              </div>
              <div className="px-2 mb-5">
                <div className="flex">
                  Score:
                  <span className="text-[#FFD700] flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="w-4 h-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p>{data?.rating}</p>
                  </span>
                </div>
                <div>
                  Popularity:{" "}
                  <span className="text-blue-300">{data?.popularity}</span>
                </div>
                <div>Release Date: {data?.releaseDate}</div>
                <div>
                  Episodes: {data?.totalEpisodes} {data?.type}
                </div>
                <div>
                  Status: <span className="text-blue-300">{data?.status}</span>
                </div>
                <div>
                  Aired from:{" "}
                  {data?.startDate
                    ? `${data.startDate.day}/${data.startDate.month}/${data.startDate.year}`
                    : "?"}
                </div>
                <div>
                  Aired till:{" "}
                  {data?.endDate
                    ? `${data.endDate.day}/${data.endDate.month}/${data.endDate.year}`
                    : "?"}
                </div>
                <div>
                  Duration:{" "}
                  <span className="text-green-200">{data?.duration} mins</span>
                </div>

                <div>Studios: {data?.studios.join(" ,")}</div>
              </div>
            </div>
          </div>
          <div className="col-span-6 ml-5 mt-12">
            <div className="text-blue-300 text-xl bg-black w-max py-2 px-6 rounded border-2 border-blue-500">
              <button
                onClick={() => setShowEpisodeList(true)}
                className="flex items-center justify-center gap-2 "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                    clipRule="evenodd"
                  />
                </svg>
                Watch
              </button>
            </div>
            <div className="text-zinc-300 mt-10 text-4xl">
              {data?.title?.english
                ? data?.title?.english
                : data?.title?.romaji}
            </div>
            <div className="text-zinc-300 mt-10 text-sm">
              Genres:{" "}
              <span className="text-blue-300">{data?.genres.join(" ,")}</span>
            </div>
            <Routes id={data?.id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Anime;
