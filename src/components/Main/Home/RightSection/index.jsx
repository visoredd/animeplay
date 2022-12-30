import React, { useState } from "react";
import axios from "axios";
import { useQueries, useQuery } from "react-query";
import Genre from "./Genre";
import WeeklyTop from "./WeeklyTop";
import { getRecentAnime } from "services/api";
import Loader from "components/Loader";

const RightSection = () => {
  const { data: genres, isLoading } = useQuery(
    "genres",
    () => axios.get("https://api.jikan.moe/v4/genres/anime"),
    {
      enabled: false,
    }
  );
  const { data: weeklyTop, isLoading: weeklyLoading } = useQuery(
    "weekly-top",
    () => getRecentAnime(1)
  );

  return (
    <div>
      <Loader loading={weeklyLoading} />
      {/* <div className='grid grid-cols-8 gap-2 text-zinc-300 font-semibold my-4'>
				<div className='col-span-3'>Season: </div>
				<div className='col-span-5'>Year: </div>
				<div className='col-span-3'>
					<select
						name='cars'
						id='cars'
						className='bg-zinc-800 border-2 border-zinc-600 rounded'
					>
						<option value='volvo'>Volvo</option>
						<option value='saab'>Saab</option>
						<option value='mercedes'>Mercedes</option>
						<option value='audi'>Audi</option>
					</select>
				</div>
				<div className='col-span-3'>
					<select
						name='cars'
						id='cars'
						className='bg-zinc-800 border-2 border-zinc-600 rounded'
					>
						<option value='volvo'>Volvo</option>
						<option value='saab'>Saab</option>
						<option value='mercedes'>Mercedes</option>
						<option value='audi'>Audi</option>
					</select>
				</div>
				<div className='col-span-2 text-blue-300'>
					<button>Go</button>
				</div>
			</div> */}
      {/* <Genre genres={genres} /> */}
      <WeeklyTop weeklyTop={weeklyTop} />
    </div>
  );
};

export default RightSection;
