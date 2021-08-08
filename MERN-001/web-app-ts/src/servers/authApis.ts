import { AxiosResponse } from "axios";
import { AuthResponseType, UserType } from "features/common/types";
import axiosClient from "./axiosClient";

export const authApi = {
	async login(userData: UserType) {
		const url = "/auth/login";

		try {
			const respon: AxiosResponse = await axiosClient.post<AuthResponseType>(
				url,
				userData
			);
			return respon.data;
		} catch (error) {
			return error;
		}
	},

	async register(userData: UserType) {
		const url = "/auth/register";

		try {
			const respon: AxiosResponse = await axiosClient.post<AuthResponseType>(
				url,
				userData
			);
			return respon.data;
		} catch (error) {
			return error;
		}
	},
};