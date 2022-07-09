export interface IInitialState {
  user: null | IUser;
  loadingUser: boolean;
}

export interface IUser {
  uid: string;
  displayName: string | null;
  accessToken?: string;
  email: string | null;
  photoURL: string | null;
}

export enum authErrorType {
  userInUse = "auth/email-already-in-use",
  userNotFound = "auth/user-not-found",
  wrongPassword = "auth/wrong-password",
}
