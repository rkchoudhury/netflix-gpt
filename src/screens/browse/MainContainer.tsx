import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import VideoBackground from "../../components/VideoBackground";
import VideoTitle from "../../components/VideoTitle";
import { IRootState } from "../../model/RootState";
import { saveSelectedMovie } from "../../redux/slices/watchSlice";
import { ROUTE_NAMES } from "../../navigation/Routes";

const MainContainer = () => {
  const dispatch = useDispatch();
  const movies = useSelector(
    (state: IRootState) => state.movies?.nowPlayingMovie
  );
  const navigate = useNavigate();

  const mainMovie = movies?.[0];

  const handleClick = useCallback(() => {
    if (mainMovie) {
      dispatch(saveSelectedMovie(mainMovie));
      navigate(ROUTE_NAMES.WATCH);
    }
  }, [dispatch, mainMovie, navigate]);

  if (movies?.length === 0) return null;

  const { title, overview, id } = mainMovie;

  return (
    <div>
      <VideoTitle title={title} overview={overview} onPressPlay={handleClick} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
