import { IonToast } from "@ionic/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IAppState } from "../../redux/store";
import { setShowToast } from "../../redux/toastSlice/toastSlice";

export default function Toast() {
  const { showToast } = useSelector(({ toastSlice }: IAppState) => toastSlice);
  const dispatch = useDispatch();

  const handleDismiss = () => dispatch(setShowToast(null));

  return (
    <IonToast
      isOpen={!!showToast}
      onDidDismiss={handleDismiss}
      message={showToast || ""}
      position="bottom"
      // buttons={[
      //   {
      //     side: "start",
      //     icon: "star",
      //     text: "Favorite",
      //     handler: () => {
      //       console.log("Favorite clicked");
      //     },
      //   },
      //   {
      //     text: "Done",
      //     role: "cancel",
      //     handler: () => {
      //       console.log("Cancel clicked");
      //     },
      //   },
      // ]}
    />
  );
}
