import React, { Ref, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { lang } from "../utils/languageConstants";
import { IRootState } from "../model/RootState";
import { movieSearchService } from "../services/movieService";
import { saveSearchedMovies } from "../redux/slices/gptSlice";

const GptSearchBar = () => {
  const { lang: langKey } = useSelector((state: IRootState) => state.config);
  const searchedText: Ref<HTMLInputElement> = useRef(null);
  const dispatch = useDispatch();

  const handleMovieSearch = async () => {
    const text = searchedText?.current?.value ?? "";
    const searchedMovies = await movieSearchService(text);

    if (searchedMovies?.results?.length) {
      dispatch(saveSearchedMovies(searchedMovies?.results));
    }
  };

  return (
    <div className="flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12 mx-2"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchedText}
          className="p-2 m-2 md:p-4 md:m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          onClick={handleMovieSearch}
          className="text-white font-semibold bg-red-700 p-2 m-2 md:p-4 md:m-4 rounded-lg col-span-3"
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
