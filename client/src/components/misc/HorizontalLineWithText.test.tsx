import React from "react";
import { create } from "react-test-renderer";
import HorizontalLineWithText from "./HorizontalLineWithText";

it('should render horizontal line with "OR" and color with default color black', () => {
  const tree = create(<HorizontalLineWithText text="OR" />);
  expect(tree).toMatchSnapshot();
});
it('should render horizontal line with "OR" and color red ', () => {
  const tree = create(<HorizontalLineWithText text="OR" color="red" />);
  expect(tree).toMatchSnapshot();
});
