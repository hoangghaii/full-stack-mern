import { atom } from "recoil";

export const updatePostModalState = atom<boolean>({
  key: "updatePostModalState",
  default: false,
});

export const updatePostIdState = atom<string>({
  key: "updatePostIdState",
  default: "",
});
