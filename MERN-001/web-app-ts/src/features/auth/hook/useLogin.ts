import {
	LOCAL_STORAGE_TOKEN_NAME,
	useCheckAuth,
	UserType,
	useToastMessage,
} from "features";
import { authApi } from "servers";

export const useLogin = () => {
	const showToastbar = useToastMessage();
	const { onCheckAuth } = useCheckAuth();

	const onLogin = async (userData: UserType) => {
		try {
			const response = await authApi.login(userData);
			if (response.success) {
				localStorage.setItem(LOCAL_STORAGE_TOKEN_NAME, response.accessToken);
				onCheckAuth();
				showToastbar(response.message, "success");
			} else showToastbar(response.message, "error");
		} catch (error: any) {
			if (error.response) showToastbar(error.response, "error");
			else showToastbar(error.message, "error");
		}
	};

	return onLogin;
};
