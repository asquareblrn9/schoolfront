import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { extractErrorMessage } from "../util";
import { jwtDecode }from 'jwt-decode';


interface AuthState {
  user: string | string[] | null;
  isLoading: boolean;
  isLoggedIn: boolean;
  error?: string | null;
}

const initialState: AuthState = {
  user: null,
  isLoading: false,
  isLoggedIn: false,
};


// Get main link
const url = 'http://localhost:8000';

// Login

export const login = createAsyncThunk(
  'auth/login',
  async (data: any, thunkAPI) => {
    try {
      const response: AxiosResponse = await axios.post(`${url}/api/users/login`, data, {
        withCredentials: true,
      });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(extractErrorMessage(error));
    }
  }
);

// export const login = createAsyncThunk(
//   'auth/login',
//   async (data: any, thunkAPI) => {
//     try {
//       const response = await axios.post(`${url}/api/users/login`, data);
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(extractErrorMessage(error));
//     }
//   }
// );

export const addUser = createAsyncThunk(
  'auth/signup',
  async (data, thunkAPI) => {
    try {
      const response = await axios.post(`${url}/auth/signUp`, data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(extractErrorMessage(error));
    }
  }
);

// Logout user
export const logout = createAsyncThunk('auth/logout', async () => {
  await localStorage.removeItem('userDetails');
});

export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(login.pending, (state, action) => {
        state.isLoggedIn = false;
        state.user = null;
        state.error = action.payload;
      })
      .addCase(login.rejected, (state) => {
        state.isLoggedIn = false;
        state.user = null;
        state.error = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.isLoggedIn = false;
        state.user = null;
      });
  },
});

export default AuthSlice.reducer;

