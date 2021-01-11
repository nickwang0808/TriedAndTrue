import styled from "@emotion/styled";
import { IonContent, IonPage } from "@ionic/react";
import React from "react";
import AddCardOutLined from "../../components/card/AddCardOutLined";
import RecipeCardSmall from "../../components/card/RecipeCardSmall";
import BlockSeparator from "../../components/misc/BlockSeparator";
import Header from "./Header";

export default function MealPlannerMainPage() {
  return (
    <>
      <IonPage>
        <Header />
        <IonContent>
          {[1, 2, 3, 4, 5, 6, 7].map((num) => (
            <>
              <BlockSeparator title="Monday" subTitle="(23rd)" />
              <StyledGrid key={num}>
                <RecipeCardSmall />
                <RecipeCardSmall />
                <RecipeCardSmall />
                <RecipeCardSmall />
                <RecipeCardSmall />
                <AddCardOutLined />
              </StyledGrid>
            </>
          ))}
        </IonContent>
      </IonPage>
    </>
  );
}
const StyledGrid = styled.div`
  display: flex;
  gap: 8px;
  overflow-x: auto;

  padding: 16px 8px;
  // target all card and add button container in the flex box
  & > * {
    width: 30%;
    flex-shrink: 0; // ion card shrink by default
  }
`;
