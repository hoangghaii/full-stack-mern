import { atom } from "recoil";

type AuthType = {
  isAuthenticated?: boolean;
  user?: string;
};

export const authState = atom<AuthType>({
  key: "authState",
  default: {
    isAuthenticated: false,
    user: "",
  },
});
