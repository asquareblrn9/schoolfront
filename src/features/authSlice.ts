import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { extractErrorMessage } from "../util";

// Get user from local storage
const user: string | null = localStorage.getItem('userDetails');

interface AuthState {
  user: string | null;
  isLoading: boolean;
  isLoggedIn: boolean;
  error?: string | null;
}

const initialState: AuthState = {
  user: user ? user : null,
  isLoading: false,
  isLoggedIn: false,
};

// Get main link
const url: string | undefined = process.env.REACT_APP_BACKEND;

// Login
export const login = createAsyncThunk<string, { /* define your data type here */ }>(
  'auth/login',
  async (data, thunkAPI) => {
    try {
      const response = await axios.post<string>(`${url}/auth/login`, data);
      if (response.data) {
        localStorage.setItem('userDetails', JSON.stringify(response.data));
      }
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(extractErrorMessage(error));
    }
  }
);

export const addUser = createAsyncThunk<string, { /* define your data type here */ }>(
  'auth/signup',
  async (data, thunkAPI) => {
    try {
      const response = await axios.post<string>(`${url}/auth/signUp`, data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(extractErrorMessage(error));
    }
  }
);

// Logout user
export const logout = createAsyncThunk<void>('auth/logout', async () => {
  await localStorage.removeItem('userDetails');
});

export const authSlice = createSlice({
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

export default authSlice.reducer;
