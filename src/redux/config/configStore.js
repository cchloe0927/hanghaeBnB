import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import login from "../modules/loginSlice";
import postRoom from "../modules/postRoomSlice";

const store = configureStore({
  reducer: { postRoom },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
