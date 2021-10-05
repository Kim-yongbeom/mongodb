import styled from "styled-components";

const RoundedInput = styled.input`
  width: 100%;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid rgba(0, 0, 0, 0.8);
  font-size: 1.4rem;
  box-sizing: border-box;

  &:focus {
    outline: none;
  }
`;

export default RoundedInput;
