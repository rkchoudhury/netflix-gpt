import { GET_API_OPTIONS } from "../config/apiConfig";

const nowPlayingMovieService = async () => {
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      GET_API_OPTIONS
    );
    const jsonResponse = await response.json();
    return jsonResponse;
  } catch (error) {
    console.log("Unable to fetch nowPlayingMovie");
  }
};

export { nowPlayingMovieService };
