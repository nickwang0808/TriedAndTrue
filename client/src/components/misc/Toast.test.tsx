import React from "react";
import * as redux from "react-redux";
import renderer from "react-test-renderer";
import { store } from "../../redux/store";
import Toast from "./Toast";

describe("toast", () => {
  it("should render toast with 'hello'", () => {
    const spy = jest
      .spyOn(redux, "useSelector")
      .mockReturnValue({ showToast: { text: "hello" } });
    const tree = renderer
      .create(
        <redux.Provider store={store}>
          <Toast />
        </redux.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
