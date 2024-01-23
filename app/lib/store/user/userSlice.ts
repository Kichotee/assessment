/* eslint-disable no-unneeded-ternary */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userService from "./userService";
import { UserData } from "@/types";
import data from "@/app/data.json";

export interface UserState {
  user: UserData | null;
  isLoggedIn: boolean;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string;
  token: string | null | undefined;
}

const initialState: UserState = {
  user: data.users[0] as unknown as UserData,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  token: "",
  isLoggedIn: false,
};

// The actions below are  a represenattion of how i would handle auth processes with a backend service

// Register user
export const register = createAsyncThunk(
  "user/register",
  async (userParams: UserData, thunkAPI) => {
    try {
      return await userService.register(userParams);
    } catch (err: any) {
      const message =
        (err.response && err.response.data && err.response.data.message) ||
        err.message ||
        err.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Login user
export const login = createAsyncThunk(
  "user/login",
  async (userParams: UserData, thunkAPI) => {
    try {
      return await userService.login(userParams);
    } catch (err: any) {
      const message =
        (err.response && err.response.data && err.response.data.message) ||
        err.message ||
        err.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const logout = createAsyncThunk("user/logout", async () => {
  await userService.Logout();
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isLoggedIn = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
      state.user = null;
      state.token = "";
    },
    loginUser: (state, action) => {
      if (state.user) {
        state.user.profile = "User";
        state.isLoggedIn = true;
      }
    },
    togglePermission: (state) => {
      if (state.user) {
        state.user.profile == "Admin"
          ? (state.user = data.users[1] as unknown as UserData)
          : (state.user = data.users[0] as unknown as UserData);
      }
    },
    logoutUser: () => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload?.data.user;

        state.token = action.payload?.data.token.access_token;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isLoggedIn = true;
        state.user = action.payload?.data?.user;
        state.token = action.payload?.data.token.access_token;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.isLoggedIn = false;
      });
  },
});

export default userSlice.reducer;
export const { reset, loginUser, togglePermission } = userSlice.actions;
