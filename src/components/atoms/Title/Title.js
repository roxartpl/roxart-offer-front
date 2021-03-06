import React from "react";
import styled from "styled-components";

const StyledTitle = styled.h2`
  margin: 0;
  color: ${props => `${props.theme.colors.black}`};
  font-weight: 700;
  font-size: 16px;
  letter-spacing: -0.32px;
  svg {
    margin-right: 7px;
  }
`;

const Title = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>;
};

export default Title;
