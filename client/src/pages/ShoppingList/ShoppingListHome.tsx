import { IonContent, IonList, IonPage } from "@ionic/react";
import React from "react";
import { useHistory } from "react-router";
import ShoppingListMainHeader from "../../components/headers/ShoppingListMainHeader";
import ItemWithRightArrow from "../../components/listItem/ListItemWithRightArrow";
import LoaderCentered from "../../components/loading/LoaderCentered";
import useGetAllShoppingLists from "../../gql/query/useGetAllShoppingLists.graphql";

export default function ShoppingListHome() {
  const history = useHistory();
  const { data, loading, error } = useGetAllShoppingLists();

  let content;
  if (loading) {
    content = <LoaderCentered />;
  } else if (error) {
    content = <p>{error.message}</p>;
  } else if (!data?.list.length) {
    content = <p>no list yet</p>;
  } else {
    const { list } = data;
    content = (
      <IonList lines="full">
        {list.map(({ id, name }) => (
          <ItemWithRightArrow
            key={id}
            content={name}
            onClick={() => history.push(`/lists/${id}`)}
          />
        ))}
      </IonList>
    );
  }

  return (
    <IonPage>
      <ShoppingListMainHeader />
      <IonContent>{content}</IonContent>
    </IonPage>
  );
}
