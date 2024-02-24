import React from "react";
import { useSelector } from "react-redux";

import { useMovieTrailer } from "../hooks/useMovieTrailer";
import { IRootState } from "../model/RootState";

interface IProps {
  movieId: number;
}

const VideoBackground = ({ movieId }: IProps) => {
  const trailer = useSelector((state: IRootState) => state.movies.movieTrailer);

  useMovieTrailer(movieId);

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${trailer.key}?si=nSAWQpOJhhcOHCGX`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
