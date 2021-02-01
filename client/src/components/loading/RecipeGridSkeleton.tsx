import React from "react";
import ContentLoader from "react-content-loader";

const RecipeGridSkeleton = () => (
  <ContentLoader
    speed={2}
    width={164}
    height={176}
    viewBox="0 0 164 176"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    style={{ width: "100%" }}
  >
    <path d="M 0 0 h 164 v 135 H 0 z M 8 158 h 58 v -11 H 8 z M 76 158 h 27 v -11 H 76 z M 8 176 h 46 v -11 H 8 z" />
  </ContentLoader>
);

export default RecipeGridSkeleton;
