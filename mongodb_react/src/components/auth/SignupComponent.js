import React from "react";
import styled from "styled-components";
import BorderBox from "../common/box/BorderBox";
import RoundedButton from "../common/button/RoundedButton";
import RoundedInput from "../common/input/RoundedInput";
import InputLable from "../common/text/InputLable";
import InputTitle from "../common/text/InputTitle";

const FormWrap = styled.div`
  margin-top: 2rem;
`;

const InputWrap = styled.div`
  margin-top: 3rem;
`;

const StyledRoundedButton = styled(RoundedButton)`
  background: orange;
`;

function SignupComponent({ onChangeInput, userId, name, password, onSubmit }) {
  return (
    <>
      <BorderBox>
        <InputTitle>회원가입</InputTitle>
        <FormWrap>
          <InputWrap>
            <InputLable>유저 아이디</InputLable>
            <RoundedInput
              type="text"
              onChange={onChangeInput}
              name="userId"
              value={userId}
            />
          </InputWrap>
          <InputWrap>
            <InputLable>이름</InputLable>
            <RoundedInput
              type="text"
              onChange={onChangeInput}
              name="name"
              value={name}
            />
          </InputWrap>
          <InputWrap>
            <InputLable>비밀번호</InputLable>
            <RoundedInput
              type="password"
              onChange={onChangeInput}
              name="password"
              value={password}
            />
          </InputWrap>
          <StyledRoundedButton onClick={onSubmit}>회원가입</StyledRoundedButton>
        </FormWrap>
      </BorderBox>
    </>
  );
}

export default SignupComponent;
