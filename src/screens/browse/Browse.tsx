import React from "react";
import { useSelector } from "react-redux";

import { IRootState } from "../../model/RootState";
import { useNowPlayingMovies } from "../../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { usePopularMovies } from "../../hooks/usePopularMovies";
import { useTopRatedMovies } from "../../hooks/useTopRatedMovies";
import { useUpcomingMovies } from "../../hooks/useUpcomingMovies";
import GptSearch from "../gpt/GptSearch";

const Browse = () => {
  const { showGptSearch } = useSelector((state: IRootState) => state.gpt);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div>
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
