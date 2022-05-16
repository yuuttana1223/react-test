import { render, screen } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import {
  FAILED_MESSAGE,
  FETCH_USER_MESSAGE,
  LOADING_MESSAGE,
  MockServer,
} from "../components/MockServer";
import { API_URLS } from "../constants/api";
import userEvent from "@testing-library/user-event";

const DUMMY_NAME = "Bred dummy";

// 上書きしない限り有効
const server = setupServer(
  // req(検索のクエリなどを追記できる)
  // res(レスポンスを返す)
  // ctx(context) json apiのcontext
  rest.get(API_URLS.USERS.SHOW(1), (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ username: DUMMY_NAME }));
  })
);

// Service Workerはブラウザ以外の環境では実行できないためsetupServerを使用
beforeAll(() => server.listen());

// 毎回
afterEach(() => server.resetHandlers());

// すべて終了後、他のテストに影響を与えないようにするため
afterAll(() => server.close());

describe("Mocking API", () => {
  it("[Fetch success]Should display fetched data correctly and button disabled", async () => {
    render(<MockServer />);
    expect(
      screen.getByRole("button", { name: FETCH_USER_MESSAGE })
    ).toBeEnabled();

    await userEvent.click(
      screen.getByRole("button", { name: FETCH_USER_MESSAGE })
    );
    expect(await screen.findByRole("button")).toHaveTextContent(
      LOADING_MESSAGE
    );

    expect(
      screen.getByRole("button", { name: LOADING_MESSAGE })
    ).toBeDisabled();

    expect(await screen.findByRole("heading")).toHaveTextContent(DUMMY_NAME);
    expect(
      screen.getByRole("button", { name: FETCH_USER_MESSAGE })
    ).toBeDisabled();
  });

  it("[Fetch failure]Should display error message correctly and button enabled", async () => {
    // デフォルトの代わりに使用
    server.use(
      rest.get(API_URLS.USERS.SHOW(1), (_req, res, ctx) => {
        return res(ctx.status(404));
      })
    );
    render(<MockServer />);
    expect(
      screen.getByRole("button", { name: FETCH_USER_MESSAGE })
    ).toBeEnabled();
    await userEvent.click(
      screen.getByRole("button", { name: FETCH_USER_MESSAGE })
    );

    expect(
      await screen.findByRole("button", { name: LOADING_MESSAGE })
    ).toBeDisabled();

    expect(await screen.findByTestId("error")).toHaveTextContent(
      FAILED_MESSAGE
    );
    expect(screen.queryByRole("heading")).not.toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: FETCH_USER_MESSAGE })
    ).toBeEnabled();
  });
});
