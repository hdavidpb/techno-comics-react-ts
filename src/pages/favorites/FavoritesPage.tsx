import { useEffect } from "react";
import { useSelector } from "react-redux";
import useHandleFavorites from "../../hooks/useHandleFavorites";
import { RootState } from "../../redux/store";
import NoResults from "../characterDetail/NoResults";
import CharactersList from "../characters/CharactersList";

const FavoritesPage = () => {
  const { handleGetFavoritesFromUser } = useHandleFavorites({});
  const { user } = useSelector((store: RootState) => store.usersSlice);
  const { loadingFavorites, renderFavorites, favorites } = useSelector(
    (store: RootState) => store.charactersSlice
  );
  const pathName = window.location.pathname;
  useEffect(() => {
    if (user) {
      //@ts-ignore
      handleGetFavoritesFromUser(user.uid);
      return;
    }
  }, [user]);

  return (
    <div className="comicsPage__container">
      {favorites.length === 0 && pathName === "/favorites" && <NoResults />}
      <CharactersList results={renderFavorites} loading={loadingFavorites} />
    </div>
  );
};

export default FavoritesPage;
