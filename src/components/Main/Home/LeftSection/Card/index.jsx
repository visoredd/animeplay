import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ item, isAnime = false, mutate = () => {} }) => {
  const navigate = useNavigate();
  return (
    <div
      className="sm:h-72 h-60 sm:w-44 w-32 hover:scale-95 pointer-events-auto cursor-pointer bg-zinc-800 hover:bg-zinc-600"
      key={item.id}
      onClick={() => {
        navigate(
          isAnime
            ? `/anime/${item.id}`
            : mutate({
                anime: item.id,
                id: item.episodeId,
              })
        );
      }}
    >
      <div className="relative">
        <img
          src={item.image}
          alt=""
          className="object-cover w-full sm:h-52 h-36"
        />
        {item?.rating && (
          <span className="opacity-75 bg-zinc-800 absolute top-0 left-0 text-[#FFD700] flex justify-center items-center p-1 text-sm sm:text-base">
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
            <p className="text-zinc-300">{item?.rating}</p>
          </span>
        )}
        {item?.status && (
          <span className="opacity-75 bg-zinc-800 absolute bottom-0 right-0 text-zinc-300 text-sm sm:text-base">
            {item?.status}
          </span>
        )}
      </div>
      <div className="p-2 text-center h-24 w-full sm:h-20 sm:block flex flex-col gap-2">
        {typeof item.title === "object" && (
          <div className="max-h-10 overflow-hidden text-ellipsis text-blue-300 text-center text-sm">
            {item?.title?.english ? item?.title?.english : item?.title?.romaji}
          </div>
        )}
        {typeof item.title === "string" && (
          <div className="max-h-10 overflow-hidden text-ellipsis text-blue-300 text-center text-sm">
            {item?.title}
          </div>
        )}
        {item?.totalEpisodes && (
          <div className="text-zinc-500 text-sm gap-1 ">
            Total:{item?.totalEpisodes}
          </div>
        )}
        {item?.episodes && (
          <div className="text-zinc-500 text-sm gap-1 ">
            Total:{item?.episodes}
          </div>
        )}
        {item?.episodeNumber && (
          <div className="text-zinc-500 text-sm">Ep:{item?.episodeNumber}</div>
        )}
        {/* {item?.genres && (
          <div className="text-zinc-500 text-[8px] block sm:hidden truncate">
            Genres:{" "}
            <span className="text-blue-200">{item?.genres?.join(" ,")}</span>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default Card;
