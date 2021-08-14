import { yupResolver } from "@hookform/resolvers/yup";
import { UserType } from "features";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

export const useChangeLoginForm = () => {
  const schema = yup.object().shape({
    username: yup.string().required("Please enter username"),
    password: yup.string().required("Please enter password"),
  });

  const [submit, setSubmit] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<UserType>({
    reValidateMode: "onChange",
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  return { handleSubmit, errors, isSubmitting, register, submit, setSubmit };
};
