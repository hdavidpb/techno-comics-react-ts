import { useState } from "react";
import LoginForm from "../../components/Login/LoginForm";

const UserRegister = () => {
  return (
    <div className="user__register__container">
      <div className="register__layaout__container">
        <div className="layaout__bg__image"></div>
        <div className="layaout_form_container">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default UserRegister;
