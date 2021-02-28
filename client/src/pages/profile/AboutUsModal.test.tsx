import { render } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import createMockStore from "redux-mock-store";
import AboutUsModal from "./AboutUsModal";

describe("about us modal", () => {
  const store = createMockStore()({
    profileSlice: {
      showAboutModal: true,
    },
  });

  const comp = render(
    <Provider store={store}>
      <AboutUsModal />
    </Provider>
  );

  it("should render", () => {
    expect(comp).toMatchSnapshot();
  });
});
