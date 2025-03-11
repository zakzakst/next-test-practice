import { render } from "@testing-library/react";
import { InputFileButton } from ".";
import { useRef, useEffect } from "react";

test("ref属性が設定される", () => {
  const TestComponent = () => {
    const ref = useRef<HTMLInputElement>(null);
    useEffect(() => {
      expect(ref.current?.tagName).toBe("INPUT");
    }, []);
    return (
      <InputFileButton
        ref={ref}
        inputProps={{}}
        buttonProps={{ children: "test" }}
      />
    );
  };
  render(<TestComponent />);
});
