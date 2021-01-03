import React from "react";
import styled from "styled-components";

interface IProps {
  title?: string;
  subTitle?: string;
}

export default function BlockSeparator({ subTitle, title }: IProps) {
  return (
    <StyledDiv>
      <StyledTitle>{title}</StyledTitle>
      {subTitle && <div>{subTitle}</div>}
    </StyledDiv>
  );
}

const StyledDiv = styled.div.attrs({
  className: "ion-padding-horizontal",
})`
  height: 3rem;
  width: 100vw;
  background-color: rgba(227, 236, 240, 0.5);

  display: flex;
  align-items: center;
`;

const StyledTitle = styled.div`
  font-weight: 700;
  margin-right: 4px; /* separator between 2 titles */
`;
