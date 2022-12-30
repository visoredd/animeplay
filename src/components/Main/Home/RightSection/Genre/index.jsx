import React, { useState } from "react";

const Genre = ({ genres }) => {
  const [showAllGenres, setShowAllGenres] = useState(false);
  return (
    <div>
      <div className="text-zinc-600 font-semibold border-y-4 border-zinc-600 text-center p-2">
        <h3>Genres</h3>
      </div>
      <div className="grid grid-cols-2 p-2">
        {genres &&
          genres.data.data
            .sort((a, b) => a.name > b.name)
            .slice(0, showAllGenres ? -1 : 20)
            .map((item) => (
              <div className="col-span-1 text-zinc-400 text-sm mt-1">
                <input
                  type="checkbox"
                  id={item.mal_id}
                  className="accent-zinc-600"
                />
                <label for={item.mal_id}> {item.name}</label>
              </div>
            ))}
      </div>
      {genres && (
        <div
          onClick={() => setShowAllGenres(!showAllGenres)}
          className="text-zinc-300 w-full bg-zinc-600 hover:bg-zinc-300  text-center flex justify-center items-center p-2 hover:text-zinc-800"
        >
          {showAllGenres ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z"
                clipRule="evenodd"
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
                fillRule="evenodd"
                d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </div>
      )}
    </div>
  );
};

export default Genre;
