import styled from "@emotion/styled";
import React from "react";
import LoadingBase from "./loadingBase";

export default function LoaderCentered() {
  return (
    <StyledCenterContainer>
      <LoadingBase />
    </StyledCenterContainer>
  );
}

const StyledCenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100%;
`;
