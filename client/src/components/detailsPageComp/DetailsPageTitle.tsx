import styled from "@emotion/styled";
import { IonIcon } from "@ionic/react";
import React from "react";
import { useDispatch } from "react-redux";
import addtocalendar from "../../assets/svg/addtocalendar.svg";
import addtoList from "../../assets/svg/addtoList.svg";
import edit from "../../assets/svg/edit.svg";
import { setRecipeId } from "../../redux/AddOrEditRecipe/AddOrEditRecipeSlice";

interface IProps {
  img: string | null;
  title: string;
  id: string;
}

export default function DetailsPageTitle({ title, img, id }: IProps) {
  const dispatch = useDispatch();

  return (
    <>
      <StyledImg height="215" src="https://loremflickr.com/640/480/dinner" />

      <StyledTitleAndIconWrapper>
        <StyledTitle>{title}</StyledTitle>
        <StyledIconWrapper>
          <IonIcon
            icon={edit}
            onClick={() => dispatch(setRecipeId(id))}
          />
          <IonIcon 
            icon={addtocalendar} />
           <IonIcon 
            icon={addtoList} />
        </StyledIconWrapper>
      </StyledTitleAndIconWrapper>
    </>
  );
}

const StyledImg = styled.img`
  width: 100%;
  height: 215;
  object-fit: cover;
`;

const StyledTitleAndIconWrapper = styled.div`
  display: flex;
  font-family: SuraBold;
  font-size: 22px;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0 8px;
  color: var(--ion-color-dark);

  margin-top: -20px; /* control how much title gets pushed up */
`;

const StyledIconWrapper = styled.div`
  display: flex;
  width: 120px;
  justify-content: space-between;

    ion-icon {
      padding-top: 24px;
      width: 40px;
      height: 40px;
    }
`;

const StyledTitle = styled.div`
  background: white;
  padding: 8px 8px 16px 8px;
  max-width: calc(100% - 120px);
  font-weight: normal;
  font-size: 22px;
  line-height: 125%;
`;
