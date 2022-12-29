import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import {
  getPopularAnime,
  getRecentAnime,
  getTopAiringAnime,
  newEpsList,
} from "services/api";
import Loader from "components/Loader";
import Card from "../Card";

const Recent = () => {
  const [page, setPage] = useState(1);
  const [recent, setRecent] = useState([]);
  const { data, isLoading } = useQuery(["recent", page], () =>
    getRecentAnime(page)
  );
  useEffect(() => {
    if (data) {
      setRecent((prevData) => {
        const list = [...prevData, ...data.results];
        console.log(list);
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
      <Loader loading={isLoading} />
      <div className="flex justify-center gap-3 flex-wrap mt-5">
        {recent && recent.map((item) => <Card item={item} isAnime={true} />)}
      </div>
      <div className="flex justify-center items-center font-semibold text-blue-400 my-10">
        {recent && (
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

export default Recent;
