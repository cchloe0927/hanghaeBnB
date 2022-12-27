import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import login from "../modules/loginSlice";
import rooms from "../modules/roomsSlice";
import roomsDetail from "../modules/roomDetailSlice";
import postComment from "../modules/commentSlice";

const store = configureStore({
  reducer: { rooms, roomsDetail, postComment },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
