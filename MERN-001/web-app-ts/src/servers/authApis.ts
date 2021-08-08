import { AxiosResponse } from "axios";
import {
	AuthResponseType,
	RegisterType,
	UserType,
} from "features/common/types";
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

	async register(userData: RegisterType) {
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

	async checkUser() {
		const url = "/auth";

		try {
			const respon: AxiosResponse = await axiosClient.get(url);
			return respon.data;
		} catch (error) {
			return error;
		}
	},
};
