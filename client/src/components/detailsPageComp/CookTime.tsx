import styled from "@emotion/styled";
import React from "react";

export default function CookTime() {
  return (
    <StyledWrapper>
      <StyledCol>
        <div>45m</div>
        <div>Prep Time</div>
      </StyledCol>
      <StyledCol>
        <div>1h 24min</div>
        <div>Prep Time</div>
      </StyledCol>
      <StyledCol>
        <div>6</div>
        <div>Servings</div>
      </StyledCol>
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
