import { render as rtlRender } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { FC, ReactNode } from "react";
import { customCounterReducer } from "../features/customCounter/customCounterSlice";

function render(
  ui: JSX.Element,
  {
    preloadedState,
    store = configureStore({
      reducer: { customCounter: customCounterReducer },
      preloadedState,
    }),
    ...renderOptions
  } = {}
) {
  const Wrapper: FC<{ children: ReactNode }> = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
  };
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from "@testing-library/react";
// override render method
export { render };
