import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import Pagination from "../../components/Pagination";

import usePaginate from "../../hooks/usePaginate";
import { getComicsCharacter } from "../../redux/features/characters/services";
import { AppDispatch, RootState } from "../../redux/store";
import CharactersList from "./CharactersList";

const ComicsPage = () => {
  const type = window.location.pathname;
  const dispatch = useDispatch<AppDispatch>();

  const { charactersData, loadingCharacters, offsetCharacters } = useSelector(
    (store: RootState) => store.charactersSlice
  );
  const results = charactersData?.results;

  useEffect(() => {
    dispatch(getComicsCharacter({ offset: offsetCharacters }));
  }, []);

  const { handleChangePage, totalPages } = usePaginate({
    type: type,
    limit: charactersData?.limit,
    totalRegisters: charactersData?.total,
  });
  return (
    <div className="comicsPage__container">
      <CharactersList
        results={results ? results : []}
        loading={loadingCharacters}
      />
      {charactersData && (
        <Pagination
          pageCount={totalPages}
          onPageChange={handleChangePage}
          offset={offsetCharacters}
        />
      )}
    </div>
  );
};

export default ComicsPage;
