import styled from "@emotion/styled";
import { IonIcon } from "@ionic/react";
import { close } from "ionicons/icons";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IAppState } from "../../redux/store";
import { setShowToast } from "../../redux/toastSlice/toastSlice";

export default function Toast() {
  const { showToast } = useSelector(({ toastSlice }: IAppState) => toastSlice);
  const dispatch = useDispatch();

  const handleDismiss = () => dispatch(setShowToast(null));

  useEffect(() => {
    if (showToast) {
      setTimeout(() => {
        handleDismiss();
      }, 2000);
    }
  }, [showToast]);

  return (
    <StyledDiv showToast={!!showToast}>
      <div>{showToast ?? ""}</div>
      <IonIcon icon={close} color="dark" onClick={handleDismiss} />
    </StyledDiv>
  );
}

const StyledDiv = styled.div<{ showToast: boolean }>`
  --toast-width: 96vw;

  visibility: ${(props) => (props.showToast ? "visible" : "hidden")};
  /* min-width: var(--toast-width); Set a default minimum width */
  /* max-width: 500px; prevent it getting too long */

  width: var(--toast-width); /* Set a default minimum width */
  /* Divide value of min-width by 2 */
  margin-left: calc(var(--toast-width) / 2 * -1);

  background-color: lightgreen; /* Black background color */
  border-radius: 2px; /* Rounded borders */
  padding: 16px; /* Padding */
  position: fixed; /* Sit on top of the screen */
  z-index: 1; /* Add a z-index if needed */
  left: 50%; /* Center the snackbar */
  bottom: 72px; /* 30px from the bottom */

  display: flex;
  justify-content: space-between;
  align-items: center;

  & > div {
    color: var(--ion-color-dark);
  }
`;
