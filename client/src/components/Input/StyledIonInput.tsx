import styled from "@emotion/styled";
import { IonInput } from "@ionic/react";

export const StyledIonInput = styled(IonInput)`
  margin-top: 8px;
  --padding-start: 8px !important; // specificity problem
  --padding-end: 8px !important;
  border: 1px solid var(--ion-color-primary);
`;
