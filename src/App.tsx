import { AppDispatch, RootState } from "./redux/store";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

import MainRoutes from "./routes/MainRoutes";
import AppMenu from "./components/NavMenu/AppMenu";
import useSuscribeUser from "./hooks/useSuscribeUser";
import Loader from "./components/Fallback/Loader";
import { useEffect } from "react";
import useHandleFavorites from "./hooks/useHandleFavorites";

function App() {
  const { handleGetFavoritesFromUser } = useHandleFavorites({});
  const { user } = useSelector((store: RootState) => store.usersSlice);

  useSuscribeUser();
  useEffect(() => {
    if (user) {
      //@ts-ignore
      handleGetFavoritesFromUser(user.uid);
      return;
    }
  }, [user]);

  return user === false ? (
    <Loader
      backgroundColor="rgb(0 0 0 / 89%)"
      widthImage="366px"
      heightImage="150px"
    />
  ) : (
    <div className="app__container">
      <BrowserRouter>
        {user && <AppMenu />}
        <MainRoutes />
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

export default App;
