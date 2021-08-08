import { atom } from "recoil";

export const authTokenState = atom<string | undefined>({
	key: "authTokenState",
	default: undefined,
});
