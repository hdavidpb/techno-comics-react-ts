import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getComicsCharacter } from "../redux/features/characters/services";
import { AppDispatch } from "../redux/store";
import { characterActionsType } from "./interfaces";

interface IProps {
  type: characterActionsType;
}

const useFilter = ({ type }: IProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const [filterValue, setFilterValue] = useState("");
  const handleChangeFilterValue = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFilterValue(e.target.value);
  };

  useEffect(() => {
    if (type === characterActionsType["all characters"]) {
      dispatch(getComicsCharacter({ nameStartsWith: filterValue }));
    }
  }, [filterValue]);

  return {
    handleChangeFilterValue,
  };
};

export default useFilter;
