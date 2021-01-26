import styled from "@emotion/styled";
import React from "react";
import LoadingBase from "./loadingBase";

export default function SavingImport() {
  return (
    <StyledCenterContainer>
      <p>Saving Recipe, hang tight!</p>
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
