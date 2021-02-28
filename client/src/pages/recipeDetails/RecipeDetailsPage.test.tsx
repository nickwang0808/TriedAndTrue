import { MockedProvider, MockedResponse } from "@apollo/client/testing";
import { IonApp } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { act, render } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";
import * as redux from "react-redux";
import { GET_RECIPE_DETAILS } from "../../gql/query/useGetRecipeDetails";
import { store } from "../../redux/store";
import RecipeDetailsPage from "./RecipeDetailsPage";

describe("recipe details modal", () => {
  beforeAll(() => {
    //@ts-ignore
    ReactDOM.createPortal = jest.fn((element, node) => {
      return element;
    });
  });

  const mocksSuccess: MockedResponse<Record<string, any>> = {
    request: {
      query: GET_RECIPE_DETAILS,
      variables: { id: "65306829-64eb-4b6b-9879-9d605c340eb0" },
    },
    result: {
      data: {
        recipe_by_pk: {
          cuisine: null,
          directions: null,
          id: "65306829-64eb-4b6b-9879-9d605c340eb0",
          img: null,
          meal_type: "uncategorized",
          owner: "JEFe2Smd7lOtw4OEBe2vovG8OzH2",
          title: "test",
          total_time: 0,
          yields: null,
          recipe_ingredients: [],
        },
      },
    },
  };
  const mockError: MockedResponse<Record<string, any>> = {
    request: {
      query: GET_RECIPE_DETAILS,
      variables: { id: "65306829-64eb-4b6b-9879-9d605c340eb0" },
    },
    error: new Error("something wrong happened"),
  };

  const componentBuilder = (mock: MockedResponse<Record<string, any>>) => (
    <MockedProvider mocks={[mock]} addTypename={false}>
      <redux.Provider store={store}>
        <IonApp>
          <IonReactRouter>
            <RecipeDetailsPage />
          </IonReactRouter>
        </IonApp>
      </redux.Provider>
    </MockedProvider>
  );

  const spy = jest.spyOn(redux, "useSelector");
  spy.mockReturnValue({ id: "65306829-64eb-4b6b-9879-9d605c340eb0" });

  it("should render the full page modal with loading without error", async () => {
    const comp = render(componentBuilder(mocksSuccess));
    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));

    expect(comp.findByText("Loading...")).toBeDefined();
  });

  it("should render the full page modal with mock data without error", async () => {
    const comp = render(componentBuilder(mocksSuccess));

    await act(() => new Promise((resolve) => setTimeout(resolve, 1000)));

    expect(comp).toMatchSnapshot();
  });

  it("should render the full page modal with error", async () => {
    const comp = render(componentBuilder(mockError));

    await act(() => new Promise((resolve) => setTimeout(resolve, 10)));

    expect(comp).toMatchSnapshot();
  });
});
