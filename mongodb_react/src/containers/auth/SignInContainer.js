import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router";
import SignInComponent from "../../components/auth/SignInComponent";

export const baseURL = "http://localhost:3000";

function SignInContainer({ setIsLoggined }) {
  const history = useHistory(); //화면이동에 사용

  const [userInfo, setUserInfo] = useState({
    userId: "",
    password: "",
  });

  const onSubmit = async () => {
    const user = {
      userId,
      password,
    };

    try {
      const response = await axios({
        method: "POST",
        url: `${baseURL}/ssac/signin`,
        data: user,
      });
      console.log(response);
      if (response.status === 200) {
        const accessToken = response.data.accessToken;
        localStorage.setItem("accessToken", accessToken);
        setIsLoggined(true);
        history.push("/");

        console.log("로그인 성공");
        alert("로그인 성공.");
        setUserInfo({
          userId: "",
          password: "",
        });
      }
    } catch (error) {
      console.log(error.response);
      const errorStatus = error.response.status;

      if (errorStatus === 409) {
        alert("잘못된 아이디를 입력하셧습니다.");
      } else {
        alert("서버 에러가 발생했습니다");
      }
    }
  };

  const { userId, password } = userInfo;

  const onChangeInput = (event) => {
    const { name, value } = event.target;
    console.log(`name : ${name}`);
    console.log(`value : ${value}`);
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  return (
    <SignInComponent
      userId={userId}
      password={password}
      onChangeInput={onChangeInput}
      onSubmit={onSubmit}
    />
  );
}

export default SignInContainer;
