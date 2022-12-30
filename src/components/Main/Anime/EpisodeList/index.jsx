import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const EpsiodeList = ({ show, setShow, episodes, id }) => {
  const navigate = useNavigate();

  return (
    show && (
      <div
        className="fixed top-0 left-0 min-h-screen w-full bg-black/80 z-10 overflow-scroll h-full"
        onClick={() => setShow(false)}
      >
        <div
          className="bg-zinc-800 border-r-4 border-zinc-600 sm:w-1/3 w-full min-h-screen p-2"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="text-blue-300">
            <button onClick={() => setShow(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-4.28 9.22a.75.75 0 000 1.06l3 3a.75.75 0 101.06-1.06l-1.72-1.72h5.69a.75.75 0 000-1.5h-5.69l1.72-1.72a.75.75 0 00-1.06-1.06l-3 3z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div className="mt-5 text-center text-2xl text-zinc-300 border-b-2 border-zinc-300">
            Episodes List
          </div>
          <div>
            {episodes.length <= 50 ? (
              episodes.map((item) => (
                <div
                  className="grid grid-cols-6 min-h-20 px-2 py-4 cursor-pointer hover:bg-[#141416]"
                  key={item.id}
                  onClick={() => {
                    setShow(false);
                    navigate(`/stream/${item.id}?anime=${id}`);
                  }}
                >
                  <div className="col-span-2">
                    <img
                      src={item.image}
                      alt=""
                      className="object-cover w-full h-20"
                    />
                  </div>
                  <div className="col-span-4 px-2 text-sm">
                    <div className="text-blue-300">
                      {item.number}. {item.title}
                    </div>
                    <p className="max-h-10 overflow-hidden text-ellipsis text-zinc-600 text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div className="grid grid-cols-4 gap-4 my-5">
                {episodes.map((item) => (
                  <button
                    className="text-zinc-600 bg-blue-300 p-1 col-span-1 hover:bg-zinc-600 hover:text-zinc-300"
                    key={item.id}
                    onClick={() => {
                      setShow(false);
                      navigate(`/stream/${item.id}?anime=${id}`);
                    }}
                  >
                    {item.number}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default EpsiodeList;
