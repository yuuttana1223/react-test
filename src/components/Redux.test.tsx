import { screen, render } from "@testing-library/react";
import { Redux } from "./Redux";
import userEvent from "@testing-library/user-event";
import { AnyAction, configureStore, Store } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { customCounterReducer } from "../features/customCounter/customCounterSlice";

describe("Redux Integration Test", () => {
  // eslintの予測 anyは仕方がない
  let store: Store<any, AnyAction>;
  // 毎回storeを作り直したい
  beforeEach(() => {
    store = configureStore({
      reducer: {
        customCounter: customCounterReducer,
      },
    });
  });

  it("Should display value with increment by 1 per click", async () => {
    render(
      <Provider store={store}>
        <Redux />
      </Provider>
    );
    const PLUS_COUNT = 3;
    for (let i = 0; i < PLUS_COUNT; i++) {
      await userEvent.click(screen.getByRole("button", { name: "+" }));
    }
    expect(screen.getByTestId("count")).toHaveTextContent(`${PLUS_COUNT}`);
  });

  it("Should display value with decrement by 1 per click", async () => {
    render(
      <Provider store={store}>
        <Redux />
      </Provider>
    );
    const MINUS_COUNT = -2;
    for (let i = 0; i > MINUS_COUNT; i--) {
      await userEvent.click(screen.getByRole("button", { name: "-" }));
    }
    expect(screen.getByTestId("count")).toHaveTextContent(`${MINUS_COUNT}`);
  });

  it("Should display value with incrementByAmount", async () => {
    render(
      <Provider store={store}>
        <Redux />
      </Provider>
    );
    await userEvent.type(screen.getByPlaceholderText("Enter"), "10");
    await userEvent.click(
      screen.getByRole("button", { name: "IncrementByAmount" })
    );
    expect(screen.getByTestId("count")).toHaveTextContent("10");
  });
});
