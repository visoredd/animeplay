import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ item, isAnime = false, mutate = () => {} }) => {
  const navigate = useNavigate();
  return (
    <div
      className="sm:h-72 h-40 sm:w-44 w-full hover:scale-95 pointer-events-auto cursor-pointer flex sm:block"
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
          className="object-cover sm:w-full w-40 sm:h-52 h-40"
        />
        {item?.rating && (
          <span className="opacity-75 bg-zinc-800 absolute top-0 left-0 text-[#FFD700] flex justify-center items-center p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-4 h-4"
            >
              <path
                fill-rule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clip-rule="evenodd"
              />
            </svg>
            <p className="text-zinc-300">{item?.rating}</p>
          </span>
        )}
        {item?.status && (
          <span className="opacity-75 bg-zinc-800 absolute bottom-0 right-0 text-zinc-300">
            {item?.status}
          </span>
        )}
      </div>
      <div className="p-2 text-center bg-zinc-800 h-40 w-full sm:h-20 sm:block flex flex-col gap-2">
        {typeof item.title === "object" && (
          <div className="max-h-10 overflow-hidden text-ellipsis text-blue-300 text-center text-sm">
            {item?.title?.english}
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
        {item?.episodeNumber && (
          <div className="text-zinc-500 text-sm">Ep:{item?.episodeNumber}</div>
        )}
        {item?.genres && (
          <div className="text-zinc-500 text-[8px] block sm:hidden">
            Genres:{" "}
            <span className="text-blue-200">{item?.genres?.join(" ,")}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
