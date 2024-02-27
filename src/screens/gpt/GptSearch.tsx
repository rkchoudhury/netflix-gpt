import React from "react";
import { useSelector } from "react-redux";

import GptSearchBar from "../../components/GptSearchBar";
import { BACK_GROUND_IMAGE_URL } from "../../utils/constants";
import { IRootState } from "../../model/RootState";
import MovieList from "../../components/MovieList";

const GptSearch = () => {
  const { searchedMovies } = useSelector((state: IRootState) => state.gpt);

  return (
    <div>
      <div className="fixed -z-10">
        <img
          className="h-screen w-screen object-cover"
          src={BACK_GROUND_IMAGE_URL}
          alt="login_image"
        />
      </div>
      <div className="pt-[10%]">
        <GptSearchBar />
        {searchedMovies?.length && (
          <div className="bg-gradient-to-br from-black mt-10">
            <MovieList title={"Searched Results"} movies={searchedMovies} />
          </div>
        )}
      </div>
    </div>
  );
};

export default GptSearch;
