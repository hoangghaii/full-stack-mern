import { LOCAL_STORAGE_TOKEN_NAME, useToastMessage } from "features";
import { UserType } from "features/common/types";
import { authApi } from "servers";

export const useLogin = () => {
	const showToastbar = useToastMessage();

	const onLogin = async (userData: UserType): Promise<any> => {
		try {
			const response = await authApi.login(userData);
			if (response.success) {
				localStorage.setItem(LOCAL_STORAGE_TOKEN_NAME, response.accessToken);
				showToastbar(response.message, "success");
			} else showToastbar(response.message, "error");
		} catch (error: any) {
			if (error.response) showToastbar(error.response, "error");
			else showToastbar(error.message, "error");
		}
	};

	return onLogin;
};
