import React from "react";

import { IMovie } from "../model/movieModel";
import { CDN_IMAGE_URL } from "../utils/constants";

interface IProps {
  movie: IMovie;
}

const MovieCard = ({ movie }: IProps) => {
  const { poster_path, title } = movie;

  if (!poster_path) return null;

  return (
    <div className="w-36 mr-4">
      <img src={`${CDN_IMAGE_URL}${poster_path}`} alt={title} />
    </div>
  );
};

export default MovieCard;
