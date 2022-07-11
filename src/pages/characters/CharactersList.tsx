import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import Loader from "../../components/Fallback/Loader";
import useScrollDetected from "../../hooks/useScrollDetected";
import { ICharacterResults } from "../../redux/features/characters/interface";
import { RootState } from "../../redux/store";
import NoResults from "../characterDetail/NoResults";
import CharactersCard from "./CharactersCard";

interface IProps {
  results: ICharacterResults[];
  loading: boolean;
}

const CharacterList = ({ results, loading }: IProps) => {
  const { favorites } = useSelector(
    (store: RootState) => store.charactersSlice
  );

  return (
    <div className="characters__container">
      {!loading ? (
        results?.map((character) => (
          <CharactersCard character={character} key={character.id} />
        ))
      ) : (
        <Loader
          heightContainer="100%"
          widthImage="287px"
          heightImage="150px"
          backgroundColor="transparent"
        />
      )}
    </div>
  );
};

export default CharacterList;
