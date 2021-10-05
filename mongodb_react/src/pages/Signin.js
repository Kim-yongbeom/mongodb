//rfce 하면 import export 간단히 생성
import React from "react";
import FullCenterContainer from "../components/common/container/FullCenterContainer";
import SignInContainer from "../containers/auth/SignInContainer";

function Signin({ setIsLoggined }) {
  return (
    <>
      <FullCenterContainer>
        <SignInContainer setIsLoggined={setIsLoggined} />
      </FullCenterContainer>
    </>
  );
}

export default Signin;
