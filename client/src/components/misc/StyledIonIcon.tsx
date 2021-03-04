import styled from "@emotion/styled";
import { IonIcon } from "@ionic/react";
import React from "react";

interface IProps {
  icon: string;
  fontSize?: number;
  color?: string;
  onClick?: () => void;
}

export default function StyledIonIcon({
  icon,
  fontSize = 24,
  color = "secondary",
  onClick,
}: IProps) {
  return (
    <StyledIcon
      icon={icon}
      fontSize={fontSize}
      color={color}
      onClick={onClick}
    />
  );
}

const StyledIcon = styled(IonIcon)<{ fontSize: number }>`
  font-size: ${({ fontSize }) => `${fontSize}px`};
`;
