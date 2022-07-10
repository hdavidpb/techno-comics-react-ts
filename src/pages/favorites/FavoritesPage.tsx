import { useEffect } from "react";
import { useSelector } from "react-redux";
import useHandleFavorites from "../../hooks/useHandleFavorites";
import { RootState } from "../../redux/store";
import CharactersList from "../characters/CharactersList";

const FavoritesPage = () => {
  const { handleGetFavoritesFromUser } = useHandleFavorites({});
  const { user } = useSelector((store: RootState) => store.usersSlice);
  const { loadingFavorites, renderFavorites } = useSelector(
    (store: RootState) => store.charactersSlice
  );

  useEffect(() => {
    if (user) {
      //@ts-ignore
      handleGetFavoritesFromUser(user.uid);
      return;
    }
  }, [user]);

  return (
    <div className="comicsPage__container">
      <CharactersList results={renderFavorites} loading={loadingFavorites} />
    </div>
  );
};

export default FavoritesPage;
