import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const WeeklyTop = ({ weeklyTop }) => {
	const navigate = useNavigate();
	const [showAllWeekly, setShowAllWeekly] = useState(false);
	return (
		<div>
			<div className='text-zinc-600 font-semibold border-y-4 border-zinc-600 text-center p-2 mt-5'>
				<h3>Weekly Top</h3>
			</div>
			<div className='text-zinc-300'>
				{weeklyTop &&
					weeklyTop.results.slice(0, showAllWeekly ? 10 : 5).map((item) => (
						<div
							className='grid grid-cols-6 min-h-20 my-5 px-2'
							key={item.id}
							onClick={() => navigate(`/anime/${item.id}`)}
						>
							<div className='col-span-2'>
								<img src={item.image} alt='' className='object-cover w-full h-20' />
							</div>
							<div className='col-span-4 px-2 text-sm'>
								<div className='text-blue-300'>{item.title.english}</div>
								<p className='text-sm text-zinc-600'>{item.genres.join(" ,")}</p>
							</div>
						</div>
					))}
			</div>
			{weeklyTop && (
				<div
					onClick={() => setShowAllWeekly(!showAllWeekly)}
					className='text-zinc-300 w-full bg-zinc-600 hover:bg-zinc-300  text-center flex justify-center items-center p-2 hover:text-zinc-800'
				>
					{showAllWeekly ? (
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 24 24'
							fill='currentColor'
							class='w-6 h-6'
						>
							<path
								fill-rule='evenodd'
								d='M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z'
								clip-rule='evenodd'
							/>
						</svg>
					) : (
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 24 24'
							fill='currentColor'
							class='w-6 h-6'
						>
							<path
								fill-rule='evenodd'
								d='M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z'
								clip-rule='evenodd'
							/>
						</svg>
					)}
				</div>
			)}
		</div>
	);
};

export default WeeklyTop;