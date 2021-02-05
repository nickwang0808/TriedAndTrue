import styled from "@emotion/styled";
import {
  IonBackButton,
  IonButtons,
  IonHeader,
  IonIcon,
  IonLabel,
  IonSegment,
  IonSegmentButton,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import addNew from "../../assets/svg/addnew.svg";
import ellipsis from "../../assets/svg/ellipsis.svg";
import useGetShoppingListName from "../../gql/query/useGetShopingListName.graphql";
import {
  setShowActive,
  setShowConfigShoppingListModal,
} from "../../redux/ShoppingList/ShoppingListDetailsSlice";
import { IAppState } from "../../redux/store";

type segmentValue = "active" | "completed" | undefined;

export default function ShoppingListDetailsHeader() {
  const dispatch = useDispatch();
  const handleSwitch = (value: segmentValue) => {
    if (!value) return;
    if (value === "active") {
      dispatch(setShowActive(true));
    } else {
      dispatch(setShowActive(false));
    }
  };

  const { id } = useParams<{ id: string }>();
  const handleOpenConfig = () => dispatch(setShowConfigShoppingListModal(true));

  const { showActive } = useSelector(
    ({ shoppingListDetailSlice }: IAppState) => shoppingListDetailSlice
  );

  const title = useGetShoppingListName(id);

  return (
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton color="secondary" />
        </IonButtons>
        <IonTitle color="primary">{title}</IonTitle>
        <IonButtons slot="end">
          <StylizedTitleButtonText>Add Item</StylizedTitleButtonText>
          <IonIcon size="small" src={addNew}/>
        </IonButtons>
        <IonButtons slot="end">
          <IonIcon size="small" src={ellipsis} onClick={handleOpenConfig} />
        </IonButtons>
      </IonToolbar>

      <IonToolbar>
        <IonSegment
          value={showActive ? "active" : "completed"}
          onIonChange={({ detail }) =>
            handleSwitch(detail.value as segmentValue)
          }
          color="secondary"
        >
          <IonSegmentButton value="active">
            <IonLabel>Active</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="completed">
            <IonLabel>Completed</IonLabel>
          </IonSegmentButton>
        </IonSegment>
      </IonToolbar>
    </IonHeader>
  );
}

const StylizedTitleButtonText = styled.div`
  color: var(--ion-color-secondary);
  font-family: SuraBold;
  font-size: 16px;
`;