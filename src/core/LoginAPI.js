import { instance } from "./instance";

//duplicate_check : 중복처리
export const duplicate_check = async (post) => {
  try {
    const data = await instance.post(`users/signup/email`, post);
    console.log("중복 체크 data :", data);
    return data;
  } catch (error) {
    //console.log("중복체크 error :", error.response.data.msg);
    alert(error.response.data.msg);
  }
};
//signup : 회원가입
export const sign_up = async (post) => {
  try {
    const data = await instance.post(`users/signup`, post);
    console.log("회원 가입 data :", data);
    return data;
  } catch (error) {
    alert(error.response.data.msg);
  }
};

//singin : 로그인
export const sign_in = async (post) => {
  try {
    const data = await instance.post(
      `http://3.39.141.216:8080/api/users/login`,
      post
    );
    console.log("로그인 data :", data);
    return data;
  } catch (error) {
    alert(error.response.data.msg);
  }
};
