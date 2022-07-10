import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loader from "../../components/Fallback/Loader";
import {
  getCharacterById,
  getCharactersVariants,
} from "../../redux/features/characters/services";
import { AppDispatch, RootState } from "../../redux/store";
import CharacterDetailCard from "./CharacterDetailCard";

const CharacterDetail = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { id, name } = useParams<{ id: string; name: string }>();

  const { loadingCharacters, characterDetail } = useSelector(
    (store: RootState) => store.charactersSlice
  );

  useEffect(() => {
    dispatch(getCharacterById(+id!));
    dispatch(getCharactersVariants({ nameStartsWith: name?.split(" ")[0] }));
  }, []);

  return (
    <div className="character__detail__container">
      {!loadingCharacters && characterDetail !== undefined ? (
        <CharacterDetailCard />
      ) : (
        <Loader
          heightImage="150px"
          widthImage="350px"
          backgroundColor="#ffffff14"
          heightContainer="100%"
        />
      )}
    </div>
  );
};

export default CharacterDetail;
