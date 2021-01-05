import styled from "@emotion/styled";
import { IonButton, IonInput, IonItem, IonList } from "@ionic/react";
import React, { useState } from "react";
import { Control, Controller, useFieldArray } from "react-hook-form";
import AddIngredientListItem from "./AddIngredientListItem";

interface IProps {
  control: Control<Record<string, any>>;
}

interface IIngredient {
  quantity: number;
  unit: string;
  description: string;
}

export default function AddIngredients({ control }: IProps) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "ingredients",
  });

  const [ingredientRawText, setIngredientRawText] = useState<string>("");
  const handleAppendIngredient = () => {
    if (!ingredientRawText.length) return;
    append({ value: ingredientRawText }, false);
    setIngredientRawText("");
  };

  return (
    <StyledIngredientList lines="none">
      {fields.map((field, index) => (
        <Controller
          control={control}
          key={field.id}
          name={`ingredients[${index}].value`}
          defaultValue={field.value}
          render={({ ref, value, onChange }) => (
            <AddIngredientListItem
              onChange={onChange}
              inputRef={ref}
              value={value}
              remove={remove}
              showBackground={index % 2 === 0 ? true : false}
            />
          )}
        />
      ))}
      <StyledIonItem>
        <IonInput
          value={ingredientRawText}
          placeholder="Enter ingredient"
          onIonChange={(e) =>
            e.detail.value && setIngredientRawText(e.detail.value)
          }
          type="text"
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
        Add Ingredient
      </IonButton>
    </StyledIngredientList>
  );
}

const StyledIngredientList = styled(IonList)`
  padding: 8px;
`;

const StyledIonItem = styled(IonItem)`
  margin-left: -8px;

  & ion-input {
    margin-top: 8px;
    --padding-start: 8px !important; // specificity problem
    --padding-end: 8px !important;
    border: 1px solid var(--ion-color-primary);
  }
`;
