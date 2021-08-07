import { AxiosResponse } from "axios";
import axiosClient from "./axiosClient";

type UserType = {
	username: string;
	password: string;
};

type AuthResponseType = {
	success: boolean;
	message: string;
	accessToken: string;
};

export const authApi = {
	async login(userData: UserType) {
		const url = "/api/auth/login";

		try {
			const respon: AxiosResponse = await axiosClient.post<AuthResponseType>(
				url,
				userData
			);
			return respon;
		} catch (error) {
			return error;
		}
	},
};
