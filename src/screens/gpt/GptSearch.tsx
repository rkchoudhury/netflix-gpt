import React from "react";
import { useSelector } from "react-redux";

import GptSearchBar from "../../components/GptSearchBar";
import GptSearchMovies from "../../components/GptSearchMovies";
import { BACK_GROUND_IMAGE_URL } from "../../utils/constants";
import { IRootState } from "../../model/RootState";

const GptSearch = () => {
  const { searchedMovies, showNoResultsMessage } = useSelector(
    (state: IRootState) => state.gpt
  );

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
        <GptSearchMovies
          movies={searchedMovies}
          showMessage={showNoResultsMessage}
        />
      </div>
    </div>
  );
};

export default GptSearch;
