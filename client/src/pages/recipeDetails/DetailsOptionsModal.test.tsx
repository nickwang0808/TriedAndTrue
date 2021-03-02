import { render } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import DetailsOptionsModal from "./DetailsOptionsModal";

describe("DetailsOptionsModal", () => {
  const store = configureStore()({
    recipeDetailsSlice: {
      showDetailsOptionModal: true,
      id: "id",
    },
  });

  const comp = render(
    <Provider store={store}>
      <DetailsOptionsModal />
    </Provider>
  );

  it("should render the modal", () => {
    expect(comp).toMatchSnapshot();
  });
});
