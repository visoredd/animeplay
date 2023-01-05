import LastEpisode from "components/LastEpisode";
import React from "react";
import Streams from "../Streams";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

const Home = () => {
  return (
    <div className="px-10 my-5 grid grid-cols-12 gap-2">
      <div className="col-span-12 sm:col-span-9 min-h-96">
        <LeftSection />
      </div>
      <div className="col-span-12 sm:col-span-3 bg-[#202020] rounded h-max">
        <RightSection />
      </div>

      <LastEpisode />
    </div>
  );
};

export default Home;
