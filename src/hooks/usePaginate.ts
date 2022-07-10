import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setChangeOffsetCharacters } from "../redux/features/characters/characterSlice";
import { getComicsCharacter } from "../redux/features/characters/services";
import { AppDispatch } from "../redux/store";
import { pathNameType } from "./interfaces";

interface IProps {
  type: string;
  totalRegisters: number | undefined;
  limit: number | undefined;
}
const usePaginate = ({ type, limit, totalRegisters }: IProps) => {
  const [totalPages, setTotalPages] = useState(0);
  const dispatch = useDispatch<AppDispatch>();

  const handleChangePage = ({ selected }: { selected: number }) => {
    const offset = selected * 100;
    if (type === pathNameType.comics) {
      dispatch(getComicsCharacter({ offset }));
      dispatch(setChangeOffsetCharacters(offset));
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
