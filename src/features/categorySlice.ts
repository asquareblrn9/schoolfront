import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { extractErrorMessage } from "../util";
import Category from "../components/Category/Category";




interface CategoryState {
  category: string | string[] | null, 
  isLoading: boolean
}

const initialState: CategoryState = {
  category: null,
  isLoading: false,
};


// Get main link
const url = 'http://localhost:8000';

// add categgory
const addCategory = createAsyncThunk('category/addCategory', async(categgory:string, thunkAPI)=>{
try {
    const response = await axios.post(`${url}/api/schoolAdmin/addCategory`, categgory, {
        withCredentials: true
    });
    return response.data
} catch (error) {
 return thunkAPI.rejectWithValue(extractErrorMessage(error));   
}
})

//get all category
export const getAllCategory = createAsyncThunk(
    'category/getAllCategory',
    async (params: number, thunkAPI) => {
      const { page, pageSize } = Object.assign({ page: 1, pageSize: 50 }, params);
      try {
        const response = await axios.get(`${url}/admin/getAllAdmin?page=${page}&pageSize=${pageSize}`,{
            withCredentials: true
        })
        return response.data
      } catch (error) {
        return thunkAPI.rejectWithValue(extractErrorMessage(error))
      }
    }
  )



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
  name: 'category',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(getAllCategory.pending, (state, action) => {
        state.isLoading = true;
        state.category= null;
      })
    .addCase(getAllCategory.fulfilled, (state, action) => {
        state.category = action.payload;
        state.isLoading = false;
      })
      
  },
});

export default CategorySlice.reducer;

