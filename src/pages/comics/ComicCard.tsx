import * as MUI from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { ICharacterResults } from "../../redux/features/characters/interface";
interface IProps {
  character: ICharacterResults;
}

const ComicCard = ({ character }: IProps) => {
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
      <MUI.CardActions sx={{ justifyContent: "flex-end" }}>
        <MUI.IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </MUI.IconButton>
      </MUI.CardActions>
    </MUI.Card>
  );
};

export default ComicCard;
