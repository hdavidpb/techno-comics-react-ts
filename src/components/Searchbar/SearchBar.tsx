import { TextField } from "@mui/material";
import { characterActionsType } from "../../hooks/interfaces";
import useFilter from "../../hooks/useFilter";
interface IProps {
  margin: string;
  width: string;
}
const SearchBar = ({ margin, width }: IProps) => {
  const { handleChangeFilterValue } = useFilter({
    type: characterActionsType["all characters"],
  });
  return (
    <div className="search__input_container" style={{ margin, width }}>
      <TextField
        placeholder="Buscar..."
        fullWidth
        inputProps={{ style: { padding: "11.5px 10px" } }}
        onChange={handleChangeFilterValue}
      />
    </div>
  );
};

export default SearchBar;
