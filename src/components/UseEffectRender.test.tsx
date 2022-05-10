import { screen, render } from "@testing-library/react";
import { UseEffectRender } from "./UseEffectRender";

describe("useEffect rendering", () => {
  it("Should render only after async function resolved", async () => {
    render(<UseEffectRender />);
    expect(screen.queryByText(/I am/)).not.toBeInTheDocument();
    expect(await screen.findByText(/I am/)).toBeInTheDocument();
  });
});
