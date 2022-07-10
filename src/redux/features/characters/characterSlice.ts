import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICharacterResults, IInitialState } from "./interface";
import {
  addCharacterToUserFavorites,
  getCharacterById,
  getCharactersVariants,
  getComicsCharacter,
} from "./services";

const initialState: IInitialState = {
  charactersData: null,
  offsetCharacters: 0,
  favorites: [],
  renderFavorites: [],
  loadingFavorites: false,
  loadingCharacters: false,
  variantsData: null,
  loadingVariants: false,
  characterDetail: null,
};

const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    setLoadingFavorites: (state, action: PayloadAction<boolean>) => {
      state.loadingFavorites = action.payload;
    },
    setGetAllFavoritesFromUser: (
      state,
      action: PayloadAction<ICharacterResults[]>
    ) => {
      state.favorites = action.payload;
      state.renderFavorites = action.payload;
    },
    setRemoveFromFavorites: (state, action: PayloadAction<string>) => {
      state.favorites = state.favorites.filter(
        (character) => character.docId !== action.payload
      );
      state.renderFavorites = state.renderFavorites.filter(
        (character) => character.docId !== action.payload
      );
    },
    setFilterFavorites: (state, action: PayloadAction<string>) => {
      state.renderFavorites = state.favorites.filter((character) =>
        character.name.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    setChangeOffsetCharacters: (state, action: PayloadAction<number>) => {
      state.offsetCharacters = action.payload;
    },
  },
  extraReducers: ({ addCase }) => {
    addCase(getComicsCharacter.pending, (state) => {
      state.loadingCharacters = true;
    });
    addCase(getComicsCharacter.fulfilled, (state, { payload }) => {
      state.loadingCharacters = false;
      state.charactersData = payload!;
    });
    addCase(getCharacterById.pending, (state) => {
      state.loadingCharacters = true;
    });
    addCase(getCharacterById.fulfilled, (state, { payload }) => {
      state.loadingCharacters = false;
      state.characterDetail = payload!;
    });
    addCase(getCharactersVariants.pending, (state) => {
      state.loadingVariants = true;
    });
    addCase(getCharactersVariants.fulfilled, (state, { payload }) => {
      state.loadingVariants = false;
      state.variantsData = payload!;
    });
    addCase(addCharacterToUserFavorites.pending, (state) => {
      state.loadingFavorites = true;
    });
    addCase(addCharacterToUserFavorites.fulfilled, (state, { payload }) => {
      state.loadingFavorites = false;
      if (payload) {
        state.favorites = [...state.favorites, payload];
      }
    });
  },
});

export const {
  setFilterFavorites,
  setLoadingFavorites,
  setRemoveFromFavorites,
  setChangeOffsetCharacters,
  setGetAllFavoritesFromUser,
} = charactersSlice.actions;

export default charactersSlice.reducer;
