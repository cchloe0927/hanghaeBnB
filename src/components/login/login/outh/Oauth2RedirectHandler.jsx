import React from "react";
import { kakao } from "../../../../core/AxiosAPI";

const Oauth2RedirectHandler = () => {
  let code = new URL(window.location.href).searchParams.get("code"); //searchParams 파라미터 값 확인
  console.log("인가 코드 :", code);

  kakao(code)
    .then((res) => {
      console.log("res :", res);
    })
    .catch((error) => {
      console.log(error);
    });
  kakao();

  return <div>Oauth2RedirectHandler</div>;
};

export default Oauth2RedirectHandler;
