import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Routes = () => {
  const navigate = useNavigate();
  return (
    <div className="mt-8">
      <div className="sm:flex text-center border-b-2 border-zinc-600 mb-2">
        <div className=" p-2 bg-zinc-800 text-blue-300 hover:text-white hover:bg-zinc-600">
          Synopsis
        </div>
        <div className=" p-2 bg-zinc-800 text-blue-300 hover:text-white hover:bg-zinc-600">
          Related
        </div>
        <div className=" p-2 bg-zinc-800 text-blue-300 hover:text-white hover:bg-zinc-600">
          Similar
        </div>
        <div className=" p-2 bg-zinc-800 text-blue-300 hover:text-white hover:bg-zinc-600">
          OP/ED
        </div>
        <div className=" p-2 bg-zinc-800 text-blue-300 hover:text-white hover:bg-zinc-600">
          Trailer
        </div>
      </div>
    </div>
  );
};

export default Routes;
