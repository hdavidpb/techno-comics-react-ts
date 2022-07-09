import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../../../firebase";
import { ILoginValues } from "../../../hooks/interfaces";
import { errorAlert, successAlert } from "../../../utils/notifications";
import { authErrorType, IUser } from "./interface";

export const registerUsers = createAsyncThunk(
  "register-user-action",
  async ({ email, password }: ILoginValues) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      console.log(res);
      successAlert("Usuario registrado con exito!");
      return res;
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode === authErrorType.userInUse) {
        errorAlert("Este email ya se encuentra registrado!");
      }
      console.log({ errorCode, errorMessage });
    }
  }
);

export const userLogin = createAsyncThunk(
  "login-user-action",
  async ({ email, password }: ILoginValues) => {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      const user: IUser = {
        displayName: res.user.displayName,
        email: res.user.email,
        photoURL: res.user.photoURL,
        uid: res.user.uid,
      };

      return user;
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;

      if (errorCode === authErrorType.userNotFound) {
        errorAlert("Usuario y/o contraseña invalidos");
        return;
      }
      if (errorCode === authErrorType.wrongPassword) {
        errorAlert("Usuario y/o contraseña invalidos");
        return;
      }
      console.log({ errorCode, errorMessage });
    }
  }
);

export const signOutUser = createAsyncThunk(
  "sign-out-user-action",
  async () => {
    try {
      const res = await signOut(auth);

      return res;
    } catch (error: any) {
      console.log(error);
    }
  }
);
