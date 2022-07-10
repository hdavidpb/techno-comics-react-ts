import { createSlice } from "@reduxjs/toolkit";
import { IInitialState } from "./interface";
import { getComicsCharacter } from "./services";

const initialState: IInitialState = {
  charactersData: null,
  favorites: [],
  loadingCharacters: false,
};

const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {},
  extraReducers: ({ addCase }) => {
    addCase(getComicsCharacter.pending, (state) => {
      state.loadingCharacters = true;
    });
    addCase(getComicsCharacter.fulfilled, (state, { payload }) => {
      state.loadingCharacters = false;
      state.charactersData = payload!;
    });
  },
});

export default charactersSlice.reducer;
