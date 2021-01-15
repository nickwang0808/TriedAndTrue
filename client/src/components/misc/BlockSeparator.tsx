import styled from "@emotion/styled";
import React from "react";

interface IProps {
  title?: string;
  subTitle?: string;
  showTodayTag?: boolean;
}

export default function BlockSeparator({
  subTitle,
  title,
  showTodayTag = false,
}: IProps) {
  return (
    <StyledDiv>
      <StyledTitle>{title}</StyledTitle>
      {subTitle && <div>{subTitle}</div>}
      {showTodayTag && <StyledTodayTag>Today</StyledTodayTag>}
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  height: 3rem;
  width: 100vw;
  background-color: rgba(227, 236, 240, 0.5);
  border-bottom: 1px solid #dcdcdc;
  padding: 0 16px;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 4px;
`;

const StyledTitle = styled.div`
  font-weight: 700;
`;

const StyledTodayTag = styled.div`
  color: var(--ion-color-secondary);
  font-weight: 700;
`;
