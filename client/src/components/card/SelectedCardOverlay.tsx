import styled from "@emotion/styled";
import React from "react";
import selectedCheck from "../../assets/svg/selectedCheck.svg";
import StyledIonIcon from "../misc/StyledIonIcon";

export default function SelectedCardOverlay() {
  return (
    <StyledImgOverlay>
      <StyledIconContainer>
        <StyledIonIcon icon={selectedCheck} />
      </StyledIconContainer>
    </StyledImgOverlay>
  );
}

const StyledImgOverlay = styled.div`
  background: rgba(255, 255, 255, 0.7);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledIconContainer = styled.div`
  background: rgba(255, 255, 255, 0.7);
  width: 78px;
  height: 65px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
