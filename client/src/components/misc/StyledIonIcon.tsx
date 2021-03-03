import styled from "@emotion/styled";
import { IonIcon } from "@ionic/react";
import React from "react";

interface IProps {
  icon: string;
  fontSize: number;
  color: string;
}

export default function StyledIonIcon({ icon, fontSize = 16, color }: IProps) {
  return <StyledIcon icon={icon} fontSize={fontSize} color={color} />;
}

const StyledIcon = styled(IonIcon)<{ fontSize: number }>`
    font-size: ${({ fontSize }) => `${fontSize}px`};
`;
