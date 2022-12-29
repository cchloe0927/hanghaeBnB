import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../core/instance";

const initialState = {
  comment: [],
  isLoading: false,
  error: null,
};

export const __postComment = createAsyncThunk(
  //첫번째 인자 : action value
  "comment/post",
  //두번째 인자 : 콜백함수
  async (payload, thunkAPI) => {
    //console.log(payload);
    // const roomId = payload.paramsId;
    // try {
    //   const data = await instance.post(
    //     `http://3.39.141.216:8080/api/room/2/comment`,
    //     payload
    //   );
    //   return thunkAPI.fulfillWithValue(data.data);
    //   //fulfillWithValue : 네트워크 요청이 성공한 경우, dispatch함. 인자로 payload를 넘겨줄 수 있음
    // } catch (error) {
    //   return thunkAPI.rejectWithValue(error);
    //   //rejectWithValue : 네트워크 요청이 실패한 경우, dispatch함. 인자로 payload를 넘겨줄 수 있음
    // }
  }
);

//리듀서
export const commentSlice = createSlice({
  name: "postComment", //모듈이름
  initialState,
  reducers: {},
  extraReducers: {
    // __getRooms : 룸 리스트
    [__postComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__postComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.roomsDetail = action.payload;
    },
    [__postComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {} = commentSlice.actions;
export default commentSlice.reducer;
