import { authTokenState, useToastMessage } from "features";
import { RegisterType } from "features/common/types";
import { useSetRecoilState } from "recoil";
import { authApi } from "servers";

export const useRegister = () => {
	const setAccessToken = useSetRecoilState(authTokenState);
	const showToastbar = useToastMessage();

	const onRegister = async (userData: RegisterType): Promise<any> => {
		try {
			const response = await authApi.register(userData);
			if (response.success) {
				setAccessToken(response.accessToken);
				showToastbar(response.message, "success");
			} else showToastbar(response.message, "error");
		} catch (error: any) {
			if (error.response) showToastbar(error.response, "error");
			else showToastbar(error.message, "error");
		}
	};

	return onRegister;
};
