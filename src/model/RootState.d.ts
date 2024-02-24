import { IMovie, IMovieVideo } from "./movieModel";

interface IRootState {
  user: IUserState;
  movies: IMoviesState;
}

interface IUserState {
  email: string;
  photoURL: string;
  uid: string;
  displayName: string;
}

interface IMoviesState {
  nowPlayingMovie: IMovie[];
  movieTrailer: IMovieVideo;
}

export { IRootState, IUserState, IMoviesState };
