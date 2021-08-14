import {
  createPostModalState,
  CreatePostType,
  updatePostIdState,
  updatePostModalState,
  usePostsList,
  useToastMessage,
  PostType,
} from "features";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { postsApis } from "servers";
import { useRecoilState, useRecoilValue } from "recoil";

export const useUpdatePost = () => {
  const showToastbar = useToastMessage();
  const { getPostsList } = usePostsList();
  const id = useRecoilValue(updatePostIdState);
  const showPostModal = useRecoilValue(updatePostModalState);
  const [postDetail, setPostDetail] = useState<PostType>();

  const schema = yup.object().shape({
    title: yup.string().required("Please enter post title"),
    description: yup.string(),
    url: yup.string(),
    status: yup.string(),
  });

  const onPostDetail = async (id: string) => {
    try {
      const response = await postsApis.getDetail(id);
      setPostDetail(response.post);
    } catch (error: any) {
      showToastbar(error, "error");
    }
  };

  useEffect(() => {
    onPostDetail(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id && showPostModal]);

  const [submit, setSubmit] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<CreatePostType>({
    reValidateMode: "onChange",
    defaultValues: {
      title: postDetail?.title,
      description: postDetail?.description,
      url: postDetail?.url,
      status: postDetail?.status,
    },
    resolver: yupResolver(schema),
  });

  const onUpdate = async (data: CreatePostType) => {
    try {
      const response = await postsApis.updatePost(id, data);
      console.log(response);
    } catch (error: any) {
      showToastbar(error, "error");
    }
  };

  return {
    errors,
    isSubmitting,
    submit,
    showPostModal,
    handleSubmit,
    register,
    reset,
    setSubmit,
    onUpdate,
    // setShowPostModal,
  };
};
