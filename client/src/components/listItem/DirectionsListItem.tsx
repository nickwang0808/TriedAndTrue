import styled from "@emotion/styled";
import { IonIcon, IonItem } from "@ionic/react";
import React from "react";
import trash from "../../assets/svg/trash.svg";

interface IProps {
  content: string;
  showBackground?: boolean;
  showDelete?: boolean;
  index: number;
}

export default function DirectionsListItem({
  content,
  showBackground = false,
  showDelete = true,
  index,
}: IProps) {
  return (
    <StyledWrapper showBackground={showBackground}>
      <StyledIndexBox slot="start">{index}</StyledIndexBox>
      <div>{content}</div>

      {showDelete && <IonIcon size="small" slot="end" src={trash} />}
    </StyledWrapper>
  );
}

const StyledWrapper = styled(IonItem)<{ showBackground: boolean }>`
  --background: ${(props) =>
    props.showBackground ? "rgba(227, 236, 240, 0.25)" : "none"};
  --padding-start: 8px;
  --padding-top: 8px;
  --padding-bottom: 8px;

  align-items: unset;

  & ion-icon {
    margin: 0;
  }
`;

const StyledIndexBox = styled.div`
  height: 24px;
  width: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-right: 8px; */

  border: 1px solid black;
  font-weight: 700;

  margin-inline: 0px 8px;
`;
