import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { errorAlert } from "../../../utils/notifications";

import { ICharacterDataResponse, IDataQueryCharacter } from "./interface";

const API = import.meta.env.VITE_MARVEL_API;

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
