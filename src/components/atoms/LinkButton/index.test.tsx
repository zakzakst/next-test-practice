import { render, screen } from "@testing-library/react";
import { LinkButton } from ".";
import { useRef, useEffect } from "react";

test("[role='link']", () => {
  render(<LinkButton href="#">test</LinkButton>);
  expect(screen.getByRole("link")).toBeInTheDocument();
});

test("[role='button'][aria-disabled='true']", () => {
  render(
    <LinkButton href="#" disabled>
      test
    </LinkButton>
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
      <LinkButton ref={ref} href="#">
        test
      </LinkButton>
    );
  };
  render(<TestComponent />);
});
