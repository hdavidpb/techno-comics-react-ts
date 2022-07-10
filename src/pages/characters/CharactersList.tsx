import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import Loader from "../../components/Fallback/Loader";
import useScrollDetected from "../../hooks/useScrollDetected";
import { ICharacterResults } from "../../redux/features/characters/interface";
import { RootState } from "../../redux/store";
import CharactersCard from "./CharactersCard";

interface IProps {
  results: ICharacterResults[];
  loading: boolean;
}

const CharacterList = ({ results, loading }: IProps) => {
  //const { containerRef, handleChangeScrollTop } = useScrollDetected();

  return (
    <div className="characters__container">
      {!loading ? (
        results?.map((character) => (
          <CharactersCard character={character} key={character.id} />
        ))
      ) : (
        <Loader
          heightContainer="100%"
          widthImage="157px"
          heightImage="80px"
          backgroundColor="#FFFFFF"
        />
      )}
    </div>
  );
};

export default CharacterList;
