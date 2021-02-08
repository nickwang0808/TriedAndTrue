import React from "react";
import { create } from "react-test-renderer";
import BlockSeparator from "./BlockSeparator";

describe("BlockSeperator with content", () => {
  it("should render block separator with today tag ", () => {
    const tree = create(
      <BlockSeparator
        subTitle="sub"
        title="title"
        showTodayTag={true}
        id="id"
      />
    );
    expect(tree).toMatchSnapshot();
  });

  it("should render block separator without today tag", () => {
    const tree = create(
      <BlockSeparator
        subTitle="sub"
        title="title"
        showTodayTag={false}
        id="id"
      />
    );
    expect(tree).toMatchSnapshot();
  });
});
