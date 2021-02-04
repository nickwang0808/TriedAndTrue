import { IonContent, IonPage, IonSlide, IonSlides } from "@ionic/react";
import React from "react";
import slideOneGraphic from "../../assets/svg/slideOneGraphic.svg";
import SlideOne from "./SlideBase";

const slideOpts = {
  initialSlide: 0,
  speed: 400,
};

export default function OnBoarding() {
  return (
    <IonPage>
      <IonContent>
        <IonSlides pager={true} options={slideOpts}>
          <IonSlide>
            <SlideOne
              title="Quickly Add"
              subTitle="your tried & true recipes"
              graphic={slideOneGraphic}
              buttonText="Continue"
              buttonAction={() => {}}
            />
          </IonSlide>
          <IonSlide>
            <SlideOne
              title="We'll Create"
              subTitle="your next meal plan and shopping list"
              graphic={slideOneGraphic}
              buttonText="Let's do it!"
              buttonAction={() => {}}
            />
          </IonSlide>
        </IonSlides>
      </IonContent>
    </IonPage>
  );
}
