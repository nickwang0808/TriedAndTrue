import { MockedProvider } from "@apollo/client/testing";
import { render } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import RecipeDeleteConfirmationModal from "./RecipeDeleteConfirmationModal";

describe("RecipeDeleteConfirmationModal", () => {
  const mockStore = configureStore();
  const store = mockStore({
    recipeDetailsSlice: {
      showDeleteRecipeConfirmationModal: true,
      id: "id",
    },
  });

  const comp = render(
    <MockedProvider addTypename={false}>
      <Provider store={store}>
        <RecipeDeleteConfirmationModal />
      </Provider>
    </MockedProvider>
  );

  it("should render the modal without error", () => {
    expect(comp).toMatchSnapshot();
  });
});
