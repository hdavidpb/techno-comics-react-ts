import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import VariantsList from "./VariantsList";

const CharacterDetailCard = () => {
  const { characterDetail } = useSelector(
    (store: RootState) => store.charactersSlice
  );
  const character = characterDetail?.results[0];

  return (
    <div className="character__card__container">
      <div className="character__image">
        <img
          src={`${character?.thumbnail.path}.${character?.thumbnail.extension}`}
          alt="character_image"
        />
      </div>
      <div className="character__description__container">
        <div className="character__info__container">
          <h1>{character?.name}</h1>
          <p>{character?.description}</p>
          {character?.description === "" && (
            <p>This character not have a description.</p>
          )}
        </div>
        <VariantsList />
      </div>
    </div>
  );
};

export default CharacterDetailCard;
