import { render } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import createMockStore from "redux-mock-store";
import DeleteAccountConfirmModal from "./DeleteAccountConfirmModal";

describe("delete account modal", () => {
  const store = createMockStore()({
    profileSlice: {
      showConfirmDelete: true,
    },
  });

  const comp = render(
    <Provider store={store}>
      <DeleteAccountConfirmModal />
    </Provider>
  );

  it("should render", () => {
    expect(comp).toMatchSnapshot();
  });
});
