import { authState } from "features";
import { useRecoilValue } from "recoil";

export const useAuthState = () => {
	return useRecoilValue(authState);
};
