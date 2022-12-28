import React from "react";
import Streams from "../Streams";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

const Home = () => {
	return (
		<div className='px-10 my-5 grid grid-cols-12 gap-2'>
			<div className='col-span-9 min-h-96'>
				<LeftSection />
			</div>
			<div className='col-span-3 bg-zinc-800 rounded h-max'>
				<RightSection />
			</div>
		</div>
	);
};

export default Home;