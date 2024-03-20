import React from "react";

import MovieCard from "./MovieCard";
import { IMovie } from "../model/movieModel";

interface IProps {
  movies: IMovie[];
  showMessage: boolean;
}

const GptSearchMovies = ({ movies, showMessage }: IProps) => {
  return (
    <div className="">
      <div className="bg-gradient-to-br from-black mt-10">
        {movies.length > 0 && (
          <div className="flex mx-4">
            <div className="flex flex-wrap justify-center items-center">
              {movies.map((eachMovie: IMovie) => (
                <MovieCard key={eachMovie.id} movie={eachMovie} />
              ))}
            </div>
          </div>
        )}
        {showMessage && (
          <div className="text-white font-medium text-3xl flex justify-center items-center">
            No results found
          </div>
        )}
      </div>
    </div>
  );
};

export default GptSearchMovies;
