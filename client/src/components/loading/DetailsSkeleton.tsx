import React from "react";
import ContentLoader from "react-content-loader";

const DetailsSkeleton = () => (
  <ContentLoader
    speed={2}
    width={100}
    height={696}
    viewBox="0 0 360 696"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    style={{ width: "100%" }}
  >
    <path d="M 0 16 C 0 7.163 7.163 0 16 0 h 328 c 8.837 0 16 7.163 16 16 v 198 H 0 V 16 z" />
    <path d="M 133 685 h 78 v 11 h -78 z" />
    <path d="M 8 196 h 344 v 36 H 8 z" />
    <path d="M 16 222 h 158 v -15 H 16 z M 186 222 h 50 v -15 h -50 z M 36 368 h 106 v -15 H 36 z M 11 434 h 341 v -45 H 11 z" />
    <path d="M 11 490 h 341 v -45 H 11 z" />
    <path d="M 11 546 h 341 v -45 H 11 z" />
    <path d="M 16 250 h 67 v -15 H 16 z M 28 300 h 47 v -22 H 28 z M 28 320 h 67 v -12 H 28 z M 121 320 h 67 v -12 h -67 z M 120 300 h 47 v -22 h -47 z" />
    <path d="M 16.5 276 v 48 M 110.5 276 v 48" />
    <path d="M 221 368 h 106 v -15 H 221 z" />
  </ContentLoader>
);

export default DetailsSkeleton;
