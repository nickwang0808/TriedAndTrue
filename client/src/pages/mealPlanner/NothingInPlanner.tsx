import styled from "@emotion/styled";
import { IonButton } from "@ionic/react";
import React from "react";
import { useDispatch } from "react-redux";
import { setShowGeneratePlannerModal } from "../../redux/Planner/GeneratePlannerModalSlice";

interface IProps {
  onClickPrimary: () => void;
  onClickSecondary: () => void;
}

export default function NothingInPlanner({
  onClickPrimary,
  onClickSecondary,
}: IProps) {
  const dispatch = useDispatch();
  const openGenerateModal = () => dispatch(setShowGeneratePlannerModal(true));

  return (
    <StyledWrapper>
      <p className="ion-padding-bottom">
        Let us create your meal plan for the week. (You can customize it further
        afterwards)
      </p>
      <IonButton color="secondary" onClick={onClickPrimary}>
        Yes, Create My Meal Plan
      </IonButton>
      <IonButton fill="outline" color="secondary" onClick={onClickSecondary}>
        No, I’ll Do It
      </IonButton>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 24px 24px 24px;
`;
