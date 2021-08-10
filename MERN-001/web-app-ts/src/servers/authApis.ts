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
      const response: AxiosResponse = await axiosClient.post<AuthResponseType>(
        url,
        userData
      );
      return response.data;
    } catch (error) {
      return error;
    }
  },

  async register(userData: RegisterType) {
    const url = "/auth/register";

    try {
      const response: AxiosResponse = await axiosClient.post<AuthResponseType>(
        url,
        userData
      );
      return response.data;
    } catch (error) {
      return error;
    }
  },

  async checkUser() {
    const url = "/auth";

    try {
      const response: AxiosResponse = await axiosClient.get(url);
      return response.data;
    } catch (error) {
      return error;
    }
  },
};
