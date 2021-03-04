import styled from "@emotion/styled";
import React from "react";
import { useDispatch } from "react-redux";
// import addtocalendar from "../../assets/svg/addtocalendar.svg";
// import addtoList from "../../assets/svg/addtoList.svg";
import ellipsisVertical from "../../assets/svg/ellipsis.svg";
import { setShowDetailsOptionModal } from "../../redux/RecipeDetailsSlice/recipeDetailsSlice";
import StyledIonIcon from "../misc/StyledIonIcon";

interface IProps {
  img: string | null;
  title: string;
  id: string;
}

export default function DetailsPageTitle({ title, img, id }: IProps) {
  const dispatch = useDispatch();

  return (
    <>
      <StyledImg
        height="215"
        src={img || "https://loremflickr.com/640/480/dinner"}
      />

      <StyledTitleAndIconWrapper>
        <StyledTitle>{title}</StyledTitle>
        <StyledIconWrapper>
          {/* <StyledIonIcon icon={addtocalendar} />
          <StyledIonIcon icon={addtoList} /> */}
          <StyledIonIcon
            // style={{ fontSize: 30 }}
            icon={ellipsisVertical}
            onClick={() => dispatch(setShowDetailsOptionModal(true))}
          />
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
  /* justify-content: space-between; */
  justify-content: flex-end;

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
