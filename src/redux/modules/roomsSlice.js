import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../core/instance";

//초기값
const initialState = {
  rooms: [],
  isLoading: false,
  error: null,
};

//createAsyncThunk를 통해서 thunk함수 생성
//__getRooms : 숙소 리스트
export const __getRooms = createAsyncThunk(
  //첫번째 인자 : action value
  "__getRooms",
  //두번째 인자 : 콜백함수
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const data = await instance.post(`main`, payload);
      console.log("리듀서 데이터", data.data.data);
      return thunkAPI.fulfillWithValue(data.data.data); //fulfillWithValue : 네트워크 요청이 성공한 경우, dispatch함. 인자로 payload를 넘겨줄 수 있음
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error); //rejectWithValue : 네트워크 요청이 실패한 경우, dispatch함. 인자로 payload를 넘겨줄 수 있음
    }
  }
);

//리듀서
export const roomSlice = createSlice({
  name: "rooms", //모듈이름
  initialState,
  reducers: {},
  extraReducers: {
    // __getRooms : 룸 리스트
    [__getRooms.pending]: (state) => {
      state.isLoading = true;
    },
    [__getRooms.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.rooms = action.payload;
    },
    [__getRooms.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {} = roomSlice.actions;
export default roomSlice.reducer;
