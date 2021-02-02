import styled from "@emotion/styled";
import React from "react";
import addImage from "../../assets/svg/addImage.svg";
import LoaderCentered from "../loading/LoaderCentered";

interface IProps {
  onClick: () => void;
  src?: string;
  loading: boolean;
}

export default function ImageBox({ onClick, src, loading }: IProps) {
  let content = <PlaceHolder />;

  if (loading) {
    content = <LoaderCentered />;
  } else if (src) {
    content = <img src={src} />;
  }

  return <StyledFlex onClick={onClick}>{content}</StyledFlex>;
}

const StyledFlex = styled.div`
  width: 100%;
  max-width: calc(50vw - 16px);
  height: 120px;

  margin-top: 8px;

  & > img {
    border: 1px solid #2a5077;
    object-fit: contain;
  }
`;

function PlaceHolder() {
  return (
    <StyledPlaceHolder>
      <img src={addImage} />
      <div>Add Image</div>
    </StyledPlaceHolder>
  );
}

const StyledPlaceHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  background: #f4f6f8;
  border: 1px solid #2a5077;

  & > div {
    font-family: Sura Bold;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;

    margin-top: 8px;
    color: var(--ion-color-primary);
  }

  & > img {
    object-fit: contain;
  }
`;
