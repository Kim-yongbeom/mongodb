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

function SignInComponent({ userId, password, onChangeInput, onSubmit }) {
  return (
    <>
      <BorderBox>
        <InputTitle>로그인</InputTitle>
        <FormWrap>
          <InputWrap>
            <InputLable>유저 아이디</InputLable>
            <RoundedInput
              type="text"
              name="userId"
              value={userId}
              onChange={onChangeInput}
            />
          </InputWrap>
          <InputWrap>
            <InputLable>비밀번호</InputLable>
            <RoundedInput
              type="password"
              name="password"
              value={password}
              onChange={onChangeInput}
            />
          </InputWrap>
          <RoundedButton onClick={onSubmit}>로그인</RoundedButton>
        </FormWrap>
      </BorderBox>
    </>
  );
}

export default SignInComponent;
