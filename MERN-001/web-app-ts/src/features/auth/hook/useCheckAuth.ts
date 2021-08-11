import {
  authState,
  LOCAL_STORAGE_TOKEN_NAME,
  useCachedAsyncFunction,
  useHeaderToken,
  useToastMessage,
} from "features";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { authApi } from "servers";

export const useCheckAuth = () => {
  const setHeaderToken = useHeaderToken();
  const [authInfo, setAuthInfo] = useRecoilState(authState);
  const showToastbar = useToastMessage();
  const [error, setError] = useState<Error | undefined>(undefined);

  if (localStorage[LOCAL_STORAGE_TOKEN_NAME])
    setHeaderToken(localStorage[LOCAL_STORAGE_TOKEN_NAME]);

  const { data, mutate } = useCachedAsyncFunction(
    "checkAuth",
    authApi.checkUser,
    setError
  );

  useEffect(() => {
    if (data && data.success) {
      setAuthInfo({
        isAuthenticated: true,
        user: data.user.username,
      });
    } else {
      setAuthInfo({
        isAuthenticated: false,
        user: "",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const onCheckAuth = (token: string | undefined) => {
    setHeaderToken(token);
    mutate();
  };

  if (error) showToastbar(error, "error");

  return { authResponse: data, authInfo, onCheckAuth };
};
