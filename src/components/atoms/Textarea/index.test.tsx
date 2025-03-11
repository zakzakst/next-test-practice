import { render, screen } from "@testing-library/react";
import { Textarea } from ".";
import { useRef, useEffect } from "react";

test("[role='textbox']", () => {
  render(<Textarea />);
  expect(screen.getByRole("textbox")).toBeInTheDocument();
});

test("[role='textbox'][disabled='true']", () => {
  render(<Textarea disabled />);
  expect(screen.getByRole("textbox")).toBeDisabled();
});

test("ref属性が設定される", () => {
  const TestComponent = () => {
    const ref = useRef<HTMLTextAreaElement>(null);
    useEffect(() => {
      expect(ref.current?.tagName).toBe("TEXTAREA");
    }, []);
    return <Textarea ref={ref} />;
  };
  render(<TestComponent />);
});
