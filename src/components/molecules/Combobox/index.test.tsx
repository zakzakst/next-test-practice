import { render, screen } from "@testing-library/react";
import { Combobox } from "./";
import { useRef, useEffect } from "react";

test("[role=combobox]", () => {
  render(<Combobox />);
  expect(screen.getByRole("combobox")).toBeInTheDocument();
});

test("ref属性が設定される", () => {
  const TestComponent = () => {
    const ref = useRef<HTMLSelectElement>(null);
    useEffect(() => {
      expect(ref.current?.tagName).toBe("SELECT");
    }, []);
    return <Combobox ref={ref} />;
  };
  render(<TestComponent />);
});
