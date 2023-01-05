import React, { useState } from "react";

const Genre = ({ genreList, genres, setGenres }) => {
  const handleChange = (e) => {
    const item = e.target.name;
    const isChecked = e.target.checked;
    setGenres((prevState) => ({
      checkedItems: prevState.checkedItems.set(item, isChecked),
    }));
  };
  return (
    <div>
      <div className="text-zinc-200 font-semibold border-y-2 border-zinc-600 text-center py-1">
        <h3>Genres</h3>
      </div>
      <div className="grid grid-cols-2 p-2 mt-2">
        {genreList.map((item, index) => (
          <label
            className="cursor-pointer col-span-1 text-zinc-400 text-sm mt-1"
            for={item}
            key={item}
          >
            <input
              id={item}
              type="checkbox"
              className="accent-blue-500"
              name={item}
              checked={genres.checkedItems.get(item.name)}
              onClick={(e) => handleChange(e)}
            />
            {item}
          </label>
        ))}
      </div>
    </div>
  );
};

export default Genre;
