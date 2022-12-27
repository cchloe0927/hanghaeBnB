import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../core/instance";

const initialState = {
  rooms: [],
  isLoading: false,
  error: null,
};

export const __getRoomInfo = createAsyncThunk(
  //첫번째 인자 : action value
  "__getRooms",
  //두번째 인자 : 콜백함수
  async (payload, thunkAPI) => {
    const roomId = Number(payload);

    try {
      const data = await instance.get(
        `http://3.39.141.216:8080/api/room/${roomId}`
      );

      return thunkAPI.fulfillWithValue(data.data);
      //fulfillWithValue : 네트워크 요청이 성공한 경우, dispatch함. 인자로 payload를 넘겨줄 수 있음
    } catch (error) {
      return thunkAPI.rejectWithValue(error); //rejectWithValue : 네트워크 요청이 실패한 경우, dispatch함. 인자로 payload를 넘겨줄 수 있음
    }
  }
);

//리듀서
export const roomDetailSlice = createSlice({
  name: "roomsDetail", //모듈이름
  initialState,
  reducers: {},
  extraReducers: {
    // __getRooms : 룸 리스트
    [__getRoomInfo.pending]: (state) => {
      state.isLoading = true;
    },
    [__getRoomInfo.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.roomsDetail = action.payload;
    },
    [__getRoomInfo.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {} = roomDetailSlice.actions;
export default roomDetailSlice.reducer;
