import Card from "components/Main/Home/LeftSection/Card";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Similar = () => {
  const navigate = useNavigate();
  const state = useSelector((state) => state.anime.value);
  return (
    <div className="flex justify-center gap-2 flex-wrap">
      {state?.recommendations?.map((item) => (
        <Card item={item} isAnime={true} />
      ))}
    </div>
  );
};

export default Similar;
