import { screen, render } from "@testing-library/react";
import { UseEffectRender } from "./UseEffectRender";

describe("useEffect rendering", () => {
  it("Should render only after async function resolved", async () => {
    render(<UseEffectRender />);
    const REG = /I am/;
    expect(screen.queryByText(REG)).not.toBeInTheDocument();
    expect(await screen.findByText(REG)).toBeInTheDocument();
  });
});
