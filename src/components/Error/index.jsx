import React from "react";
import logo from "assets/images/new_chara.png.jpg";
import Loader from "components/Loader";
const Error = () => {
  return (
    <div className="w-full h-full min-h-screen bg-[#141416] flex justify-center items-center">
      <img src={logo} alt="" />
    </div>
  );
};

export default Error;
