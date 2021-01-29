import { IonContent, IonPage } from "@ionic/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ShoppingListDetailsHeader from "../../components/headers/ShoppingListDetailsHeader";
import BlockSeparator from "../../components/misc/BlockSeparator";
import { IAppState } from "../../redux/store";

export default function ShoppingListDetails() {
  const { showActive } = useSelector(
    ({ shoppingListDetailSlice }: IAppState) => shoppingListDetailSlice
  );
  const dispatch = useDispatch();

  return (
    <IonPage>
      <ShoppingListDetailsHeader title="My Weekly list" />
      <IonContent>
        {/* make array of catagories and corresponding shopping items
        then map out the inner array of items*/}

        <BlockSeparator title="Produce" />
        {/* <ShoppingListCheckBox text="Beans" quantity="2dwaad"  /> */}
      </IonContent>
    </IonPage>
  );
}
