import { authTokenState } from "features";
import { useRecoilValue } from "recoil";

export const useAuthToken = () => {
	return useRecoilValue(authTokenState);
};
