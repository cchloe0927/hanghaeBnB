import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Login from "../pages/Login";
import MainPage from "../pages/MainPage";
import PostRoomPage from "../pages/PostRoomPage";

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
          {/* <Route path="/register" element={<Register />} /> */}
        </Route>
        <Route element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/post" element={<PostRoomPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
