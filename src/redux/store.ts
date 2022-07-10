import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./features/users/usersSlice";
import charactersSlice from "./features/characters/characterSlice";
import globalSlice from "./features/globals/globalsSlice";
export const store = configureStore({
  reducer: {
    usersSlice,
    charactersSlice,
    globalSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
