import {
  IonContent,
  IonList,
  IonPage,
  useIonViewWillEnter,
} from "@ionic/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import ShoppingListDetailsHeader from "../../components/headers/ShoppingListDetailsHeader";
import ShoppingListCheckBox from "../../components/listItem/ShoppingListCheckBox";
import LoaderCentered from "../../components/loading/LoaderCentered";
import BlockSeparator from "../../components/misc/BlockSeparator";
import useUpdateListItemStatus from "../../gql/mutations/useUpdateListItemStatus.graphql";
import useGetListItemsById from "../../gql/query/useGetListItemsById.graphql";
import {
  setListid,
  setShowItemDetails,
} from "../../redux/ShoppingList/ShoppingListDetailsSlice";
import { IAppState } from "../../redux/store";

export default function ShoppingListDetails() {
  const { id } = useParams<{ id: string }>();

  useIonViewWillEnter(() => {
    dispatch(setListid(id));
  }, [id]);

  const { showActive } = useSelector(
    ({ shoppingListDetailSlice }: IAppState) => shoppingListDetailSlice
  );
  const dispatch = useDispatch();

  // data is processed and grouped by categories
  const { data, loading, error } = useGetListItemsById(id);

  const { updateListItemStatus } = useUpdateListItemStatus();

  const handleCheck = async (checked: boolean, itemId: string) => {
    console.log({ checked, itemId });
    // allow checkbox animation to show before update the state
    setTimeout(() => {
      updateListItemStatus({
        variables: { is_completed: checked, pk_columns: { id: itemId } },
        /* had to use opt-res to avoid the recheck of the checkbox */
        optimisticResponse: {
          __typename: "mutation_root",
          update_list_items_by_pk: {
            __typename: "list_items",
            id: itemId,
            is_completed: checked,
          },
        },
      });
    }, 200);
  };

  let content;
  if (loading) {
    content = <LoaderCentered />;
  } else if (error) {
    content = <p>{error.message}</p>;
  } else if (!data) {
    content = <p>No items yet</p>;
  } else {
    content = (
      <IonList lines="full">
        {data.map((group) => {
          if (
            // remove any group that is all checked or unchecked based on !!showActive
            !group.filter(({ is_completed: c }) => !c === showActive).length
          ) {
            return null;
          } else
            return (
              <React.Fragment key={group[0].id + "parent"}>
                <BlockSeparator title={group[0].category || "other"} />
                {group
                  // again filter out checked based on !!showActive
                  .filter(({ is_completed: c }) => !c === showActive)
                  .map(
                    ({ id, name, is_completed, comment, other, quantity }) => {
                      return (
                        <ShoppingListCheckBox
                          key={id}
                          text={name}
                          comment={comment || undefined}
                          quantity={quantity || undefined}
                          isChecked={is_completed}
                          onChange={() => handleCheck(!is_completed, id)}
                          showDetails={() => dispatch(setShowItemDetails(id))}
                          value={id}
                        />
                      );
                    }
                  )}
              </React.Fragment>
            );
        })}
      </IonList>
    );
  }

  return (
    <IonPage>
      <ShoppingListDetailsHeader />
      <IonContent>{content}</IonContent>
    </IonPage>
  );
}
