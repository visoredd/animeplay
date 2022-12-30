import axios from "axios";
import Loader from "components/Loader";
import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { getPopularAnime, getRecentAnime } from "services/api";

const Favourite = () => {
  const navigate = useNavigate();
  const { data, isLoading } = useQuery("favourite", () => getPopularAnime());
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (index === 8) {
        setIndex(0);
      } else {
        setIndex((prevState) => prevState + 1);
      }
    }, 15000);
    return () => clearInterval(interval);
  });
  return (
    <>
      <Loader loading={isLoading} />
      <div
        className="h-40 rounded grid grid-cols-8 cursor-pointer"
        onClick={() => navigate(`/anime/${data?.results[index].id}`)}
      >
        <div className="col-span-1 object-contain">
          <img
            src={data?.results[index].image}
            alt={""}
            className="object-cover w-full h-40"
          />
        </div>
        <div
          style={{
            backgroundImage: `url(${data?.results[index].image}`,
          }}
          className="col-span-7 h-40 bg-cover bg-opacity-0 p-4 relative"
        >
          <div className="inset-0 bg-zinc-800 opacity-95 absolute w-full h-full"></div>
          <div className="inset-0 absolute w-full h-full z-10 p-4">
            <div className="text-xl text-blue-300">
              {" "}
              {data?.results[index].title.english}
            </div>
            <div className="text-sm text-zinc-400 mt-2 ">
              <div className="max-h-16 min-h-[64px] overflow-hidden text-ellipsis">
                <div
                  dangerouslySetInnerHTML={{
                    __html: data?.results[index].description,
                  }}
                />
              </div>
            </div>
            <div className="flex text-zinc-400 mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M5.25 2.25a3 3 0 00-3 3v4.318a3 3 0 00.879 2.121l9.58 9.581c.92.92 2.39 1.186 3.548.428a18.849 18.849 0 005.441-5.44c.758-1.16.492-2.629-.428-3.548l-9.58-9.581a3 3 0 00-2.122-.879H5.25zM6.375 7.5a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z"
                  clipRule="evenodd"
                />
              </svg>

              <div className="ml-2">
                {data?.results[index].genres.join(" ,")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Favourite;
