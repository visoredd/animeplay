import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { newEpsList } from "../../../../../services/api";
import Loader from "../../../../Loader";
import Card from "../Card";

const NewEps = () => {
	const [page, setPage] = useState(1);
	const [newEps, setNewEps] = useState([]);
	const { data, isLoading } = useQuery(["new-eps", page], () => newEpsList(page));
	useEffect(() => {
		if (data) {
			setNewEps((prevData) => {
				let list = [...prevData, ...data.results];
				let finalList = list.filter(
					(item, index, self) => index === self.findIndex((item2) => item2.id === item.id)
				);
				return finalList;
			});
		}
	}, [data]);
	return (
		<div>
			<Loader loading={isLoading} />
			<div className='flex gap-3 flex-wrap'>
				{newEps && newEps.map((item) => <Card item={item} />)}
			</div>
			<div className='flex justify-center items-center font-semibold text-blue-400 my-10'>
				{newEps && (
					<button
						onClick={() => setPage(page + 1)}
						className='w-max bg-zinc-800 py-2 px-10'
					>
						Load More...
					</button>
				)}
			</div>
		</div>
	);
};

export default NewEps;
