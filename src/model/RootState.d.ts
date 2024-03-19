import { IMovie, IMovieVideo } from "./movieModel";
import { LanguageEnum } from "../enums/languageEnum";

interface IRootState {
  user: IUserState;
  movies: IMoviesState;
  gpt: IGptState;
  config: IConfigState;
}

interface IUserState {
  email: string;
  photoURL: string;
  uid: string;
  displayName: string;
}

interface IMoviesState {
  nowPlayingMovie: IMovie[];
  popularMovies: IMovie[];
  topRatedMovies: IMovie[];
  upcomingMovies: IMovie[];
  movieTrailer: IMovieVideo;
}

interface IGptState {
  showGptSearch: boolean;
  searchedMovies: IMovie[];
  showNoResultsMessage: boolean;
}

interface IConfigState {
  lang: LanguageEnum;
}

export { IRootState, IUserState, IMoviesState, IGptState, IConfigState };
