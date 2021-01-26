import { IonContent, IonList, IonPage } from "@ionic/react";
import React from "react";
import { useHistory } from "react-router";
import ShoppingListMainHeader from "../../components/headers/ShoppingListMainHeader";
import ItemWithRightArrow from "../../components/listItem/ListItemWithRightArrow";

export default function ShoppingListHome() {
  const history = useHistory();
  return (
    <IonPage>
      <ShoppingListMainHeader />
      <IonContent>
        <IonList lines="full">
          <ItemWithRightArrow
            content="My weekly list"
            onClick={() => history.push("/lists/test")}
          />
          <ItemWithRightArrow content="My weekly list" onClick={() => {}} />
        </IonList>
      </IonContent>
    </IonPage>
  );
}
