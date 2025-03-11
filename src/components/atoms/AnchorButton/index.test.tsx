import { render, screen } from "@testing-library/react";
import { AnchorButton } from ".";
import { useRef, useEffect } from "react";

test("[role='link']", () => {
  render(<AnchorButton href="#">test</AnchorButton>);
  expect(screen.getByRole("link")).toBeInTheDocument();
});

test("[role='button'][aria-disabled='true']", () => {
  render(
    <AnchorButton href="#" disabled>
      test
    </AnchorButton>
  );
  expect(screen.getByRole("link")).toHaveAttribute("aria-disabled", "true");
});

test("ref属性が設定される", () => {
  const TestComponent = () => {
    const ref = useRef<HTMLAnchorElement>(null);
    useEffect(() => {
      expect(ref.current?.tagName).toBe("A");
    }, []);
    return (
      <AnchorButton href="#" ref={ref}>
        test
      </AnchorButton>
    );
  };

  render(<TestComponent />);
});
