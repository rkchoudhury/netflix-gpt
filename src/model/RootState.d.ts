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
  nowPlayingMovie: any[];
}

export { IRootState, IUserState, IMoviesState };
