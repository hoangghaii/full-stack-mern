import { authState } from "features";
import { UserType } from "features/common/types";
import { useSetRecoilState } from "recoil";
import { authApi } from "servers";

export const useLogin = () => {
	const setAccessToken = useSetRecoilState(authState);

	const onLogin = async (
		event: React.FormEvent<HTMLFormElement>,
		userData: UserType
	): Promise<object> => {
		event.preventDefault();
		const response = await authApi.login(userData);
		setAccessToken(response.accessToken ?? undefined);
		return response;
	};

	return { onLogin };
};
