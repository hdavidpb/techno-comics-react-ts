import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "../components/Fallback/Loader";
import ProtectedRoutes from "../components/ProtectedRoutes";

const UserRegister = lazy(() => import("../pages/userRegister/UserRegister"));
const CharactersPage = lazy(() => import("../pages/characters/CharactersPage"));
const CharacterDetail = lazy(
  () => import("../pages/characterDetail/CharacterDetail")
);

const FavoritesPage = lazy(() => import("../pages/favorites/FavoritesPage"));

const MainRoutes = () => {
  return (
    <Suspense
      fallback={
        <Loader
          backgroundColor="rgb(0 0 0 / 89%)"
          widthImage="366px"
          heightImage="150px"
        />
      }
    >
      <Routes>
        <Route path="begin" element={<UserRegister />} />
        <Route
          path="/"
          element={
            <ProtectedRoutes>
              <CharactersPage />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/character/:id/:name"
          element={
            <ProtectedRoutes>
              <CharacterDetail />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/favorites"
          element={
            <ProtectedRoutes>
              <FavoritesPage />
            </ProtectedRoutes>
          }
        />
      </Routes>
    </Suspense>
  );
};

export default MainRoutes;
