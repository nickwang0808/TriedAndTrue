import React from "react";
import { create } from "react-test-renderer";
import ImageBox from "./ImageBox";

it("should render image box without loading and without src", () => {
  const tree = create(<ImageBox onClick={() => {}} loading={false} />);
  expect(tree).toMatchSnapshot();
});
it("should render image box with loading and with src from turkey burger", () => {
  const tree = create(
    <ImageBox
      onClick={() => {}}
      loading={true}
      src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2020%2F03%2F20%2F1360550.jpg"
    />
  );
  expect(tree).toMatchSnapshot();
});
it("should render image box with loading and with src from turkey burger", () => {
  const tree = create(
    <ImageBox
      onClick={() => {}}
      loading={false}
      src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2020%2F03%2F20%2F1360550.jpg"
    />
  );
  expect(tree).toMatchSnapshot();
});
