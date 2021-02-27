import styled from "@emotion/styled";
import { IonIcon, IonInput, IonItem } from "@ionic/react";
import React from "react";
import trash from "../../../assets/svg/trash.svg";

interface IProps {
  showBackground?: boolean;
  onChange: (...event: any[]) => void;
  inputRef: React.MutableRefObject<any>;
  value: any;
  remove: () => void;
}

export default function AddIngredientListItem({
  showBackground = false,
  onChange,
  value,
  inputRef,
  remove,
}: IProps) {
  return (
    <StyledWrapper showBackground={showBackground}>
      <IonInput
        value={value}
        onIonChange={(e) => onChange(e.detail.value)}
        ref={inputRef}
      />
      <IonIcon onClick={remove} icon={trash} size="small" slot="end" />
    </StyledWrapper>
  );
}

const StyledWrapper = styled(IonItem)<{ showBackground: boolean }>`
  --background: ${(props) =>
    props.showBackground ? "rgba(227, 236, 240, 0.25)" : "none"};
  --padding-start: 8px;
`;
