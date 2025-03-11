import { render, screen } from "@testing-library/react";
import { Switch } from ".";
import { useRef, useEffect } from "react";

test("[role='switch']", () => {
  render(<Switch />);
  expect(screen.getByRole("switch")).toBeInTheDocument();
});

test("[role='switch'][disabled='true']", () => {
  render(<Switch disabled={true} />);
  expect(screen.getByRole("switch")).toBeDisabled();
});

test("[role='switch'][checked='true']", () => {
  render(<Switch defaultChecked={true} />);
  expect(screen.getByRole("switch")).toBeChecked();
});

test("ref属性が設定される", () => {
  const TestComponent = () => {
    const ref = useRef<HTMLInputElement>(null);
    useEffect(() => {
      expect(ref.current?.tagName).toBe("INPUT");
    }, []);
    return <Switch ref={ref} />;
  };
  render(<TestComponent />);
});
