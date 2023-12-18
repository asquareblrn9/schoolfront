import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { extractErrorMessage } from "../util";

interface CategoryState {
  categories: {
    data: {
      rows: Array<{
        id: number;
        category: string;
      }>;
    };
    totalItems:number,
    totalPages:number
  } | null;
  isLoading: boolean;
}

const initialState: CategoryState = {
  categories: null,
  isLoading: false,
};

// Get main link
const url = "http://localhost:8000";
//const url : string | undefined = process.env.REACT_BACK_END

// add categgory
export const addCategory = createAsyncThunk(
  "category/addCategory",
  async (data: any, thunkAPI) => {
    try {
      const response = await axios.post(
        `${url}/api/schoolAdmin/addCategory`,
        data,
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(extractErrorMessage(error));
    }
  }
);

//get all category
export const getAllCategory = createAsyncThunk(
  "category/getAllCategory",
  async (params, thunkAPI) => {
    const { page, pageSize } = Object.assign({ page: 1, pageSize: 50 }, params);
    try {
      const response = await axios.get(
        `${url}/api/schoolAdmin/getAllCategory?page=${page}&pageSize=${pageSize}`,
        {
          withCredentials: true,
        }
      );
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

export const CategorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllCategory.pending, (state, action) => {
        state.isLoading = true;
        state.categories = null;
      })
      .addCase(getAllCategory.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.isLoading = false;
      });
  },
});

export default CategorySlice.reducer;
