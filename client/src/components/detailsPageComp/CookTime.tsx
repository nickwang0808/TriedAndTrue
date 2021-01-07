import styled from "@emotion/styled";
import React from "react";

interface IProps {
  total_time: number | null;
  servings: string | null;
}

export default function CookTime({ total_time, servings }: IProps) {
  return (
    <StyledWrapper>
      {/* <StyledCol>
        <div>45m</div>
        <div>Prep Time</div>
      </StyledCol> */}
      {total_time && (
        <StyledCol>
          <div>{total_time}</div>
          <div>Total Time</div>
        </StyledCol>
      )}
      {servings && (
        <StyledCol>
          <div>{servings}</div>
          <div>Servings</div>
        </StyledCol>
      )}
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  padding-left: 16px;
`;

const StyledCol = styled.div`
  border-left: 1px solid #dcdcdc;
  display: flex;
  flex-direction: column;
  padding: 0 12px;
`;
