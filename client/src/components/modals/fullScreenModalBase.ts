import styled from "@emotion/styled";
import { IonModal } from "@ionic/react";

export const StyledFullScreenModal = styled(IonModal)`
  --background: none;
  --ion-backdrop-color: black;
  --backdrop-opacity: 0.3;

  & .ion-page {
    margin-top: 16px;
    border-radius: 16px 16px 0px 0px;
    filter: drop-shadow(0px -4px 8px rgba(0, 0, 0, 0.25));
  }
`;
