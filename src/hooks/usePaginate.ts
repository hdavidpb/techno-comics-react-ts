import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getComicsCharacter } from "../redux/features/characters/services";
import { AppDispatch } from "../redux/store";
import { characterActionsType } from "./interfaces";

interface IProps {
  type: characterActionsType;
  totalRegisters: number | undefined;
  limit: number | undefined;
}
const usePaginate = ({ type, limit, totalRegisters }: IProps) => {
  const [totalPages, setTotalPages] = useState(0);
  const dispatch = useDispatch<AppDispatch>();

  const handleChangePage = ({ selected }: { selected: number }) => {
    const offset = selected * 100;
    if (type === characterActionsType["all characters"]) {
      dispatch(getComicsCharacter({ offset }));
      return;
    }
  };

  useEffect(() => {
    if (limit && totalRegisters) {
      setTotalPages(Math.round(totalRegisters / limit));
      return;
    }

    return () => {};
  }, [limit, totalRegisters]);

  return { handleChangePage, totalPages };
};

export default usePaginate;
