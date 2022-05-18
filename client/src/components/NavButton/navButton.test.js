import { render, screen } from "@testing-library/react";
import NavButton from "./index";

test("check sharks button rendering", () => {
  render(
    <NavButton
      direction="left"
      index={0}
      photoNum={1}
      setIndex={() => {}}
    />
  );
  const element = screen.getByRole("button");
  expect(element).toBeInTheDocument();
});
