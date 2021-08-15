import { useCachedAsyncFunction, useToastMessage } from "features";
import { useState } from "react";
import { postsApis } from "servers";

export const usePostsList = () => {
  const showToastbar = useToastMessage();

  const [error, setError] = useState<Error | undefined>(undefined);

  const { data, mutate } = useCachedAsyncFunction(
    "postsList",
    postsApis.getAll,
    setError
  );

  if (error) showToastbar("Internal server error", "error");

  return { postsList: data, getPostsList: mutate };
};
