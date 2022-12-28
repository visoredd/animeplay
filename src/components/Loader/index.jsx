import React from "react";
import { FadeLoader } from "react-spinners";

const override = {
	display: "block",
	margin: "0 auto",
	borderColor: "red",
};

const Loader = ({ loading }) => {
	return loading ? (
		<div className='fixed min-h-screen w-full top-0 bg-[#181818] flex justify-center items-center z-50 opacity-90'>
			<FadeLoader
				color='rgb(208, 214, 194)'
				loading={loading}
				cssOverride={override}
				size={400}
				aria-label='Loading Spinner'
				data-testid='loader'
			/>
		</div>
	) : null;
};

export default Loader;
