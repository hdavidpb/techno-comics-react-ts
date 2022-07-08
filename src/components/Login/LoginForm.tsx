import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import useForms from "../../hooks/useForms";

interface IProps {
  isLogin: boolean;
  title: "Bienvenido" | "Registrate";
}

const LoginForm = ({ isLogin, title }: IProps) => {
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
      <h1>{title}</h1>
      <TextField
        name="email"
        onBlur={handleBlur}
        onChange={handleChange}
        fullWidth
        id="outlined-basic"
        label="Email"
        variant="outlined"
        type="email"
        //@ts-ignore
        error={errors.email && touched.email}
        helperText={errors.password && touched.password ? "Requerido" : ""}
      />
      <div className="input_container">
        <TextField
          name="password"
          onBlur={handleBlur}
          onChange={handleChange}
          fullWidth
          id="outlined-basic"
          label="Contraseña"
          variant="outlined"
          type="password"
          //@ts-ignore
          error={errors.password && touched.password}
          helperText={errors.password && touched.password ? "Requerido" : ""}
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
      </div>

      <Button type="submit" variant="outlined">
        {isLogin ? "Ingresar" : "Registrar"}
      </Button>
      <Button type="button" variant="text">
        {isLogin ? "Registrate" : "Ya tengo cuenta"}
      </Button>
    </form>
  );
};

export default LoginForm;
