import styled from "@emotion/styled";
import { IonIcon } from "@ionic/react";
import React from "react";
import { useDispatch } from "react-redux";
import calendar from "../../assets/svg/calendar.svg";
import pencil from "../../assets/svg/pencil.svg";
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
      <StyledImg src="https://picsum.photos/300/200" />

      <StyledTitleAndIconWrapper>
        <StyledTitle>{title}</StyledTitle>
        <StyledIconWrapper>
          <IonIcon
            size="large"
            icon={pencil}
            onClick={() => dispatch(setRecipeId(id))}
          />
          <IonIcon size="large" icon={calendar} />
        </StyledIconWrapper>
      </StyledTitleAndIconWrapper>
    </>
  );
}

const StyledImg = styled.img`
  width: 100%;
  height: 230;

  object-fit: cover;
`;

const StyledTitleAndIconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0 8px;

  margin-top: -20px; /* control how much title gets pushed up */
`;

const StyledIconWrapper = styled.div`
  display: flex;
  margin: 0 8px 8px 0;
  width: 88px;
  justify-content: space-between;
`;

const StyledTitle = styled.div`
  background: white;
  padding: 8px;
  max-width: 60%;

  font-weight: normal;
  font-size: 22px;
  line-height: 125%;
`;
