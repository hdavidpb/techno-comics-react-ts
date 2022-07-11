import * as MUI from "@mui/material";
import DoDisturbIcon from "@mui/icons-material/DoDisturb";
import useHandleFavorites from "../../hooks/useHandleFavorites";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { ICharacterResults } from "../../redux/features/characters/interface";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { pathNameType } from "../../hooks/interfaces";
interface IProps {
  character: ICharacterResults;
}

const ComicCard = ({ character }: IProps) => {
  const pathName = window.location.pathname;
  const navigate = useNavigate();
  const handleCharacterDetail = (id: number, name: string) => {
    navigate(`/character/${id}/${name}`);
  };
  const { loadingFavorites } = useSelector(
    (store: RootState) => store.charactersSlice
  );
  const { handleManageFavorites } = useHandleFavorites({ pathName: pathName });

  return (
    <MUI.Card sx={{ width: 345 }}>
      <MUI.CardMedia
        component="img"
        height="194"
        image={`${character.thumbnail.path}.${character.thumbnail.extension}`}
        alt="Paella dish"
      />
      <MUI.CardContent>
        <MUI.Typography variant="h6" color="text.primary">
          {character.name}
        </MUI.Typography>
      </MUI.CardContent>
      <MUI.CardActions sx={{ justifyContent: "space-between" }}>
        {loadingFavorites ? (
          <MUI.CircularProgress />
        ) : (
          <MUI.IconButton
            aria-label="add to favorites"
            onClick={() => handleManageFavorites(character, character.docId!)}
          >
            {pathName === pathNameType.comics ? (
              <FavoriteIcon />
            ) : (
              <DoDisturbIcon />
            )}
          </MUI.IconButton>
        )}

        <MUI.Button
          variant="outlined"
          onClick={() => handleCharacterDetail(character.id, character.name)}
        >
          More
        </MUI.Button>
      </MUI.CardActions>
    </MUI.Card>
  );
};

export default ComicCard;
