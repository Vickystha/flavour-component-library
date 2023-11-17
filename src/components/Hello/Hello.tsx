import React, { FC, Fragment } from "react";
import styled from "styled-components";
import { InputProps } from "./Hello.types";


const StyledMessage = styled.div<InputProps>`
  font-size: 14px;
  color: #a9150b8;
  padding-top: 4px;
`;

const StyledText = styled.p<InputProps>`
  font-size: 14px;
`;

const Input: FC<InputProps> = ({
  id,
  message,
  ...props
}) => {
  return (
    <Fragment>
      <StyledMessage>
        <StyledText>{message}</StyledText>
      </StyledMessage>
    </Fragment>
  );
};

export default Input;