import React, { useState } from "react";
import axios from "axios";
import { useQueries, useQuery } from "react-query";
import Genre from "./Genre";
import WeeklyTop from "./WeeklyTop";
import { getRecentAnime } from "services/api";
import { submitGenre } from "app/reducer/GenreSlice";
import { genreList, getSeasonList, getYearList } from "./utils";
import Loader from "components/Loader";

import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

const RightSection = () => {
  const navigate = useNavigate();
  const state = useSelector((state) => state.genre.value);
  const dispatch = useDispatch();
  console.log(state);
  const { data: weeklyTop, isLoading: weeklyLoading } = useQuery(
    "weekly-top",
    () => getRecentAnime(1)
  );

  const [season, setSeason] = useState(
    ["WINTER", "SPRING", "SUMMER", "FALL"][
      Math.floor((new Date().getMonth() / 12) * 4) % 4
    ]
  );
  const [year, setYear] = useState(new Date().getFullYear());
  const [genres, setGenres] = useState({ checkedItems: new Map() });
  return (
    <div>
      <Loader loading={weeklyLoading} />
      <div className="grid grid-cols-7 gap-2 mx-2 text-zinc-300 font-semibold my-4 text-sm">
        <div className="col-span-3">Season: </div>
        <div className="col-span-4">Year: </div>
        <div className="col-span-3">
          <select
            name="seasonList"
            id="seasonList"
            className="bg-[#313030] p-1 w-full"
            onChange={(e) => setSeason(e.target.value)}
          >
            {getSeasonList().map((item) => (
              <option
                value={item.key}
                key={item.key}
                selected={item.key == season}
              >
                {item.season}
              </option>
            ))}
          </select>
        </div>
        <div className="col-span-3">
          <select
            name="yearList"
            id="yearList"
            className="bg-[#313030] rounded p-1 w-full max-h-10"
            onChange={(e) => setYear(e.target.value)}
          >
            {getYearList().map((yearItem) => (
              <option
                value={yearItem}
                key={yearItem}
                selected={yearItem == year}
              >
                {yearItem}
              </option>
            ))}
          </select>
        </div>
        <div className="col-span-1 text-blue-300">
          <button
            className="border-2 border-[#313030] hover:border-blue-600 px-1 rounded"
            onClick={() => {
              dispatch(
                submitGenre({
                  season: season,
                  year: year,
                  genre: [...genres.checkedItems]
                    .filter((item) => item[1])
                    .map((item) => item[0]),
                })
              );
              navigate("/popular/genre");
            }}
          >
            Go
          </button>
        </div>
      </div>
      <Genre genreList={genreList} genres={genres} setGenres={setGenres} />
      <WeeklyTop weeklyTop={weeklyTop} />
    </div>
  );
};

export default RightSection;
