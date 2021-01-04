import styled from "@emotion/styled";
import { IonButton, IonList, IonTextarea } from "@ionic/react";
import React, { useState } from "react";
import { Control, Controller, useFieldArray } from "react-hook-form";
import AddDirectionListItem from "./AddDirectionListItem";

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

      <IonTextarea
        value={directionRawText}
        placeholder="add directions"
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
      <IonButton fill="outline" onClick={handleAppendIngredient}>
        Add Direction
      </IonButton>
    </StyledIngredientList>
  );
}

const StyledIngredientList = styled(IonList)`
  padding: 8px;
`;
