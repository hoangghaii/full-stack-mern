import { yupResolver } from "@hookform/resolvers/yup";
import {
  createPostModalState,
  CreatePostType,
  usePostsList,
  useToastMessage,
} from "features";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { postsApis } from "servers";
import * as yup from "yup";

export const useCreatePost = () => {
  const showToastbar = useToastMessage();
  const { getPostsList } = usePostsList();

  const schema = yup.object().shape({
    title: yup.string().required("Please enter post title"),
    description: yup.string(),
    url: yup.string(),
  });

  const [submit, setSubmit] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
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
        if (response.success) {
          getPostsList();
          showToastbar(response.message, "success");
        } else showToastbar(response.message, "error");
        setShowPostModal(false);
      }
    } catch (error: any) {
      showToastbar("Internal server error", "error");
    }
  };

  const [showPostModal, setShowPostModal] =
    useRecoilState(createPostModalState);

  return {
    errors,
    isSubmitting,
    submit,
    showPostModal,
    handleSubmit,
    register,
    reset,
    setSubmit,
    onCreate,
    setShowPostModal,
  };
};
