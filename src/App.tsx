import { useEffect } from "react";
import { AppDispatch, RootState } from "./redux/store";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { getComicsCharacter } from "./redux/features/characters/services";
import MainRoutes from "./routes/MainRoutes";
import AppMenu from "./components/NavMenu/AppMenu";
import useSuscribeUser from "./hooks/useSuscribeUser";
import Loader from "./components/Fallback/Loader";

function App() {
  useSuscribeUser();
  const dispatch = useDispatch<AppDispatch>();
  const { user } = useSelector((store: RootState) => store.usersSlice);

  useEffect(() => {
    dispatch(getComicsCharacter({}));
  }, []);
  return user === false ? (
    <Loader backgroundColor="rgb(0 0 0 / 89%)" width="366px" height="150px" />
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
