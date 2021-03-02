import styled from "@emotion/styled";
import {
  IonButton,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
} from "@ionic/react";
import React from "react";
import { useSelector } from "react-redux";
import trash from "../../../assets/svg/trash.svg";
import ModalHeader from "../../../components/headers/ModalHeader";
import { StyledIonInput } from "../../../components/Input/StyledIonInput";
import LoaderCentered from "../../../components/loading/LoaderCentered";
import BlockSeparator from "../../../components/misc/BlockSeparator";
import { FancyModalWithRoundTop } from "../../../components/modals/FancyModalWithRoundTop";
import useGetSuggestListItems from "../../../gql/query/useGetSuggestListItems.graphql";
import { IAppState } from "../../../redux/store";

export default function CustomIngredientModal() {
  const handleDismiss = () => {};
  const handleItemClick = (id: string) => {};

  const { listId, showAddCustomIngredientModal } = useSelector(
    ({ shoppingListDetailSlice }: IAppState) => shoppingListDetailSlice
  );

  const {
    data,
    error,
    loading,
    setKeyword,
    keyword,
  } = useGetSuggestListItems();

  let list;
  if (loading) {
    list = <LoaderCentered />;
  } else if (error) {
    list = <p>something wrong happened</p>;
  } else if (!data) {
    list = null;
  } else {
    list = (
      <IonList lines="full">
        {data.list_items?.map(({ id, name }) => (
          <IonItem key={id} onClick={() => handleItemClick(id)}>
            <StyledIconFaded slot="end" src={trash} />
            <IonLabel color="primary">{name}</IonLabel>
          </IonItem>
        ))}
      </IonList>
    );
  }

  return (
    <FancyModalWithRoundTop isOpen onDidDismiss={handleDismiss}>
      <ModalHeader title="Add to My Weekly List" handleClose={handleDismiss} />
      <IonContent>
        <IonItem className="ion-margin-bottom">
          <StyledFlex>
            <StyledIonInputNoMargin
              placeholder="Find or Add Item"
              value={keyword}
              debounce={500}
              onIonChange={(e) => setKeyword(e.detail.value!)}
            />
            <IonButton fill="solid" color="secondary">
              Add
            </IonButton>
          </StyledFlex>
        </IonItem>
        <BlockSeparator title="Past Items" />
        {list}
      </IonContent>
    </FancyModalWithRoundTop>
  );
}

const StyledFlex = styled.div`
  margin-top: 8px; // push the label up

  display: flex;
  align-items: center;
  width: 100%;
  gap: 4px;
`;

const StyledIonInputNoMargin = styled(StyledIonInput)`
  margin-top: 0;
`;

const StyledIconFaded = styled(IonIcon)`
  color: #dcdcdc;
`;
