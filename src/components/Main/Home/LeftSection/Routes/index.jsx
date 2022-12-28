import React, { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Routes = () => {
	const navigate = useNavigate();
	return (
		<div className='mt-12'>
			<div className='flex border-b-2 border-zinc-600 mb-2'>
				<div
					className=' p-2 bg-zinc-800 text-blue-300 hover:text-white hover:bg-zinc-600'
					onClick={() => navigate("/")}
				>
					New Eps
				</div>
				<div
					onClick={() => navigate("/recent")}
					className=' p-2 bg-zinc-800 text-blue-300 hover:text-white hover:bg-zinc-600'
				>
					Recent
				</div>
				<div
					onClick={() => navigate("/popular")}
					className=' p-2 bg-zinc-800 text-blue-300 hover:text-white hover:bg-zinc-600'
				>
					Popular
				</div>
				<div
					onClick={() => navigate("/movies")}
					className=' p-2 bg-zinc-800 text-blue-300 hover:text-white hover:bg-zinc-600'
				>
					Movies
				</div>
			</div>
			<Outlet />
		</div>
	);
};

export default Routes;
