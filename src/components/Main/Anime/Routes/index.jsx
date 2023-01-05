import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const Routes = ({ id }) => {
  const { pathname } = useLocation();
  let pathPrefix = `/anime/${id}`;
  const navigate = useNavigate();
  return (
    <div className="mt-8">
      <div className="sm:flex text-center border-b-2 border-zinc-600 mb-2">
        <div
          className={`p-2 ${
            pathname == `${pathPrefix}`
              ? "bg-zinc-600 text-white"
              : "bg-zinc-800 text-blue-300"
          } hover:text-white hover:bg-zinc-600`}
          onClick={() => navigate(`${pathPrefix}`)}
        >
          Synopsis
        </div>
        <div
          className={`p-2 ${
            pathname == `${pathPrefix}/related`
              ? "bg-zinc-600 text-white"
              : "bg-zinc-800 text-blue-300"
          } hover:text-white hover:bg-zinc-600`}
          onClick={() => navigate(`${pathPrefix}/related`)}
        >
          Related
        </div>
        <div
          className={`p-2 ${
            pathname == `${pathPrefix}/similar`
              ? "bg-zinc-600 text-white"
              : "bg-zinc-800 text-blue-300"
          } hover:text-white hover:bg-zinc-600`}
          onClick={() => navigate(`${pathPrefix}/similar`)}
        >
          Similar
        </div>
        <div className=" p-2 bg-zinc-800 text-blue-300 hover:text-white hover:bg-zinc-600">
          OP/ED
        </div>
        <div className=" p-2 bg-zinc-800 text-blue-300 hover:text-white hover:bg-zinc-600">
          Trailer
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Routes;
