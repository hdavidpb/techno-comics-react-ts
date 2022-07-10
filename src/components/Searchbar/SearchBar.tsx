import { TextField } from "@mui/material";
import { pathNameType } from "../../hooks/interfaces";
import useFilter from "../../hooks/useFilter";
interface IProps {
  margin: string;
  width: string;
}
const SearchBar = ({ margin, width }: IProps) => {
  const type = window.location.pathname;

  const { handleChangeFilterValue, filterValue } = useFilter({
    type: type,
  });
  return (
    <div className="search__input_container" style={{ margin, width }}>
      <TextField
        placeholder="Buscar..."
        fullWidth
        inputProps={{ style: { padding: "11.5px 10px" } }}
        onChange={handleChangeFilterValue}
        value={filterValue}
      />
    </div>
  );
};

export default SearchBar;
