import { LOCAL_STORAGE_TOKEN_NAME, useCachedAsyncFunction } from "features";
import { useState } from "react";
import { authApi } from "servers";
import axiosClient from "servers/axiosClient";

export const useHeaderToken = async (): Promise<any> => {
	const authToken = localStorage.getItem(LOCAL_STORAGE_TOKEN_NAME);

	if (authToken)
		axiosClient.defaults.headers.common["Authorization"] = `Bearer ${authToken}`;
	else delete axiosClient.defaults.headers.common["Authorization"];

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [error, setError] = useState<Error | undefined>(undefined);

	try {
		const response = await useCachedAsyncFunction(
			"checkUser",
			authApi.checkUser,
			setError
		);

		if (response && !response.success) {
			localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME);
			delete axiosClient.defaults.headers.common["Authorization"];
		}
	} catch (error) {
		localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME);
		delete axiosClient.defaults.headers.common["Authorization"];
	}
};
