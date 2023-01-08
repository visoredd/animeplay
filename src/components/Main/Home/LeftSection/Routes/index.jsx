import React, { useState, useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const Routes = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <div className="mt-12">
      <div className="flex text-center border-b-2 border-zinc-600 mb-2 sm:text-base text-sm">
        <div
          className={`p-2 ${
            pathname == "/"
              ? "bg-zinc-600 text-white"
              : "bg-zinc-800 text-blue-300"
          } hover:text-white hover:bg-zinc-600`}
          onClick={() => navigate("/")}
        >
          New Eps
        </div>
        <div
          onClick={() => navigate("/recent")}
          className={`p-2 ${
            pathname == "/recent"
              ? "bg-zinc-600 text-white"
              : "bg-zinc-800 text-blue-300"
          } hover:text-white hover:bg-zinc-600`}
        >
          Recent
        </div>
        <div
          onClick={() => navigate("/popular")}
          className={`p-2 ${
            pathname == "/popular" || pathname == "/popular/genre"
              ? "bg-zinc-600 text-white"
              : "bg-zinc-800 text-blue-300"
          } hover:text-white hover:bg-zinc-600`}
        >
          Popular
        </div>
        <div
          onClick={() => navigate("/movies")}
          className={`p-2 ${
            pathname == "/movies"
              ? "bg-zinc-600 text-white"
              : "bg-zinc-800 text-blue-300"
          } hover:text-white hover:bg-zinc-600`}
        >
          Movies
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Routes;
