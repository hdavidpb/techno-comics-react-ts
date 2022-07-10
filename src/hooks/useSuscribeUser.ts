import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../firebase";
import { getLoggedUser } from "../redux/features/users/usersSlice";

const useSuscribeUser = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const unSuscribe = onAuthStateChanged(auth, (userData) => {
      if (userData) {
        const { email, photoURL, uid, displayName } = userData;
        const user = { email, photoURL, uid, displayName };
        dispatch(getLoggedUser(user));
        console.log(userData);
      } else {
        console.log(userData);
        dispatch(getLoggedUser(null));
      }
    });
    return unSuscribe();
  }, []);
};

export default useSuscribeUser;
