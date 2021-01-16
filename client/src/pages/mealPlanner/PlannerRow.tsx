import styled from "@emotion/styled";
import { format } from "date-fns";
import React from "react";
import { useDispatch } from "react-redux";
import AddCardOutLined from "../../components/card/AddCardOutLined";
import RecipeCardSmall from "../../components/card/RecipeCardSmall";
import BlockSeparator from "../../components/misc/BlockSeparator";
import useGetPlannerRecipeByDate from "../../gql/query/useGetPlannerRecipeByDate";
import { setShowModifyModal } from "../../redux/Planner/PlannerItemModalSlice";
import { openPlannerModal } from "../../redux/Planner/PlannerModalSlice";

interface IProps {
  date: string;
}

export default function PlannerRow({ date }: IProps) {
  const { planner, loading, error } = useGetPlannerRecipeByDate(
    format(new Date(date), "yyyy-MM-dd")
  );
  const dispatch = useDispatch();

  console.log("row rendered");

  if (loading) return <p>loading ...</p>;
  if (error) return <p>{error.message}</p>;
  return (
    <>
      <BlockSeparator
        title={format(new Date(date), "EEEE")}
        subTitle={format(new Date(date), "do")}
        showTodayTag={String(new Date()).slice(0, 15) === date.slice(0, 15)}
      />
      <StyledContainer id={`row-${format(new Date(date), "yyyy-MM-dd")}`}>
        {planner &&
          planner.map(({ recipe: { title, img, id }, index }) => (
            <RecipeCardSmall
              title={title}
              img={img}
              id={id}
              key={id + index}
              onClick={() => dispatch(setShowModifyModal(id))}
            />
          ))}
        <AddCardOutLined onClick={() => dispatch(openPlannerModal(date))} />
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
