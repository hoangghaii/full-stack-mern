import { authTokenState, useToastMessage } from "features";
import { UserType } from "features/common/types";
import { useSetRecoilState } from "recoil";
import { authApi } from "servers";

export const useLogin = () => {
	const setAccessToken = useSetRecoilState(authTokenState);
	const showToastbar = useToastMessage();

	const onLogin = async (
		event: React.FormEvent<HTMLFormElement>,
		userData: UserType
	): Promise<any> => {
		event.preventDefault();
		try {
			const response = await authApi.login(userData);
			if (response.success) {
				setAccessToken(response.accessToken);
				showToastbar(response.message, "success");
			} else showToastbar(response.message, "error");
		} catch (error: any) {
			if (error.response) showToastbar(error.response, "error");
			else showToastbar(error.message, "error");
		}
	};

	return onLogin;
};
