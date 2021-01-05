import styled from "@emotion/styled";
import { IonButton, IonItem, IonList, IonTextarea } from "@ionic/react";
import React, { useState } from "react";
import { Control, Controller, useFieldArray } from "react-hook-form";
import AddDirectionListItem, { StyledIndexBox } from "./AddDirectionListItem";

interface IProps {
  control: Control<Record<string, any>>;
}

interface IIngredient {
  quantity: number;
  unit: string;
  description: string;
}

export default function AddDirections({ control }: IProps) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "directions",
  });

  const [directionRawText, setDirectionRawText] = useState<string>("");
  const handleAppendIngredient = () => {
    if (!directionRawText.length) return;
    append({ value: directionRawText }, false);
    setDirectionRawText("");
  };

  return (
    <StyledIngredientList lines="none">
      {fields.map((field, index) => (
        <Controller
          control={control}
          key={field.id}
          name={`directions[${index}].value`}
          defaultValue={field.value}
          render={({ ref, value, onChange }) => (
            <AddDirectionListItem
              remove={remove}
              onChange={onChange}
              inputRef={ref}
              value={value}
              showBackground={index % 2 === 0 ? true : false}
              index={index + 1}
            />
          )}
        />
      ))}
      <StyledIonItem>
        <StyledIndexBox slot="start">{fields.length + 1}</StyledIndexBox>

        <IonTextarea
          value={directionRawText}
          placeholder="Add Step"
          onIonChange={(e) =>
            e.detail.value && setDirectionRawText(e.detail.value)
          }
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              console.log(e.key);
              handleAppendIngredient();
            }
          }}
        />
      </StyledIonItem>
      <IonButton
        fill="outline"
        color="secondary"
        onClick={handleAppendIngredient}
      >
        Add Direction
      </IonButton>
    </StyledIngredientList>
  );
}

const StyledIngredientList = styled(IonList)`
  padding: 8px;
`;

const StyledIonItem = styled(IonItem)`
  margin-left: -8px;

  & ion-textarea {
    margin-top: 0;
    --padding-start: 8px !important; // specificity problem
    --padding-end: 8px !important;
    border: 1px solid var(--ion-color-primary);
  }
`;
