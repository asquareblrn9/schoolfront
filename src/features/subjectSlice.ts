import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { extractErrorMessage } from "../util";

interface SubjectState {
  subjects: {
    data: {
      rows: Array<{
        id: number;
        subjectName: string;
      }>;
    };
    totalItems:number,
    totalPages:number,
    limit:number,
    currentPage:number
  } | null;
  allTeachers: [] | null;
}

interface GetAllSubjectParams {
    page?: number;
    pageSize?: number;
  }

const initialState: SubjectState = {
  subjects: null,
  allTeachers: null,
};

// Get main link
const url = "http://localhost:8000";
//const url : string | undefined = process.env.REACT_BACK_END

// add subject
export const addSubject = createAsyncThunk(
  "category/addSubject",
  async (data: any, thunkAPI) => {
    try {
      const response = await axios.post(
        `${url}/api/schoolAdmin/addSubject`,
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

// remove subject
export const deleteSubject = createAsyncThunk(
  "category/deleteSubject",
  async (id:number, thunkAPI) => {
    try {
      const response = await axios.delete(
        `${url}/api/schoolAdmin/deleteSubject/${id}`,
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


// get all category
export const getAllSubject = createAsyncThunk(
    'category/getAllSubject',
    async (params: GetAllSubjectParams = {}, thunkAPI) => {
      const { page = 1, pageSize = 50 } = params;
  
      try {
        const response = await axios.get(`${url}/api/schoolAdmin/getAllSubject`, {
          params: {
            page,
            pageSize,
          },
          withCredentials: true,
        });
  
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(extractErrorMessage(error));
      }
    }
  );


export const SubjectSlice = createSlice({
  name: "subject",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllSubject.pending, (state, action) => {
        state.subjects = null;
      })
      .addCase(getAllSubject.fulfilled, (state, action) => {
        state.subjects = action.payload;
      });
  },
});

export default SubjectSlice.reducer;
