import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { movieSearchService } from "../services/movieService";
import {
  displayNoResultsMessage,
  saveSearchedMovies,
} from "../redux/slices/gptSlice";
import { DEBOUNCE_TIMMER_OFFSET } from "../utils/constants";

export const useGptSearchMovies = (searchedText: string) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleMovieSearch = async () => {
      // searchedText will hold that latest values always as it is depending upon the state
      // The API will always happens with the new searchedText value that are entered within the offset time
      const searchedMovies = await movieSearchService(searchedText);

      if (searchedMovies?.results?.length) {
        dispatch(saveSearchedMovies(searchedMovies?.results));
      } else {
        dispatch(saveSearchedMovies([]));
        dispatch(displayNoResultsMessage(searchedText.length > 0));
      }
    };

    // Calling the API after each 200msec. Waiting for the keys that should be entered withing the offset time.
    const debounceTimmer = setTimeout(() => {
      handleMovieSearch();
    }, DEBOUNCE_TIMMER_OFFSET);

    // Stopping the previous API call by clearing the timeout
    return () => clearTimeout(debounceTimmer);
  }, [searchedText, dispatch]);
};
