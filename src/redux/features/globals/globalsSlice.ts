import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  allComicsListScrollTop: 0,
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setAllComicsListScrollTop(state, action: PayloadAction<number>) {
      state.allComicsListScrollTop = action.payload;
    },
  },
});

export const { setAllComicsListScrollTop } = globalSlice.actions;

export default globalSlice.reducer;
