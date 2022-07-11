import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { setFilterFavorites } from "../redux/features/characters/characterSlice";
import { getComicsCharacter } from "../redux/features/characters/services";
import { AppDispatch } from "../redux/store";
import { pathNameType } from "./interfaces";

interface IProps {
  type: string;
}

const useFilter = ({ type }: IProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const [filterValue, setFilterValue] = useState("");

  const debounceRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    setFilterValue("");
  }, [type]);

  const handleChangeFilterValue = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = e.target.value;
    setFilterValue(value);
    if (debounceRef.current) clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(() => {
      if (type === pathNameType.comics) {
        dispatch(getComicsCharacter({ nameStartsWith: value }));

        return;
      }

      if (type === pathNameType.favorites) {
        dispatch(setFilterFavorites(e.target.value));

        return;
      }
    }, 350);
  };

  return { filterValue, handleChangeFilterValue };
};

export default useFilter;
