import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { errorAlert, successAlert } from "../../../utils/notifications";

import {
  ICharacterDataResponse,
  ICharacterResults,
  IDataQueryCharacter,
} from "./interface";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../firebase";

const API = import.meta.env.VITE_MARVEL_API;
const favoritesRef = collection(db, "charactersFavorites");

export const getComicsCharacter = createAsyncThunk(
  "getComicsCharacter",
  async ({ limit, offset, nameStartsWith }: IDataQueryCharacter) => {
    const LIMIT = `&limit=${limit ? limit : 100}`;
    const OFFSET = `&offset=${offset ? offset : 0}`;
    const CHARACTER = nameStartsWith ? `&nameStartsWith=${nameStartsWith}` : "";
    const QUERYURL = `characters?ts=1&apikey=1a4ab4429db46bce1af0dc3de7be88f4&hash=3b0fbe4cfb96febcf3e7f8f541963721${LIMIT}${OFFSET}${CHARACTER}`;

    try {
      const res = await axios.get<ICharacterDataResponse>(`${API}/${QUERYURL}`);
      const { data } = res.data;
      console.log(data);
      return data;
    } catch (error) {
      errorAlert("Algo salio mal");
      console.log(error);
    }
  }
);

export const getCharacterById = createAsyncThunk(
  "getComicsCharacter-by-id",
  async (id: number) => {
    const QUERYURL = `characters/${id}?ts=1&apikey=1a4ab4429db46bce1af0dc3de7be88f4&hash=3b0fbe4cfb96febcf3e7f8f541963721`;

    try {
      const res = await axios.get<ICharacterDataResponse>(`${API}/${QUERYURL}`);
      const { data } = res.data;
      console.log(data);
      return data;
    } catch (error) {
      errorAlert("Algo salio mal");
      console.log(error);
    }
  }
);

export const getCharactersVariants = createAsyncThunk(
  "getComicsCharacter-variants",
  async ({ limit, offset, nameStartsWith }: IDataQueryCharacter) => {
    const LIMIT = `&limit=${limit ? limit : 100}`;
    const OFFSET = `&offset=${offset ? offset : 0}`;
    const CHARACTER = `&nameStartsWith=${nameStartsWith}`;
    const QUERYURL = `characters?ts=1&apikey=1a4ab4429db46bce1af0dc3de7be88f4&hash=3b0fbe4cfb96febcf3e7f8f541963721${LIMIT}${OFFSET}${CHARACTER}`;

    try {
      const res = await axios.get<ICharacterDataResponse>(`${API}/${QUERYURL}`);
      const { data } = res.data;
      console.log(data);
      return data;
    } catch (error) {
      errorAlert("Algo salio mal");
      console.log(error);
    }
  }
);

export const addCharacterToUserFavorites = createAsyncThunk(
  "addCharacterToUserFavorites",
  async (character: ICharacterResults, { getState }) => {
    //@ts-ignore
    const { uid } = getState().usersSlice.user;

    const characterData: ICharacterResults = {
      ...character,
      userID: uid,
    };
    try {
      const characterFavoriteRef = await addDoc(favoritesRef, characterData);
      if (characterFavoriteRef.id) {
        successAlert("Character added to favorites");
        return character;
      } else {
        return null;
      }
    } catch (error) {
      errorAlert("Ah ocurrido un error al agregar el favorito en Firestore");
    }
  }
);
