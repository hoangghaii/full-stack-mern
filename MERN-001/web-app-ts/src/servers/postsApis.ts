import { AxiosResponse } from "axios";
import { CreatePostType, UpdatePostType } from "features";
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

  async createPost(data: CreatePostType) {
    const url = "/posts";

    try {
      const response: AxiosResponse = await axiosClient.post(url, data);
      return response.data;
    } catch (error) {
      return error;
    }
  },

  async updatePost(data: UpdatePostType) {
    const url = `/posts/${data._id}`;

    try {
      const response: AxiosResponse = await axiosClient.post(url, data);
      return response.data;
    } catch (error) {
      return error;
    }
  },

  async deletePost(_id: string) {
    const url = `/posts/${_id}`;

    try {
      const response: AxiosResponse = await axiosClient.delete(url);
      return response.data;
    } catch (error) {
      return error;
    }
  },
};
