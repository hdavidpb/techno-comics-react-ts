import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "../components/Fallback/Loader";
import ProtectedRoutes from "../components/ProtectedRoutes";

const UserRegister = lazy(() => import("../pages/userRegister/UserRegister"));
const ComicsPage = lazy(() => import("../pages/comics/ComicsPage"));

const MainRoutes = () => {
  return (
    <Suspense
      fallback={
        <Loader
          backgroundColor="rgb(0 0 0 / 89%)"
          width="366px"
          height="150px"
        />
      }
    >
      <Routes>
        <Route path="begin" element={<UserRegister />} />
        <Route
          path="/"
          element={
            <ProtectedRoutes>
              <ComicsPage />
            </ProtectedRoutes>
          }
        />
      </Routes>
    </Suspense>
  );
};

export default MainRoutes;
