import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IInitialState, IUser } from "./interface";
import { registerUsers, signOutUser, userLogin } from "./services";

const initialState: IInitialState = {
  user: false,
  loadingUser: false,
};

export const usersSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getLoggedUser: (state, action: PayloadAction<IUser | null>) => {
      state.user = action.payload;
    },
  },
  extraReducers: ({ addCase }) => {
    addCase(registerUsers.pending, (state) => {
      state.loadingUser = true;
    });
    addCase(registerUsers.fulfilled, (state) => {
      state.loadingUser = false;
    });
    addCase(userLogin.pending, (state) => {
      state.loadingUser = true;
    });
    addCase(userLogin.fulfilled, (state, { payload }) => {
      state.loadingUser = false;
      state.user = payload!;
    });
    addCase(signOutUser.pending, (state) => {
      state.loadingUser = true;
    });
    addCase(signOutUser.fulfilled, (state, { payload }) => {
      state.loadingUser = false;
      state.user = payload!;
    });
  },
});
export const { getLoggedUser } = usersSlice.actions;

export default usersSlice.reducer;
