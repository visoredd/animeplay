import axios from "axios";
import React, { useState, useEffect } from "react";
import { useMutation, useQuery } from "react-query";
import { Navigate, useNavigate } from "react-router-dom";
import { getAnimeQuery, newEpsList } from "services/api";
import Loader from "components/Loader";
import Card from "../Card";

const NewEps = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [newEps, setNewEps] = useState([]);
  const { data, isLoading } = useQuery(["new-eps", page], () =>
    newEpsList(page)
  );
  const { mutate, isLoading: routeLoading } = useMutation(
    async ({ anime, id }) => {
      console.log(id);
      const { data } = await axios.get(
        `https://api.consumet.org/meta/anilist/${anime}`
      );
      return { ...data, episode: id };
    },
    {
      onSuccess: async (data) => {
        navigate(`/stream/${data?.episode}?anime=${data?.results[0].id}`);
      },
    }
  );
  useEffect(() => {
    if (data) {
      setNewEps((prevData) => {
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
      <Loader loading={isLoading || routeLoading} opacity="opacity-90" />
      <div className="flex justify-center gap-3 flex-wrap mt-5">
        {newEps && newEps.map((item) => <Card item={item} mutate={mutate} />)}
      </div>
      <div className="flex justify-center items-center font-semibold text-blue-400 my-10">
        {newEps && (
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

export default NewEps;
