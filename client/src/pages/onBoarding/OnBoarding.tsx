import { IonContent, IonPage, IonSlide, IonSlides } from "@ionic/react";
import React, { useRef } from "react";
import slideOneGraphic from "../../assets/svg/slideOneGraphic.svg";
import slideTwoGraphic from "../../assets/svg/slideTwoGraphic.svg";
import SlideBase from "./SlideBase";

const slideOpts = {
  initialSlide: 0,
  speed: 400,
};

interface IProps {
  onComplete: () => void;
}

export default function OnBoarding({ onComplete }: IProps) {
  const slidesEl = useRef(document.createElement("ion-slides"));
  const handleNext = () => slidesEl.current.slideNext();

  return (
    <IonPage>
      <IonContent>
        <IonSlides pager={true} options={slideOpts} ref={slidesEl}>
          <IonSlide>
            <SlideBase
              title="Quickly Add"
              subTitle="your tried & true recipes"
              graphic={slideOneGraphic}
              buttonText="Continue"
              buttonAction={handleNext}
            />
          </IonSlide>
          <IonSlide>
            <SlideBase
              title="We'll Create"
              subTitle="your next meal plan and shopping list"
              graphic={slideTwoGraphic}
              buttonText="Let's do it!"
              buttonAction={onComplete}
            />
          </IonSlide>
        </IonSlides>
      </IonContent>
    </IonPage>
  );
}
