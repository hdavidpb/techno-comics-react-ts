import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../redux/store";

interface IProps {
  children: JSX.Element;
}

const ProtectedRoutes = ({ children }: IProps) => {
  const navigate = useNavigate();

  const { user } = useSelector((store: RootState) => store.usersSlice);

  useEffect(() => {
    if (user === null) {
      navigate("/begin");
    }
  }, [user]);

  return children;
};

export default ProtectedRoutes;
