import { useNavigate } from "react-router-dom";
import { kakao } from "../../../../core/AxiosAPI";

const Oauth2RedirectHandler = () => {
  const navigate = useNavigate();
  let code = new URL(window.location.href).searchParams.get("code"); //searchParams 파라미터 값 확인
  //console.log("인가 코드 :", code);

  kakao(code).then((res) => {
    //console.log("authorization", res.headers.authorization);
    localStorage.setItem("id", res.headers.authorization);
    localStorage.setItem("email", res.data.data.email);
    localStorage.setItem("nickname", res.data.data.nickname);
    localStorage.setItem("role", res.data.data.role);
    navigate("/");
  });

  //   const kakao = async () => {
  //     await instance
  //       .post(`users/login/kakao?code=${code}`)
  //       .then((res) => {
  //         localStorage.setItem("id", res.headers.authorization);
  //         navigate("/");
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   };
  //   kakao();

  //   return <div>Oauth2RedirectHandler</div>;
};

export default Oauth2RedirectHandler;
