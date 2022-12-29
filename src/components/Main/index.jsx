import React from "react";
import { Route, Routes } from "react-router-dom";
import Anime from "./Anime";
import Synopsis from "./Anime/Synopsis";
import Home from "./Home";
import Movies from "./Home/LeftSection/Movies";
import NewEps from "./Home/LeftSection/NewEps";
import Popular from "./Home/LeftSection/Popular";
import Recent from "./Home/LeftSection/Recent";
import Streams from "./Streams";

const Main = () => {
  return (
    <div className="min-h-screen">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Recent />} />
          <Route path="newEps" element={<NewEps />} />
          <Route path="popular" element={<Popular />} />
          <Route path="movies" element={<Movies />} />

          <Route />
        </Route>

        <Route path="anime/:id" element={<Anime />}>
          <Route index element={<Synopsis />}></Route>
        </Route>
        <Route path="stream/:id" element={<Streams />} />
      </Routes>
    </div>
  );
};

export default Main;
