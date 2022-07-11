import {
  collection,
  deleteDoc,
  getDocs,
  query,
  where,
  doc,
} from "firebase/firestore";

import { useDispatch, useSelector } from "react-redux";
import { db } from "../firebase";
import {
  setChangeIsAddinToFavorites,
  setGetAllFavoritesFromUser,
  setLoadingFavorites,
  setRemoveFromFavorites,
} from "../redux/features/characters/characterSlice";
import { ICharacterResults } from "../redux/features/characters/interface";
import { addCharacterToUserFavorites } from "../redux/features/characters/services";
import { AppDispatch, RootState } from "../redux/store";
import { errorAlert } from "../utils/notifications";

interface IProps {
  pathName?: string;
}

const useHandleFavorites = ({ pathName }: IProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const { favorites } = useSelector(
    (store: RootState) => store.charactersSlice
  );

  const handleDeleFromFavorites = async (docId: string) => {
    try {
      await deleteDoc(doc(db, "charactersFavorites", docId));
      dispatch(setRemoveFromFavorites(docId));
    } catch (error) {
      console.log(error);
      errorAlert("something went wrong");
    }
  };

  const handleManageFavorites = (
    character: ICharacterResults,
    docId: string
  ) => {
    if (pathName === "/") {
      const characterRef = favorites.find((char) => char.id === character.id);
      if (characterRef === undefined) {
        dispatch(addCharacterToUserFavorites(character));
        dispatch(setChangeIsAddinToFavorites(character.id));
      } else {
        errorAlert("Character is already added to your favorites");
      }
      return;
    }

    if (pathName === "/favorites") {
      handleDeleFromFavorites(docId);
    }
  };

  const handleGetFavoritesFromUser = async (userID: string) => {
    const favoritesRef = collection(db, "charactersFavorites");

    const q = query(favoritesRef, where("userID", "==", userID));

    dispatch(setLoadingFavorites(true));
    try {
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map((doc) => ({
        docId: doc.id,
        ...doc.data(),
      })) as ICharacterResults[];
      console.log(data);
      dispatch(setGetAllFavoritesFromUser(data));
      dispatch(setLoadingFavorites(false));
    } catch (error) {
      console.log("ERROR");
      errorAlert("Error getting favorites from Firestore");
      dispatch(setLoadingFavorites(false));
    }
  };

  return {
    handleManageFavorites,
    handleGetFavoritesFromUser,
  };
};

export default useHandleFavorites;
