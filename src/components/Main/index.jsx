import axios from "axios";
import Error from "components/Error";
import React from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Anime from "./Anime";
import Synopsis from "./Anime/Synopsis";
import Home from "./Home";
import Movies from "./Home/LeftSection/Movies";
import NewEps from "./Home/LeftSection/NewEps";
import Popular from "./Home/LeftSection/Popular";
import PopularGenre from "./Home/LeftSection/PopularGenre";
import Recent from "./Home/LeftSection/Recent";
import Streams from "./Streams";

const Main = () => {
  // axios.defaults.timeout = "10000";
  // axios.interceptors.response.use(
  //   function (response) {
  //     return response;
  //   },
  //   function (error) {
  //     if ((error.code = "ECONNABORTED")) {
  //       console.log(error.code);
  //       window.location.href = "/error";
  //     }
  //   }
  // );
  return (
    <div className="min-h-screen">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<NewEps />} />
          <Route path="recent" element={<Recent />} />
          <Route path="popular" element={<Popular />} />
          <Route path="popular/genre" element={<PopularGenre />} />
          <Route path="movies" element={<Movies />} />

          <Route />
        </Route>

        <Route path="anime/:id" element={<Anime />}>
          <Route index element={<Synopsis />}></Route>
        </Route>
        <Route path="stream/:id" element={<Streams />} />
        <Route path="error" element={<Error />} />
      </Routes>
    </div>
  );
};

export default Main;
