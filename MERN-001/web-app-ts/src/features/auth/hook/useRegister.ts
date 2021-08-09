import {
	LOCAL_STORAGE_TOKEN_NAME,
	RegisterType,
	useCheckAuth,
	useToastMessage,
} from "features";
import { authApi } from "servers";

export const useRegister = () => {
	const showToastbar = useToastMessage();
	const { onCheckAuth } = useCheckAuth();

	const onRegister = async (userData: RegisterType): Promise<any> => {
		try {
			const response = await authApi.register(userData);
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

	return onRegister;
};
