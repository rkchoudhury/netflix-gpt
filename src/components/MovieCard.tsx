import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { IMovie } from "../model/movieModel";
import { CDN_IMAGE_URL } from "../utils/constants";
import { saveSelectedMovie } from "../redux/slices/watchSlice";
import { ROUTE_NAMES } from "../navigation/Routes";

interface IProps {
  movie: IMovie;
}

const MovieCard = ({ movie }: IProps) => {
  const { poster_path, title } = movie;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (!poster_path) return null;

  const handleClick = () => {
    dispatch(saveSelectedMovie(movie));
    navigate(ROUTE_NAMES.WATCH);
  };

  return (
    <div className="w-36 mr-4 mb-4 cursor-pointer" onClick={handleClick}>
      <img src={`${CDN_IMAGE_URL}${poster_path}`} alt={title} />
    </div>
  );
};

export default MovieCard;
