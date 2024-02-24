import React from "react";
import { useSelector } from "react-redux";

import Header from "../../components/Header";
import { IRootState } from "../../model/RootState";
import { useNowPlayingMovies } from "../../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  const { uid } = useSelector((state: IRootState) => state.user);

  useNowPlayingMovies();

  return (
    <div>
      <Header showSignOut={!!uid} />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
