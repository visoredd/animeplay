import React from "react";
import { useSelector } from "react-redux";

const Synopsis = () => {
  const state = useSelector((state) => state.anime.value);
  return (
    <div
      className="text-zinc-300 text-sm"
      dangerouslySetInnerHTML={{
        __html: state?.description,
      }}
    />
  );
};

export default Synopsis;
