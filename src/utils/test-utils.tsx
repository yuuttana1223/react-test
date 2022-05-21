import { render as rtlRender } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { customCounterReducer } from "../features/customCounter/customCounterSlice";
import { ReactElement } from "react";

// override render method
export const render = (
  ui: ReactElement,
  {
    store = configureStore({
      reducer: { customCounter: customCounterReducer },
    }),
    ...renderOptions
  } = {}
) => {
  const Wrapper = ({ children }: { children: ReactElement }) => {
    return <Provider store={store}>{children}</Provider>;
  };
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

// re-export everything
export * from "@testing-library/react";
