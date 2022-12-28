import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/screen-1-removebg-preview.png";
import shuffle from "../../assets/shuffle_s92zpdp7usdz.svg";

const Header = () => {
	const navigate = useNavigate();
	return (
		<div className='w-full h-16 flex justify-start items-center gap-4 px-10'>
			<div className='flex justify-center items-center gap-1'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 24 24'
					fill='white'
					className='w-6 h-6'
					onClick={() => navigate(-1)}
				>
					<path
						fillRule='evenodd'
						d='M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z'
						clipRule='evenodd'
					/>
				</svg>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 24 24'
					fill='white'
					className='w-6 h-6'
					onClick={() => navigate("/")}
				>
					<path d='M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z' />
					<path d='M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z' />
				</svg>
			</div>
			<div>
				<img src={logo} alt='logo' className='w-48' onClick={() => navigate("/")} />
			</div>
			<div>
				<input
					className='bg-black text-gray-300 w-96 p-1 rounded outline-none border-2 border-gray-800'
					placeholder='Search'
					type='text'
				/>
			</div>
			<div className='text-gray-300 flex justify-center items-center'>
				<img src={shuffle} alt='logo' className='w-6' /> Random
			</div>
			<div className='text-gray-300'>A-Z List</div>
		</div>
	);
};

export default Header;
