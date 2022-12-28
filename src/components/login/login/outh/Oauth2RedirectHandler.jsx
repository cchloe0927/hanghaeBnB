import { useNavigate } from "react-router-dom";
import { instance } from "../../../../core/instance";
import { kakao } from "../../../../core/AxiosAPI";

const Oauth2RedirectHandler = () => {
  const navigate = useNavigate();
  let code = new URL(window.location.href).searchParams.get("code"); //searchParams 파라미터 값 확인
  console.log("인가 코드 :", code);

  const kakao = async () => {
    await instance
      .post(`users/login/kakao?code=${code}`) //쿼리파라미터로 헤더에 데이터 넣어서 보냄!
      .then((res) => {
        console.log("res", res);
        console.log("authorization", res.headers.authorization);
        localStorage.setItem("id", res.headers.authorization);
        localStorage.setItem("email", res.data.data.email);
        localStorage.setItem("nickname", res.data.data.nickname);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  kakao();

  //   kakao(code).then((res) => {
  //     console.log("res :", res);
  //     navigate("/");
  //   });

  //   return <div>Oauth2RedirectHandler</div>;
};

export default Oauth2RedirectHandler;
