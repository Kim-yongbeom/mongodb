import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router";
import SignupComponent from "../../components/auth/SignupComponent";

export const baseURL = "http://localhost:3000";

function SignupContainer() {
  const history = useHistory(); //화면이동에 사용

  const [userInfo, setUserInfo] = useState({
    userId: "",
    name: "",
    password: "",
  });

  const onSubmit = async () => {
    const user = {
      userId,
      name,
      password,
    };

    try {
      const response = await axios({
        method: "POST",
        url: `${baseURL}/ssac/signup`,
        data: user,
      });
      console.log(response);
      if (response.status === 200) {
        alert("회원 가입 성공");
        setUserInfo({
          userId: "",
          name: "",
          password: "",
        });
        history.push("/");
      }
    } catch (error) {
      console.log(error.response);
      const errorStatus = error.response.status;

      if (errorStatus === 409) {
        alert("중복된 아이디가 존재합니다");
      } else {
        alert("서버 에러가 발생했습니다");
      }
    }
  };

  const { userId, name, password } = userInfo;

  const onChangeInput = (event) => {
    const { name, value } = event.target;
    console.log(`name:${name}`);
    console.log(`value:${value}`);
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  return (
    <SignupComponent
      userId={userId}
      name={name}
      password={password}
      onChangeInput={onChangeInput}
      onSubmit={onSubmit}
    />
  );
}

export default SignupContainer;
