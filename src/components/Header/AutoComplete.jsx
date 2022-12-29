import useDebounce from "assets/hooks/useDebounce";
import React, { useEffect, useRef, useState } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { advanceAnimeSearch } from "services/api";

const AutoComplete = () => {
  const navigate = useNavigate();
  const [suggestions, setSugggestions] = useState([]);
  const [showSearch, setShowSearch] = useState(false);
  const [text, setText] = useState("");
  const deferredSearch = useDebounce(text, 500);
  const { data } = useQuery(["advance-search", deferredSearch], () =>
    advanceAnimeSearch(deferredSearch)
  );
  const ref = useRef(null);
  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setText("");
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);
  useEffect(() => {
    if (data && data.results.length > 1) {
      setSugggestions(data.results);
    }
    if (deferredSearch.length <= 1) {
      setSugggestions([]);
    }
  }, [data, deferredSearch]);
  return (
    <div className="relative">
      <input
        className="bg-[#141416] text-gray-300 w-full p-1 rounded outline-none border-2 border-zinc-800"
        placeholder="Search"
        value={text}
        onChange={(e) => setText(e.target.value)}
        type="text"
      />
      <div
        className="absolute z-30 border-x-2 border-b-2 border-zinc-800 shadow-2xl"
        ref={ref}
      >
        {suggestions.slice(0, 5).map((item) => (
          <div
            className="grid grid-cols-8 gap-2 min-h-20 bg-[#141416] hover:bg-zinc-800 cursor-pointer p-2 border-b-2 border-zinc-800"
            key={item.id}
            onClick={() => {
              setText("");
              navigate(`/anime/${item.id}`);
            }}
          >
            <div className="col-span-2">
              <img
                src={item.image}
                alt=""
                className="object-cover w-full h-20"
              />
            </div>
            <div className="col-span-6 px-2 text-sm">
              <div className="text-blue-300">{item.title.english}</div>
              <p className="text-sm text-zinc-600">{item.genres.join(" ,")}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AutoComplete;
