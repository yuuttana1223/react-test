import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RenderInput } from "./RenderInput";

// itが何個もあるときに、componentがrenderされるので、それをアンマウントする
// なくてもよいかも？
afterEach(() => cleanup());
const outputConsole = jest.fn();

describe("Rendering", () => {
  it("Should render all the elements correctly", () => {
    render(<RenderInput outputConsole={outputConsole} />);
    expect(screen.getByRole("button")).toBeTruthy();
    expect(screen.getByPlaceholderText("Enter")).toBeTruthy();
  });
});

describe("Input form onChange event", () => {
  // userEvent.typeがPromise<void>を返すのでasyncを使用
  it("Should update input value correctly", async () => {
    render(<RenderInput outputConsole={outputConsole} />);
    // Enterという文字のplaceholderがあるinputを取得
    const inputValue = screen.getByPlaceholderText<HTMLInputElement>("Enter");
    // inputにtestという文字を入力する(Promise<void>なのでawaitを記述)
    await userEvent.type(inputValue, "test");
    expect(inputValue.value).toBe("test");
  });
});

describe("Console button conditionally triggered", () => {
  it("Should not trigger output function", async () => {
    // 関数が呼び出されるかを知るためだけに使われる
    render(<RenderInput outputConsole={outputConsole} />);
    await userEvent.click(screen.getByRole("button"));
    // 関数が呼び出されないことを確認
    expect(outputConsole).not.toHaveBeenCalled();
  });

  it("Should trigger output function", async () => {
    render(<RenderInput outputConsole={outputConsole} />);
    const inputValue = screen.getByPlaceholderText<HTMLInputElement>("Enter");
    await userEvent.type(inputValue, "test");
    await userEvent.click(screen.getByRole("button"));
    expect(outputConsole).toHaveBeenCalled();
  });
});
