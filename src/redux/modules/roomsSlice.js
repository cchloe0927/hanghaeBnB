import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../core/instance";

//초기값
const initialState = {
  rooms: [],
  isLoading: false,
  error: null,
};

//createAsyncThunk를 통해서 thunk함수 생성
//__postRoom : 숙소 등록
export const __postRoom = createAsyncThunk(
  //첫번째 인자 : action value
  "__postRoom",
  //두번째 인자 : 콜백함수
  async (payload, thunkAPI) => {
    try {
      const data = await instance.post(`/room`, payload);
      //console.log("__postRoom", data);
      return thunkAPI.fulfillWithValue(data.data); //fulfillWithValue : 네트워크 요청이 성공한 경우, dispatch함. 인자로 payload를 넘겨줄 수 있음
    } catch (error) {
      return thunkAPI.rejectWithValue(error); //rejectWithValue : 네트워크 요청이 실패한 경우, dispatch함. 인자로 payload를 넘겨줄 수 있음
    }
  }
);
//__getRooms : 숙소 리스트
export const __getRooms = createAsyncThunk(
  //첫번째 인자 : action value
  "__getRooms",
  //두번째 인자 : 콜백함수
  async (payload, thunkAPI) => {
    try {
      const data = await instance.get(`/main`);
      return thunkAPI.fulfillWithValue(data.data); //fulfillWithValue : 네트워크 요청이 성공한 경우, dispatch함. 인자로 payload를 넘겨줄 수 있음
    } catch (error) {
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
    // __postRoom : 룸 등록하기
    [__postRoom.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__postRoom.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.rooms = {}; // Store에 있는 contents에 서버에서 가져온 contents를 넣습니다.
    },
    [__postRoom.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
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