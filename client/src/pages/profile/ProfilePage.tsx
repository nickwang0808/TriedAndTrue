import {
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import { useDispatch } from "react-redux";
import ItemWithRightArrow from "../../components/listItem/ListItemWithRightArrow";
import SmallBlockSeparator from "../../components/misc/SmallBlockSeperator";
import { auth } from "../../config/firebaseConfig";
import {
  setShowAboutModal,
  setShowDeleteAccountModal,
} from "../../redux/profileSlice/profileSlice";

export default function ProfilePage() {
  const dispatch = useDispatch();
  const handleSignOut = () =>
    auth.signOut().then(() => window.location.reload());
  const handleDelete = () => dispatch(setShowDeleteAccountModal(true));

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle color="primary">My Profile</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonList lines="full">
          <ItemWithRightArrow
            content="About Tried & True"
            onClick={() => dispatch(setShowAboutModal(true))}
          />

          <SmallBlockSeparator />

          <IonItem onClick={handleSignOut}>
            <IonLabel color="primary">{`Sign Out (nfwadwaw@gmail.com)`}</IonLabel>
          </IonItem>
          <IonItem onClick={handleDelete}>
            <IonLabel color="primary">Erase Account</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
}
