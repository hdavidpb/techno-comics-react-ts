import { useState } from "react";

const useChangeLoginForm = () => {
  const [isLogin, setIsLogin] = useState<boolean>(
    localStorage.getItem("isLogin")!
      ? JSON.parse(localStorage.getItem("isLogin")!)
      : true
  );

  const handleChangeIsLogin = () => {
    setIsLogin(!isLogin);
    localStorage.setItem("isLogin", JSON.stringify(!isLogin));
  };

  return {
    isLogin,
    handleChangeIsLogin,
  };
};

export default useChangeLoginForm;
