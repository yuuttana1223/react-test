import React from "react";
import { render, screen } from "@testing-library/react";
import { Render } from "./Render";

// おおまかなテスト内容の説明文
describe("Rendering", () => {
  // テスト内容を記述
  it("Should render all the elements correctly", () => {
    // 読み込むComponentを指定
    render(<Render />);
    // htmlのbodyからdivそしてその中全部を出力(eslintに怒られるのはしょうがない)
    // screen.debug();

    // h1やh2タグから中を出力
    // screen.debug(screen.getByRole("heading"));

    // テスト判定 h1タグなどが存在するか(値は気にしない)
    expect(screen.getByRole("heading")).toBeTruthy();
    expect(screen.getByRole("textbox")).toBeTruthy();

    // getAllByRole 複数あるときは配列で取る
    expect(screen.getAllByRole("button")[0]).toBeTruthy();
    expect(screen.getAllByRole("button")[1]).toBeTruthy();

    // Udemyというテキストが存在するかどうか
    expect(screen.getByText("Udemy")).toBeTruthy();

    // 存在しないことのテスト(getByTextだとエラーが発生するのでqueryByTextを使用)
    expect(screen.queryByText("Udemyyyyyyy")).toBeNull();

    // data-testid="copyright"が設定されているかどうか
    expect(screen.getByTestId("copyright")).toBeTruthy();
  });
});
