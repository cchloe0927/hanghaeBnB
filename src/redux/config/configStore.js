import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import login from "../modules/loginSlice";
import rooms from "../modules/roomsSlice";

const store = configureStore({
  reducer: { rooms },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
