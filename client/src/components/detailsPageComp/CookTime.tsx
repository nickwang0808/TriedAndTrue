import styled from "@emotion/styled";
import React from "react";
import convertMinToHr from "../../utils/convertMinToHr";

interface IProps {
  total_time: number | null;
  servings: string | null;
}

export default function CookTime({ total_time, servings }: IProps) {
  return (
    <StyledWrapper>
      {total_time && (
        <StyledCol>
          <StyledTitle>{convertMinToHr(total_time)}</StyledTitle>
          <StyledSubtitle>Total Time</StyledSubtitle>
        </StyledCol>
      )}
      {servings && (
        <StyledCol>
          <StyledTitle>{servings}</StyledTitle>
          <StyledSubtitle>Servings</StyledSubtitle>
        </StyledCol>
      )}
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  padding-left: 16px;
  padding-bottom: 16px;
`;

const StyledTitle = styled.div`
  font-family: SuraRegular;
  font-size: 22px;
`;

const StyledSubtitle = styled.div`
  font-size: 13px;
  opacity: 0.75;
`;

const StyledCol = styled.div`
  border-left: 1px solid #dcdcdc;
  display: flex;
  flex-direction: column;
  padding: 0 12px;
`;
