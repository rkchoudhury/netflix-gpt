interface IRootState {
  user: IUserState;
}

interface IUserState {
  email: string;
  photoURL: string;
  uid: string;
  displayName: string;
}

export { IRootState, IUserState };
