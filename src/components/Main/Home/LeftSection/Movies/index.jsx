import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import {
  getAnimeMovies,
  getPopularAnime,
  getRecentAnime,
  getTopAiringAnime,
  newEpsList,
} from "services/api";
import Loader from "components/Loader";
import Card from "../Card";

const Movies = () => {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const { data, isLoading } = useQuery(["movies", page], () =>
    getAnimeMovies(page)
  );
  useEffect(() => {
    if (data) {
      setMovies((prevData) => {
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
      <Loader loading={isLoading} opacity="opacity-80" />
      <div className="flex justify-center gap-1 flex-wrap mt-5">
        {movies && movies.map((item) => <Card item={item} isAnime={true} />)}
      </div>
      <div className="flex justify-center xl:justify-start items-center font-semibold text-blue-400 my-10">
        {movies && (
          <button
            onClick={() => setPage(page + 1)}
            className={`w-max bg-zinc-800 py-2 px-10 ${
              isLoading ? "animate-pulse" : ""
            }`}
          >
            Load More...
          </button>
        )}
      </div>
    </div>
  );
};

export default Movies;
