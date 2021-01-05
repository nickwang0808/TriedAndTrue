import styled from "@emotion/styled";
import { IonContent, IonPage } from "@ionic/react";
import React from "react";
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
                {/* <AddCardOutLined /> */}
              </StyledGrid>
            </>
          ))}
        </IonContent>
      </IonPage>
    </>
  );
}
const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;

  padding: 8px;
`;
