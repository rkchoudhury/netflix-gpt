import React from "react";

import MovieCard from "./MovieCard";
import { IMovie } from "../model/movieModel";

interface IProps {
  title: string;
  movies: IMovie[];
}

const MovieList = ({ title, movies }: IProps) => {
  return (
    <div className="">
      <h1 className="text-2xl font-semibold text-white mx-4 py-4">{title}</h1>
      <div className="flex overflow-x-scroll mx-4">
        <div className="flex">
          {movies.map((eachMovie: IMovie) => (
            <MovieCard key={eachMovie.id} movie={eachMovie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
