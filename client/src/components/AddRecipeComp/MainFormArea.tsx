import styled from "@emotion/styled";
import {
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";
import React from "react";
import { Control, Controller } from "react-hook-form";

interface IProps {
  control: Control<Record<string, any>>;
}

export default function MainFormArea({ control }: IProps) {
  return (
    <StyledList lines="none">
      <IonItem style={{ width: "100%" }}>
        <IonLabel position="stacked">Title</IonLabel>
        <Controller
          control={control}
          name="title"
          rules={{ required: true }}
          // defaultValue={null}
          render={({ onChange, ref, value }) => (
            <IonInput
              color="primary"
              type="text"
              value={value}
              placeholder="Recipe Title"
              onIonChange={(e) => onChange(e.detail.value)}
              ref={ref}
            />
          )}
        />
      </IonItem>

      <IonItem>
        <IonLabel position="stacked">Meal Type</IonLabel>
        <Controller
          control={control}
          name="meal_type"
          // defaultValue={null}
          rules={{ required: true }}
          render={({ onChange, value, ref }) => (
            <IonSelect
              color="primary"
              value={value}
              placeholder="Select One"
              onIonChange={(e) => onChange(e.detail.value)}
              ref={ref}
              // defaultValue="lunch"
            >
              <IonSelectOption color="primary" value="breakfast">
                breakfast
              </IonSelectOption>
              <IonSelectOption color="primary" value="lunch">
                lunch
              </IonSelectOption>
              <IonSelectOption color="primary" value="dinner">
                dinner
              </IonSelectOption>
              <IonSelectOption color="primary" value="snack">
                snack
              </IonSelectOption>
              <IonSelectOption color="primary" value="desert">
                desert
              </IonSelectOption>
            </IonSelect>
          )}
        />
      </IonItem>

      <IonItem>
        <IonLabel position="stacked">Total Time</IonLabel>
        <Controller
          name="total_time"
          control={control}
          // defaultValue={null}
          render={({ onChange, ref, value }) => (
            <IonInput
              color="primary"
              type="number"
              value={value}
              placeholder="minutes"
              ref={ref}
              onIonChange={(e) => onChange(e.detail.value)}
            />
          )}
        />
      </IonItem>

      <IonItem>
        <IonLabel position="stacked">Servings</IonLabel>

        <Controller
          name="yields"
          control={control}
          // defaultValue={null}
          render={({ onChange, ref, value }) => (
            <IonInput
              color="primary"
              type="text"
              value={value}
              placeholder="servings"
              ref={ref}
              onIonChange={(e) => onChange(e.detail.value)}
            />
          )}
        />
      </IonItem>

      <IonItem>
        <IonLabel position="stacked">Cuisine</IonLabel>

        <Controller
          name="cuisine"
          control={control}
          // defaultValue={null}
          render={({ onChange, ref, value }) => (
            <IonInput
              color="primary"
              type="text"
              value={value}
              placeholder="Select Cuisine"
              ref={ref}
              onIonChange={(e) => onChange(e.detail.value)}
            />
          )}
        />
      </IonItem>
    </StyledList>
  );
}

const StyledList = styled(IonList)`
  & ion-item {
    width: calc(50% + 16px); // using inline style to over ride this on title
  }
  & ion-select {
    margin-top: 8px;
    --padding-start: 8px;
    --padding-end: 8px;
    border: 1px solid var(--ion-color-primary);
  }

  & ion-select::part(text) {
    // color of the selected text color
    color: var(--ion-color-primary);
  }

  & ion-input {
    margin-top: 8px;
    --padding-start: 8px !important; // specificity problem
    --padding-end: 8px !important;
    border: 1px solid var(--ion-color-primary);
  }

  & .has-focus {
    border: 1px solid var(--ion-color-secondary);
  }
`;
