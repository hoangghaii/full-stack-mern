import { yupResolver } from "@hookform/resolvers/yup";
import {
  CreatePostType,
  postModalState,
  useGetPostsList,
  useToastMessage,
} from "features";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { postsApis } from "servers";
import * as yup from "yup";

export const useCreatePost = () => {
  const showToastbar = useToastMessage();
  const { getPostsList } = useGetPostsList();

  const schema = yup.object().shape({
    title: yup.string().required("Please enter post title"),
    description: yup.string(),
    url: yup.string(),
  });

  const [submit, setSubmit] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<CreatePostType>({
    reValidateMode: "onChange",
    defaultValues: {
      title: "",
      description: "",
      url: "",
    },
    resolver: yupResolver(schema),
  });

  const onCreate = async (data: CreatePostType) => {
    try {
      const response = await postsApis.createPost(data);
      if (response) {
        if (response.success) showToastbar(response.message, "success");
        else showToastbar(response.message, "error");
        setShowPostModal(false);
        getPostsList();
      }
    } catch (error: any) {
      showToastbar(error, "error");
    }
  };

  const [showPostModal, setShowPostModal] = useRecoilState(postModalState);

  return {
    handleSubmit,
    errors,
    isSubmitting,
    register,
    reset,
    submit,
    setSubmit,
    onCreate,
    showPostModal,
    setShowPostModal,
  };
};
