import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Layout from "./layout/Layout";
import MainPage from "../pages/MainPage";
import PostRoomPage from "../pages/PostRoomPage";
import ReservationPage from "../pages/ReservationPage";
import MyPage from "../pages/MyPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/login" element={<Login />} />
          {/* <Route
            path="/api/users/kakao/callback"
            element={<Oauth2RedirectHandeler />}
          /> */}
          <Route path="/register" element={<Register />} />
        </Route>
        <Route element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/post" element={<PostRoomPage />} />
          <Route path="/reservation/:id" element={<ReservationPage />} />
          <Route path="/mypage" element={<MyPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
