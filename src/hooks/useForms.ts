import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { ILoginValues } from "./interfaces";

interface IProps {
  isLogin: boolean;
}

const useForms = ({ isLogin }: IProps) => {
  const [showPassVisibility, setShowPassVisibility] = useState(false);

  const initialValues: ILoginValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
  });

  const onSubmit = (values: ILoginValues) => {
    if (isLogin) {
      console.log("TE VAS A LOGUEAR CON : ", values);
    } else {
      console.log("TE VAS A REGISTRAR CON : ", values);
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
