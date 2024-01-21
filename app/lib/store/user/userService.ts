// eslint-disable-next-line import/no-extraneous-dependencies
import axios, { AxiosResponse } from "axios";
// import React from "react";
import { UserData } from "@/types";
// import Alert from "@/shared/Alert.tsx/Alert";
const API_URL: string = process.env.NEXT_PUBLIC_API_URL|| "";

const register = async (userData: UserData): Promise<any | null> => {
  try {
    const response: AxiosResponse<any> = await axios.post(
      `${API_URL}/signup`,
      userData
    );

    if (response.data) {
      localStorage.setItem("user", JSON.stringify(response.data));
      window.location.href = "/dashboard";
    }
    return response.data;
  } catch (error) {
    // console.error("Error registering user:", error);

    return null;
  }
};

const login = async (userData: UserData): Promise<any | null> => {
  try {
    const response: AxiosResponse<any> = await axios.post(`${API_URL}/login`, userData);

    if (response.data) {
      localStorage.setItem("user", JSON.stringify(response.data.data.user));
      localStorage.setItem("token", response.data.data.token.access_token);
    }
    return response.data;
  } catch (error) {
    // console.error("Error logging in:", error);
    return null;
  }
};

const Logout = (): void => {
  localStorage.removeItem("user");
};

const userService = { register, login, Logout };

export default userService;
