import React, { useState, useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const Routes = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <div className="mt-12">
      <div className="sm:flex text-center border-b-2 border-zinc-600 mb-2">
        <div
          className={`p-2 ${
            pathname == "/newEps"
              ? "bg-zinc-600 text-white"
              : "bg-zinc-800 text-blue-300"
          } hover:text-white hover:bg-zinc-600`}
          onClick={() => navigate("/newEps")}
        >
          New Eps
        </div>
        <div
          onClick={() => navigate("/")}
          className={`p-2 ${
            pathname == "/"
              ? "bg-zinc-600 text-white"
              : "bg-zinc-800 text-blue-300"
          } hover:text-white hover:bg-zinc-600`}
        >
          Recent
        </div>
        <div
          onClick={() => navigate("/popular")}
          className={`p-2 ${
            pathname == "/popular"
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
