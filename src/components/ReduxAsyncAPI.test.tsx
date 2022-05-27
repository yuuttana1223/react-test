import { rest } from "msw";
import { API_URLS } from "../constants/api";
import { setupServer } from "msw/node";
import { render, screen } from "../utils/test-utils";
import { FETCH_JSON_MESSAGE, ReduxAsync } from "./ReduxAsync";
import userEvent from "@testing-library/user-event";
import { ANONYMOUS_USER } from "../features/customCounter/customCounterSlice";

const DUMMY_NAME = "Bred dummy";

const server = setupServer(
  rest.get(API_URLS.USERS.SHOW(1), (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ username: DUMMY_NAME }));
  })
);
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Redux Async API Mocking", () => {
  it("[Fetch success] Should display username in h3 tag", async () => {
    render(<ReduxAsync />);
    expect(
      screen.queryByRole("heading", {
        name: DUMMY_NAME,
      })
    ).not.toBeInTheDocument();
    await userEvent.click(
      screen.getByRole("button", { name: FETCH_JSON_MESSAGE })
    );
    expect(await screen.findByRole("heading")).toHaveTextContent(DUMMY_NAME);
  });
  it("[Fetch failed] Should display anonymous in h3 tag", async () => {
    server.use(
      rest.get(API_URLS.USERS.SHOW(1), (_req, res, ctx) => {
        return res(ctx.status(404));
      })
    );
    render(<ReduxAsync />);
    expect(
      screen.queryByRole("heading", {
        name: DUMMY_NAME,
      })
    ).not.toBeInTheDocument();
    await userEvent.click(
      screen.getByRole("button", { name: FETCH_JSON_MESSAGE })
    );
    expect(await screen.findByRole("heading")).toHaveTextContent(
      ANONYMOUS_USER
    );
  });
});
