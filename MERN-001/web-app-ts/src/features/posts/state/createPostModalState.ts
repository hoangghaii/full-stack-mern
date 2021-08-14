import { atom } from "recoil";

export const createPostModalState = atom<boolean>({
  key: "createPostModalState",
  default: false,
});
