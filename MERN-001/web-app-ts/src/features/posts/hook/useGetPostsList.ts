import { useCachedAsyncFunction, useToastMessage } from "features";
import { useState } from "react";
import { postsApis } from "servers";

export const useGetPostsList = () => {
  const showToastbar = useToastMessage();

  const [error, setError] = useState<Error | undefined>(undefined);

  const { data, mutate } = useCachedAsyncFunction(
    "postsList",
    postsApis.getAll,
    setError
  );

  if (error) showToastbar(error, "error");

  return { postsList: data, getPostsList: mutate };
};
