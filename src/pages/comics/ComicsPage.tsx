import React from "react";
import { useSelector } from "react-redux";
import Pagination from "../../components/Pagination";
import { characterActionsType } from "../../hooks/interfaces";
import usePaginate from "../../hooks/usePaginate";
import { RootState } from "../../redux/store";
import ComicsList from "./ComicList";

const ComicsPage = () => {
  const { charactersData } = useSelector(
    (store: RootState) => store.charactersSlice
  );

  const { handleChangePage, totalPages } = usePaginate({
    type: characterActionsType["all characters"],
    limit: charactersData?.limit,
    totalRegisters: charactersData?.total,
  });
  return (
    <div className="comicsPage__container">
      <ComicsList />
      {charactersData && (
        <Pagination pageCount={totalPages} onPageChange={handleChangePage} />
      )}
    </div>
  );
};

export default ComicsPage;
