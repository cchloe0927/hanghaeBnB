import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import MainPage from "../pages/MainPage";
import PostRoomPage from "../pages/PostRoomPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/post" element={<PostRoomPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
