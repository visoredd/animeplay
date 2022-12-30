import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { getPopularAnime, newEpsList } from "services/api";
import Loader from "components/Loader";
import Card from "../Card";

const Popular = () => {
  const [page, setPage] = useState(1);
  const [popular, setPopular] = useState([]);
  const { data, isLoading } = useQuery(["popular", page], () =>
    getPopularAnime(page)
  );
  useEffect(() => {
    if (data) {
      setPopular((prevData) => {
        let list = [...prevData, ...data.results];
        let finalList = list.filter(
          (item, index, self) =>
            index === self.findIndex((item2) => item2.id === item.id)
        );
        return finalList;
      });
    }
  }, [data]);
  return (
    <div>
      <Loader loading={isLoading} opacity="opacity-90" />
      <div className="flex justify-center gap-3 flex-wrap mt-5">
        {popular && popular.map((item) => <Card item={item} isAnime={true} />)}
      </div>
      <div className="flex justify-center items-center font-semibold text-blue-400 my-10">
        {popular && (
          <button
            onClick={() => setPage(page + 1)}
            className="w-max bg-zinc-800 py-2 px-10"
          >
            Load More...
          </button>
        )}
      </div>
    </div>
  );
};

export default Popular;
