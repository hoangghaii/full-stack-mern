import axiosClient from "servers/axiosClient";

export const useHeaderToken = () => {
	const setHeaderToken = (token: string | null) => {
		if (token) {
			axiosClient.defaults.headers.common["Authorization"] = `Bearer ${token}`;
		} else {
			delete axiosClient.defaults.headers.common["Authorization"];
		}
	};

	return setHeaderToken;
};
