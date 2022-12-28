import React from "react";

const Synopsis = ({ data }) => {
	return (
		<div
			className='text-zinc-300 text-sm'
			dangerouslySetInnerHTML={{
				__html: data,
			}}
		/>
	);
};

export default Synopsis;
