import styled from "@emotion/styled";
import React from "react";
import { useDispatch } from "react-redux";
import AddCardOutLined from "../../components/card/AddCardOutLined";
import RecipeCardSmall from "../../components/card/RecipeCardSmall";
import BlockSeparator from "../../components/misc/BlockSeparator";
import useGetPlannerRecipeByDate from "../../gql/query/useGetPlannerRecipeByDate";
import { openPlannerModal } from "../../redux/Planner/PlannerModalSlice";

interface IProps {
  date: string;
}

export default function PlannerRow({ date }: IProps) {
  const { planner, loading, error } = useGetPlannerRecipeByDate(date);
  const dispatch = useDispatch();

  if (loading) return <p>loading ...</p>;
  if (error) return <p>{error.message}</p>;
  return (
    <>
      <BlockSeparator title="Monday" subTitle="(23rd)" />
      <StyledContainer>
        {planner.map(({ date, index, recipe: { title, img, id } }) => (
          <RecipeCardSmall title={title} img={img} id={id} key={id} />
        ))}
        <AddCardOutLined onClick={() => dispatch(openPlannerModal())} />
      </StyledContainer>
    </>
  );
}

const StyledContainer = styled.div`
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
