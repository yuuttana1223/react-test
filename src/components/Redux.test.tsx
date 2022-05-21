import { Redux } from "./Redux";
import { render, screen } from "../utils/test-utils";
import userEvent from "@testing-library/user-event";

describe("Redux Integration Test", () => {
  it("Should display value with increment by 1 per click", async () => {
    render(<Redux />);
    const PLUS_COUNT = 3;
    for (let i = 0; i < PLUS_COUNT; i++) {
      await userEvent.click(screen.getByRole("button", { name: "+" }));
    }
    expect(screen.getByTestId("count")).toHaveTextContent(`${PLUS_COUNT}`);
  });

  it("Should display value with decrement by 1 per click", async () => {
    render(<Redux />);
    const MINUS_COUNT = -2;
    for (let i = 0; i > MINUS_COUNT; i--) {
      await userEvent.click(screen.getByRole("button", { name: "-" }));
    }
    expect(screen.getByTestId("count")).toHaveTextContent(`${MINUS_COUNT}`);
  });

  it("Should display value with incrementByAmount", async () => {
    render(<Redux />);
    await userEvent.type(screen.getByPlaceholderText("Enter"), "10");
    await userEvent.click(
      screen.getByRole("button", { name: "IncrementByAmount" })
    );
    expect(screen.getByTestId("count")).toHaveTextContent("10");
  });
});
