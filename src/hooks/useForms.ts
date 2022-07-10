import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUsers, userLogin } from "../redux/features/users/services";
import { ILoginValues } from "./interfaces";
import { AppDispatch, RootState } from "../redux/store";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

interface IProps {
  isLogin: boolean;
}

const useForms = ({ isLogin }: IProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { user } = useSelector((store: RootState) => store.usersSlice);
  const [showPassVisibility, setShowPassVisibility] = useState(false);

  const initialValues: ILoginValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Debe digitar una dirección de email valida")
      .required("*Requerido"),
    password: Yup.string()
      .required("*Requerido")
      .min(6, "Contraseña debil, minimo 6 caracteres"),
  });

  const onSubmit = (values: ILoginValues) => {
    if (isLogin) {
      dispatch(userLogin(values));
    } else {
      dispatch(registerUsers(values));
    }

    resetForm({
      values: { ...initialValues },
    });
  };

  const formik = useFormik({ initialValues, validationSchema, onSubmit });
  const {
    handleChange,
    handleBlur,
    resetForm,
    values,
    handleSubmit,
    touched,
    errors,
  } = formik;

  const handleShowPassword = () => {
    setShowPassVisibility((prev) => {
      return !prev;
    });
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  return {
    showPassVisibility,
    touched,
    values,
    errors,
    handleShowPassword,
    handleSubmit,
    handleChange,
    handleBlur,
  };
};

export default useForms;
