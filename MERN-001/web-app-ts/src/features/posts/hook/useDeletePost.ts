import { usePostsList, useToastMessage } from "features";
import { postsApis } from "servers";

export const useDeletePost = () => {
  const showToastbar = useToastMessage();
  const { getPostsList } = usePostsList();

  const onDelete = async (id: string) => {
    try {
      const response = await postsApis.deletePost(id);
      console.log(response);
      if (response) {
        if (response.success) {
          getPostsList();
          showToastbar(response.message, "success");
        } else showToastbar(response.message, "error");
      }
    } catch (error: any) {
      showToastbar(error, "error");
    }
  };

  return onDelete;
};
