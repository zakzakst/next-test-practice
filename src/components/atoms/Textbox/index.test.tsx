import { render, screen } from "@testing-library/react";
import { Textbox } from ".";
import { useRef, useEffect } from "react";

test("[role='textbox']", () => {
  render(<Textbox />);
  expect(screen.getByRole("textbox")).toBeInTheDocument();
});

test("[role='textbox'][disabled='true']", () => {
  render(<Textbox disabled />);
  expect(screen.getByRole("textbox")).toBeDisabled();
});

test("ref属性が設定される", () => {
  const TestComponent = () => {
    const ref = useRef<HTMLInputElement>(null);
    useEffect(() => {
      expect(ref.current?.tagName).toBe("INPUT");
    }, []);
    return <Textbox ref={ref} />;
  };
  render(<TestComponent />);
});
