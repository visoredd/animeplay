import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LastEpisode = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [data, setData] = useState();
  useEffect(() => {
    if (localStorage.getItem("lastEpisode")) {
      setData(JSON.parse(localStorage.getItem("lastEpisode")));
    }
  }, []);
  if (!data) {
    return null;
  }
  console.log(data);
  return (
    <div className="fixed left-0 bottom-24 min-h-12 bg-[#141416] border-y-2 border-blue-200 flex justify-center items-center rounded animate-pulse">
      <div>
        <div className="flex">
          {show ? (
            <div
              className="cursor-pointer w-60 grid grid-cols-6 p-2"
              onClick={() =>
                navigate(`/stream/${data?.episode}?anime=${data?.anime?.id}`)
              }
            >
              <div className="col-span-2">
                <img
                  src={data?.anime?.image}
                  alt=""
                  className="object-cover w-12 h-12"
                />
              </div>
              <div className="col-span-4 px-2 text-sm">
                <div className="text-blue-300 w-full truncate">
                  {data?.anime?.title.english}
                </div>
                <div className="text-zinc-300">
                  Ep: {data?.episode?.split("-").slice(-1)}
                </div>
              </div>
            </div>
          ) : null}
          <div
            className="cursor-pointer text-blue-300 p-2 h-16 flex justify-center items-center border-x-2 border-blue-200"
            title="Last Episode Played"
            onClick={() => setShow(!show)}
          >
            {show ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M13.28 3.97a.75.75 0 010 1.06L6.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0zm6 0a.75.75 0 010 1.06L12.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z"
                  clip-rule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z"
                  clip-rule="evenodd"
                />
              </svg>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastEpisode;
