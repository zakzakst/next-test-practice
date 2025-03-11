import { render, screen } from "@testing-library/react";
import { ErrorMessage } from ".";
import { useRef, useEffect } from "react";

test("[role='alert']", () => {
  render(<ErrorMessage>test</ErrorMessage>);
  expect(screen.getByRole("alert")).toBeInTheDocument();
});

test("ref属性が設定される", () => {
  const TestComponent = () => {
    const ref = useRef<HTMLParagraphElement>(null);
    useEffect(() => {
      expect(ref.current?.tagName).toBe("P");
    }, []);
    return <ErrorMessage ref={ref}>test</ErrorMessage>;
  };
  render(<TestComponent />);
});
