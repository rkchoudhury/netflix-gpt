import React, { useState } from "react";
import { useSelector } from "react-redux";

import { lang } from "../utils/languageConstants";
import { IRootState } from "../model/RootState";
import { useGptSearchMovies } from "../hooks/useGptSearchMovies";

const GptSearchBar = () => {
  const { lang: langKey } = useSelector((state: IRootState) => state.config);
  const [searchedText, setSearchedText] = useState("");

  useGptSearchMovies(searchedText);

  return (
    <div className="flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black flex border border-black hover:border-red-700"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          className="p-2 m-2 md:p-4 md:m-4 w-full cursor-pointer"
          placeholder={lang[langKey].gptSearchPlaceholder}
          onChange={(e) => setSearchedText(e.target.value)}
        />
      </form>
    </div>
  );
};

export default GptSearchBar;
