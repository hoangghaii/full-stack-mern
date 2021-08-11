import { LOCAL_STORAGE_TOKEN_NAME, useCheckAuth } from "features";

export const useLogout = () => {
  const { onCheckAuth } = useCheckAuth();

  const onLogout = () => {
    localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME);
    onCheckAuth(undefined);
  };

  return onLogout;
};
