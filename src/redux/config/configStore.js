import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import login from "../modules/loginSlice";
import rooms from "../modules/roomsSlice";
import roomsDetail from "../modules/roomDetailSlice";

const store = configureStore({
  reducer: { rooms, roomsDetail },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
