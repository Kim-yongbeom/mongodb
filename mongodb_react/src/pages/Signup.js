//rfce 하면 import export 간단히 생성
import React from "react";
import FullCenterContainer from "../components/common/container/FullCenterContainer";
import SignupContainer from "../containers/auth/SignupContainer";

function Signup() {
  return (
    <>
      <FullCenterContainer>
        <SignupContainer />
      </FullCenterContainer>
    </>
  );
}

export default Signup;
