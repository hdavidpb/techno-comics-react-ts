import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import useForms from "../../hooks/useForms";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import useChangeLoginForm from "../../hooks/useChangeLoginForm";

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
      <h1>{isLogin ? "Iniciar Sesión" : "Registrate"}</h1>
      <div className="input_container">
        <TextField
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
        <TextField
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

      <Button disabled={loadingUser} type="submit" variant="outlined">
        {isLogin ? "Ingresar" : "Registrar"}
      </Button>
      <Button type="button" variant="text" onClick={handleChangeIsLogin}>
        {isLogin ? "Registrate" : "Ya tengo cuenta"}
      </Button>
    </form>
  );
};

export default LoginForm;
