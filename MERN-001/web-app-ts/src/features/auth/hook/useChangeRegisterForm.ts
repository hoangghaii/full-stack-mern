import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterType } from "features";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

export const useChangeRegisterForm = () => {
  const schema = yup.object().shape({
    username: yup.string().required("Please enter username"),
    password: yup.string().required("Please enter password"),
    confirmPassword: yup
      .string()
      .required("Please enter confirm password")
      .oneOf([yup.ref("password"), null], "Confirm Password does not match"),
  });

  const [submit, setSubmit] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterType>({
    reValidateMode: "onChange",
    defaultValues: {
      username: "",
      password: "",
      confirmPassword: "",
    },
    resolver: yupResolver(schema),
  });

  return { handleSubmit, errors, isSubmitting, register, submit, setSubmit };
};
