import { Route, Routes } from "react-router-dom";
import ComicsPage from "../pages/comics/ComicsPage";
import UserRegister from "../pages/userRegister/UserRegister";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="login" element={<UserRegister />} />
      <Route path="/" element={<ComicsPage />} />
    </Routes>
  );
};

export default MainRoutes;
