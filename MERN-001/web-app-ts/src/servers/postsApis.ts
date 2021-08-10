import { AxiosResponse } from "axios";
import axiosClient from "./axiosClient";

export const postsApis = {
  async getAll() {
    const url = "/posts";

    try {
      const response: AxiosResponse = await axiosClient.get(url);
      return response.data;
    } catch (error) {
      return error;
    }
  },
};
