import React, { useDeferredValue, useEffect, useRef, useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import logo from "assets/screen-1-removebg-preview.png";
import shuffle from "assets/shuffle_s92zpdp7usdz.svg";
import Loader from "components/Loader";
import axios from "axios";
import AutoComplete from "./AutoComplete";

const Header = () => {
  const navigate = useNavigate();
  const [showSearch, setShowSearch] = useState(false);
  const { mutate, isLoading: routeLoading } = useMutation(
    async () => {
      const { data } = await axios.get(
        `https://api.consumet.org/meta/anilist/random-anime`
      );
      return data;
    },
    {
      onSuccess: async (data) => {
        navigate(`/anime/${data?.id}`);
      },
    }
  );

  return (
    <div className="relative">
      <Loader loading={routeLoading} />
      <div className="w-full h-16 flex justify-between lg:justify-start items-center gap-4 px-10">
        <div className="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            className="w-6 h-6 cursor-pointer"
            onClick={() => navigate(-1)}
          >
            <path
              fillRule="evenodd"
              d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
              clipRule="evenodd"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            className="w-6 h-6 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
            <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
          </svg>
          <div className={`${showSearch ? "hidden" : "block"}`}>
            <img
              src={logo}
              alt="logo"
              className="w-48 cursor-pointer"
              onClick={() => navigate("/")}
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden lg:block w-96">
            <AutoComplete />
          </div>
          {showSearch && (
            <div className="block lg:hidden w-full">
              <AutoComplete />
            </div>
          )}
          <div
            className="block lg:hidden text-blue-300 scale-125 lg:scale-100 cursor-pointer"
            onClick={() => setShowSearch(!showSearch)}
          >
            {showSearch ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                  clip-rule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6"
              >
                <path d="M8.25 10.875a2.625 2.625 0 115.25 0 2.625 2.625 0 01-5.25 0z" />
                <path
                  fill-rule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.125 4.5a4.125 4.125 0 102.338 7.524l2.007 2.006a.75.75 0 101.06-1.06l-2.006-2.007a4.125 4.125 0 00-3.399-6.463z"
                  clip-rule="evenodd"
                />
              </svg>
            )}
          </div>

          <div
            className="text-gray-300 flex justify-center items-center cursor-pointer scale-125 lg:scale-100"
            onClick={mutate}
          >
            <img src={shuffle} alt="logo" className="w-6" />
            <span className="hidden lg:block">Random</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
