import { render, screen } from "@testing-library/react";
import { Button } from ".";
import { useRef, useEffect } from "react";

test("[role='button']", () => {
  render(<Button>test</Button>);
  expect(screen.getByRole("button", { name: "test" })).toBeInTheDocument();
});

test("[role='button'][disabled='true']", () => {
  render(<Button disabled>test</Button>);
  expect(screen.getByRole("button")).toBeDisabled();
});

test("ref属性が設定される", () => {
  const TestComponent = () => {
    const ref = useRef<HTMLButtonElement>(null);
    useEffect(() => {
      expect(ref.current?.tagName).toBe("BUTTON");
    }, []);
    return <Button ref={ref}>test</Button>;
  };
  render(<TestComponent />);
});
