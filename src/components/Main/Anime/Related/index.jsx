import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Related = () => {
  const navigate = useNavigate();
  const state = useSelector((state) => state.anime.value);
  return (
    <div>
      {state?.relations?.map((item) => (
        <div
          className="h-40 rounded grid grid-cols-8 cursor-pointer my-2"
          onClick={() => navigate(`/anime/${item.id}`)}
          key={item.id}
        >
          <div className="hidden sm:block col-span-1 object-contain">
            <img
              src={item?.image}
              alt={""}
              className="object-cover w-full h-40"
            />
          </div>
          <div
            style={{
              backgroundImage: `url(${item?.cover}`,
            }}
            className="col-span-8 sm:col-span-7 h-40 bg-cover bg-opacity-0 p-4 relative"
          >
            <div className="inset-0 bg-zinc-800 opacity-95 absolute w-full h-full"></div>
            <div className="inset-0 absolute w-full h-full z-10 p-4">
              <div className="grid grid-cols-6">
                <div className="col-span-6 sm:col-span-4 md:col-span-5">
                  <div className="text-xl text-blue-300">
                    {item?.title?.english
                      ? item?.title?.english
                      : item?.title?.romaji}
                  </div>
                  <div className="hidden sm:block text-sm text-zinc-500">
                    {item?.title?.romaji}
                  </div>
                  <div className="text-sm text-zinc-500">
                    {item?.type} | {item?.episodes} episodes |{" "}
                    <span className="inline-block text-[#ffe65b]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-4 h-4 inline-block"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        />
                      </svg>{" "}
                      {item?.rating}
                    </span>
                  </div>
                  <div className="sm:block hidden text-sm text-zinc-500">
                    Status:{" "}
                    <span className="text-blue-100">{item?.status}</span>
                  </div>
                  <div className="sm:hidden block text-sm text-zinc-500">
                    Relation:{" "}
                    <span
                      className={`${
                        item?.relationType == "SEQUEL"
                          ? "text-green-500"
                          : "text-blue-500"
                      }`}
                    >
                      {item?.relationType}
                    </span>
                  </div>
                </div>

                <div className="sm:block hidden absolute right-5 col-span-1 text-sm text-white">
                  <button
                    className={`${
                      item?.relationType == "SEQUEL"
                        ? "bg-green-500"
                        : "bg-blue-500"
                    } px-2 py-1`}
                  >
                    {item?.relationType}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div></div>
    </div>
  );
};

export default Related;
