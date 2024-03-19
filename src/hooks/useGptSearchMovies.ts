import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { movieSearchService } from "../services/movieService";
import {
  displayNoResultsMessage,
  saveSearchedMovies,
  updateCachedMovies,
} from "../redux/slices/gptSlice";
import { IRootState } from "../model/RootState";
import { GPT_SEARCH_DEBOUNCE_TIME } from "../utils/constants";

export const useGptSearchMovies = (searchedText: string) => {
  const dispatch = useDispatch();
  const { cachedMovies } = useSelector((state: IRootState) => state.gpt);

  useEffect(() => {
    const handleMovieSearch = async () => {
      // Skipping the API call by returning the cache results from the store
      if (cachedMovies[searchedText]) {
        dispatch(saveSearchedMovies(cachedMovies[searchedText]));
      } else {
        // searchedText will hold that latest values always as it is depending upon the state
        // The API will always happens with the new searchedText value that are entered within the offset time
        const searchedMovies = await movieSearchService(searchedText);
        if (searchedMovies?.results?.length) {
          dispatch(saveSearchedMovies(searchedMovies?.results));

          // Caching/Saving the movies based on the searched text
          dispatch(
            updateCachedMovies({
              searchedText,
              movies: searchedMovies?.results,
            })
          );
        } else {
          dispatch(saveSearchedMovies([]));
          dispatch(displayNoResultsMessage(searchedText.length > 0));
        }
      }
    };

    // Calling the API after each 200msec. Waiting for the keys that should be entered withing the offset time.
    const debounceTimmer = setTimeout(() => {
      handleMovieSearch();
    }, GPT_SEARCH_DEBOUNCE_TIME);

    // Stopping the previous API call by clearing the timeout
    return () => clearTimeout(debounceTimmer);
  }, [searchedText, dispatch, cachedMovies]);
};
