import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { extractErrorMessage } from "../util";

interface ClassState {
  classess: {
    data: {
      rows: Array<{
        id: number;
        className: string;
        category: string;
        tids: {
            firstName: string;
            lastName: string;
        } | null
      }>;
    };
    totalItems:number,
    totalPages:number
  } | null;
  isLoading: boolean;
  allCategory: [] | null;
  allTeachers: [] | null;
  singleClass: {
    className: string;
    classPrefix:string;
    category:string;
    teacherId:number;
    id:string
  } | null;
}

const initialState: ClassState = {
  classess: null,
  allTeachers:null,
  allCategory:null,
  singleClass:null,
  isLoading: false,
};

// Get main link
const url = "http://localhost:8000";
//const url : string | undefined = process.env.REACT_BACK_END

export const getAllCategory = createAsyncThunk(
    "class/allCategory",
    async(_, thunkAPI)=>{
        try {
            const response = await axios.get(`${url}/api/schoolAdmin/allCategory`,{
                withCredentials:true
            })
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(extractErrorMessage(error));
        }
    }
)



export const getAllTeachers= createAsyncThunk(
    "class/allTeachers",
    async(_, thunkAPI)=>{
        try {
            const response = await axios.get(`${url}/api/schoolAdmin/allTeachers`,{
                withCredentials:true
            })
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(extractErrorMessage(error));
        }
    }
)

// add categgory
export const addClass = createAsyncThunk(
  "class/addClass",
  async (data: any, thunkAPI) => {
    try {
      const response = await axios.post(
        `${url}/api/schoolAdmin/addClass`,
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

// remove categgory
export const deleteClass = createAsyncThunk(
  "class/deleteClass",
  async (id:number, thunkAPI) => {
    try {
      const response = await axios.delete(
        `${url}/api/schoolAdmin/deleteClass/${id}`,
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

//get single class
export const getSingleClass = createAsyncThunk(
    "class/getSingleClass",
    async (id:number, thunkAPI) => {
      try {
        const response = await axios.get(
          `${url}/api/schoolAdmin/getSingleClass/${id}`,
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


//get all Class
export const getAllClass = createAsyncThunk(
  "class/getAllClass",
  async (params, thunkAPI) => {
    const { page, pageSize } = Object.assign({ page: 1, pageSize: 50 }, params);
    try {
      const response = await axios.get(
        `${url}/api/schoolAdmin/getAllClass?page=${page}&pageSize=${pageSize}`,
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

export const updateClass = createAsyncThunk(
  "class/updateClass",
  async (data: any, thunkAPI) => {
    try {
      const response = await axios.patch(
        `${url}/api/schoolAdmin/updateClass/${data.id}`,
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

export const ClassSlice = createSlice({
  name: "class",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllClass.pending, (state, action) => {
        state.isLoading = true;
        state.classess = null;
      })
      .addCase(getAllClass.fulfilled, (state, action) => {
        state.classess = action.payload;
        state.isLoading = false;
      })
      .addCase(getAllCategory.fulfilled, (state, action)=>{
        state.allCategory = action.payload
      })
      .addCase(getAllTeachers.fulfilled, (state, action)=>{
        state.allTeachers = action.payload
      })
      .addCase(getSingleClass.fulfilled, (state, action)=>{
        state.singleClass = action.payload
      })
  },
});

export default ClassSlice.reducer;
