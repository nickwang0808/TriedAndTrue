import { render } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import createMockStore from "redux-mock-store";
import ProfilePage from "./ProfilePage";

describe("profile page", () => {
  const store = createMockStore()({});

  const comp = render(
    <Provider store={store}>
      <ProfilePage />
    </Provider>
  );

  it("should render", () => {
    expect(comp).toMatchSnapshot();
  });
});
