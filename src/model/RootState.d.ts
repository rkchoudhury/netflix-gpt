import { IMovie, IMovieVideo } from "./movieModel";
import { LanguageEnum } from "../enums/languageEnum";
import { IChatMessage } from "./chat";

interface IRootState {
  user: IUserState;
  movies: IMoviesState;
  gpt: IGptState;
  config: IConfigState;
  watch: IWatchState;
  error: IErrorState;
  chat: IChatState;
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
  cachedMovies: Record<string, IMovie[]>;
}

interface IConfigState {
  lang: LanguageEnum;
}

interface IWatchState {
  selectedMovie: IMovie;
  movieVideos: IMovieVideo[];
  nowPlayingVideoKey: string;
}

interface IErrorState {
  isError: boolean;
}

interface IChatState {
  messages: IChatMessage[];
}

export {
  IRootState,
  IUserState,
  IMoviesState,
  IGptState,
  IConfigState,
  IWatchState,
  IErrorState,
  IChatState,
};
