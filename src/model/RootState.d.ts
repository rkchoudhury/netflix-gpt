import { IMovie, IMovieVideo } from "./movieModel";

interface IRootState {
  user: IUserState;
  movies: IMoviesState;
  gpt: IGptState;
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
}

export { IRootState, IUserState, IMoviesState, IGptState };
