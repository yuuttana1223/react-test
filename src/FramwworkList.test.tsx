import { render, screen } from "@testing-library/react";
import { frameworkList } from "./App";
import { FrameworkList } from "./FrameworkList";

describe("Rendering the list with props", () => {
  it("Should render No data ! when no data propped", () => {
    render(<FrameworkList />);
    // document内に存在するかどうかtoBeTruthy()と同じ
    expect(screen.getByText("No data !")).toBeInTheDocument();
  });
  it("Should render list item correctly", () => {
    render(<FrameworkList frameworkList={frameworkList} />);
    const frameworkText = screen
      .getAllByRole("listitem")
      .map((listItem) => listItem.textContent);

    expect(frameworkText).toEqual(
      frameworkList.map((framework) => framework.text)
    );

    // toBeNullと同じような意味
    expect(screen.queryByText("No data !")).not.toBeInTheDocument();
  });
});
