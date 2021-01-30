import { IonContent, IonList, IonPage } from "@ionic/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import ShoppingListDetailsHeader from "../../components/headers/ShoppingListDetailsHeader";
import BlockSeparator from "../../components/misc/BlockSeparator";
import useGetListItemsById from "../../gql/query/useGetListItemsById.graphql";
import { IAppState } from "../../redux/store";

export default function ShoppingListDetails() {
  const { id } = useParams<{ id: string }>();

  const { showActive } = useSelector(
    ({ shoppingListDetailSlice }: IAppState) => shoppingListDetailSlice
  );
  const dispatch = useDispatch();

  const { data, loading, error } = useGetListItemsById(id);

  console.log(id);

  let content;
  if (loading) {
    content = <p>laoding ...</p>;
  } else if (error) {
    content = <p>{error.message}</p>;
  } else {
    // const { list_items } = data;
    content = (
      <IonList lines="full">
        {/* {list.map(({ id, name }) => (
          <ItemWithRightArrow
            key={id}
            content={name}
            onClick={() => history.push(`/lists/${id}`)}
          />
        ))} */}
      </IonList>
    );
  }

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
