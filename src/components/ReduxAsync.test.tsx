import {
  ReduxAsync,
  FETCH_DUMMY_MESSAGE,
  DATA_TEST_ID,
  COUNT,
} from "./ReduxAsync";
import { render, screen, waitFor } from "../utils/test-utils";
import userEvent from "@testing-library/user-event";

describe("ReduxAsync test", () => {
  it("Should display value with 100 + payload", async () => {
    render(<ReduxAsync />);
    await userEvent.click(
      screen.getByRole("button", { name: FETCH_DUMMY_MESSAGE })
    );
    await waitFor(
      () => {
        expect(screen.getByTestId(DATA_TEST_ID)).toHaveTextContent(
          `${COUNT + 100}`
        );
      },
      { timeout: 2000 }
    );
  });
});
