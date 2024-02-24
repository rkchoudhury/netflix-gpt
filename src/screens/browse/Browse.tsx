import React from "react";
import { useSelector } from "react-redux";

import Header from "../../components/Header";
import { IRootState } from "../../model/RootState";
import { useNowPlayingMovies } from "../../hooks/useNowPlayingMovies";

const Browse = () => {
  const { uid } = useSelector((state: IRootState) => state.user);

  useNowPlayingMovies();

  return (
    <div>
      <Header showSignOut={!!uid} />
      <p>Browse</p>
    </div>
  );
};

export default Browse;
