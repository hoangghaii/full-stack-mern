import { atom } from "recoil";

export const postModalState = atom<boolean>({
  key: "postModalState",
  default: false,
});
