import { useSelector } from "react-redux";
import Loader from "../../components/Fallback/Loader";
import { RootState } from "../../redux/store";
import ComicCard from "./ComicCard";

const ComicList = () => {
  const { charactersData, loadingCharacters } = useSelector(
    (store: RootState) => store.charactersSlice
  );
  const results = charactersData?.results;
  return (
    <div className="characters__container">
      {!loadingCharacters ? (
        results?.map((character) => (
          <ComicCard character={character} key={character.id} />
        ))
      ) : (
        <Loader width="157px" height="80px" backgroundColor="#FFFFFF" />
      )}
    </div>
  );
};

export default ComicList;
