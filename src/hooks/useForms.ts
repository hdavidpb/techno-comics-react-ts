import { useFormik } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUsers, userLogin } from "../redux/features/users/services";
import { ILoginValues } from "./interfaces";
import * as Yup from "yup";
import { AppDispatch } from "../redux/store";

interface IProps {
  isLogin: boolean;
}

const useForms = ({ isLogin }: IProps) => {
  const [showPassVisibility, setShowPassVisibility] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

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
