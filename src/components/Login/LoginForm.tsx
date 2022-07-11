import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import useChangeLoginForm from "../../hooks/useChangeLoginForm";

import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import * as MUI from "@mui/material";

import useForms from "../../hooks/useForms";

const LoginForm = () => {
  const { loadingUser } = useSelector((store: RootState) => store.usersSlice);
  const { handleChangeIsLogin, isLogin } = useChangeLoginForm();
  const {
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    touched,
    values,
    showPassVisibility,
    handleShowPassword,
  } = useForms({ isLogin });

  return (
    <form className="form__container" onSubmit={handleSubmit}>
      <div className="avatar__icon">
        <img
          src={
            isLogin
              ? "https://firebasestorage.googleapis.com/v0/b/techno-comics-app.appspot.com/o/irom-man.png?alt=media&token=ae454ccf-ff0e-4713-8868-b87037b7cfe4"
              : "https://firebasestorage.googleapis.com/v0/b/techno-comics-app.appspot.com/o/captain-america.jpg?alt=media&token=771a4dca-dc1c-4226-bd5b-867747c57874"
          }
          alt="avatar"
        />
      </div>
      <h1>{isLogin ? "Iniciar Sesión" : "Registrate"}</h1>
      <div className="input_container">
        <MUI.TextField
          name="email"
          value={values.email}
          onBlur={handleBlur}
          onChange={handleChange}
          fullWidth
          id="email-basic"
          label="Email"
          variant="outlined"
          type="email"
          //@ts-ignore
          error={errors.email && touched.email}
        />
        {errors.email && touched.email && (
          <span className="error__message ">{errors.email}</span>
        )}
      </div>

      <div className="input_container">
        <MUI.TextField
          name="password"
          value={values.password}
          onBlur={handleBlur}
          onChange={handleChange}
          fullWidth
          id="password-basic"
          label="Contraseña"
          variant="outlined"
          type={showPassVisibility ? "text" : "password"}
          //@ts-ignore
          error={errors.password && touched.password}
        />
        <button
          className="btn-show-pass"
          type="button"
          onClick={handleShowPassword}
        >
          {showPassVisibility ? (
            <VisibilityOutlinedIcon />
          ) : (
            <VisibilityOffOutlinedIcon />
          )}
        </button>
        {errors.password && touched.password && (
          <span className="error__message ">{errors.password}</span>
        )}
      </div>

      {loadingUser ? (
        <MUI.CircularProgress />
      ) : (
        <MUI.Button disabled={loadingUser} type="submit" variant="contained">
          {isLogin ? "Ingresar" : "Registrar"}
        </MUI.Button>
      )}

      <MUI.Button
        type="button"
        variant="text"
        onClick={handleChangeIsLogin}
        color="primary"
        style={{ fontWeight: "bold" }}
      >
        {isLogin ? "Registrate" : "Ya tengo cuenta"}
      </MUI.Button>
    </form>
  );
};

export default LoginForm;
