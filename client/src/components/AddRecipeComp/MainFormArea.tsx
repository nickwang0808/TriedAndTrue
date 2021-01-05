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
      <IonItem>
        <IonLabel position="stacked">Title</IonLabel>
        <Controller
          control={control}
          name="title"
          rules={{ required: true }}
          defaultValue=""
          render={({ onChange, ref }) => (
            <IonInput
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
          name="type"
          rules={{ required: true }}
          defaultValue="unset"
          render={({ onChange, value, ref }) => (
            <IonSelect
              value={value}
              placeholder="Select One"
              onIonChange={(e) => onChange(e.detail.value)}
              ref={ref}
              defaultValue="lunch"
            >
              <IonSelectOption value="breakfast">breakfast</IonSelectOption>
              <IonSelectOption value="lunch">lunch</IonSelectOption>
              <IonSelectOption value="dinner">dinner</IonSelectOption>
              <IonSelectOption value="snack">snack</IonSelectOption>
              <IonSelectOption value="desert">desert</IonSelectOption>
            </IonSelect>
          )}
        />
      </IonItem>

      <IonItem>
        <IonLabel position="stacked">Total Time</IonLabel>
        <Controller
          name="time"
          control={control}
          defaultValue={0}
          render={({ onChange, ref }) => (
            <IonInput
              type="number"
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
          name="serving"
          control={control}
          defaultValue={0}
          render={({ onChange, ref }) => (
            <IonInput
              type="number"
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
          name="serving"
          control={control}
          defaultValue={0}
          render={({ onChange, ref }) => (
            <IonInput
              type="text"
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
  & ion-select {
    margin-top: 8px;
    --padding-start: 8px;
    --padding-end: 8px;
    border: 1px solid var(--ion-color-primary);
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
