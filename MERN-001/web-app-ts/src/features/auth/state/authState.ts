import { atom } from "recoil";

type AuthType = {
  authLoading?: boolean;
  isAuthenticated?: boolean;
  user?: string;
};

export const authState = atom<AuthType | undefined>({
  key: "authState",
  default: {
    authLoading: true,
    isAuthenticated: false,
    user: "",
  },
});
