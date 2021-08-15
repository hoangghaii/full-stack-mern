import { yupResolver } from "@hookform/resolvers/yup";
import {
  CreatePostType,
  PostType,
  updatePostIdState,
  updatePostModalState,
  usePostsList,
  useToastMessage,
} from "features";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { postsApis } from "servers";
import * as yup from "yup";

export const useUpdatePost = () => {
  const showToastbar = useToastMessage();
  const { getPostsList } = usePostsList();
  const [idPostUpdate, setIdPostUpdate] = useRecoilState(updatePostIdState);
  const [showPostModal, setShowPostModal] =
    useRecoilState(updatePostModalState);
  const [postDetail, setPostDetail] = useState<PostType>();

  const schema = yup.object().shape({
    title: yup.string().required("Please enter post title"),
    description: yup.string(),
    url: yup.string(),
    status: yup.string(),
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
      title: postDetail?.title,
      description: postDetail?.description,
      url: postDetail?.url,
      status: postDetail?.status,
    },
    resolver: yupResolver(schema),
  });

  const onPostDetail = async (id: string) => {
    try {
      const response = await postsApis.getDetail(id);
      setPostDetail(response.post);
      reset(response.post);
    } catch (error: any) {
      showToastbar(error, "error");
    }
  };

  useEffect(() => {
    onPostDetail(idPostUpdate);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idPostUpdate && showPostModal]);

  const onUpdate = async (data: CreatePostType) => {
    try {
      const response = await postsApis.updatePost(idPostUpdate, data);
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
    setIdPostUpdate,
    setShowPostModal,
  };
};
