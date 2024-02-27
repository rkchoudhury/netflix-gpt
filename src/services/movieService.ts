import { GET_API_OPTIONS } from "../config/apiConfig";
import { MOVIE_TYPE } from "../enums/movieTypeEnum";

const movieService = async (movieType: MOVIE_TYPE = MOVIE_TYPE.POPULAR) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieType}?language=en-US&page=1`,
      GET_API_OPTIONS
    );
    const jsonResponse = await response.json();
    return jsonResponse;
  } catch (error) {
    console.log("Unable to fetch nowPlayingMovie");
  }
};

const movieVideoService = async (movieId: number) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      GET_API_OPTIONS
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Unable to fetch movieVideo");
  }
};

const movieSearchService = async (movieName: string) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`,
      GET_API_OPTIONS
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Unable to fetch movieSearchService");
  }
};

export { movieService, movieVideoService, movieSearchService };
