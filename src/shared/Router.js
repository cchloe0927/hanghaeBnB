import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
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
          <Route path="/login" element={<LoginPage />} />
          {/* <Route
            path="/api/users/kakao/callback"
            element={<Oauth2RedirectHandeler />}
          /> */}
          <Route path="/register" element={<RegisterPage />} />
        </Route>
        <Route element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/post" element={<PostRoomPage />} />
          <Route path="/reservation/:paramsId" element={<ReservationPage />} />
          <Route path="/mypage" element={<MyPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
