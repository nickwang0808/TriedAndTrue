import styled from "@emotion/styled";
import { IonModal } from "@ionic/react";

// prettier-ignore
export const FancyModalWithRoundTop = styled(IonModal)<{height?: string;}>`
  align-items: ${props => !props.height ? "unset" : "flex-end"};
  & .modal-wrapper {
    margin-top: 16px;
    border-radius: 16px 16px 0px 0px;
    filter: drop-shadow(0px -4px 8px rgba(0, 0, 0, 0.25));
    height: ${(props) => (!props.height ? "calc(100% - 16px)" : props.height)};
  }
`;
