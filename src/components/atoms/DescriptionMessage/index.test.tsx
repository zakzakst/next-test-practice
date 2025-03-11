import { render } from "@testing-library/react";
import { DescriptionMessage } from ".";
import { useRef, useEffect } from "react";

test("ref属性が設定される", () => {
  const TestComponent = () => {
    const ref = useRef<HTMLParagraphElement>(null);
    useEffect(() => {
      expect(ref.current?.tagName).toBe("P");
    }, []);
    return <DescriptionMessage ref={ref}>test</DescriptionMessage>;
  };
  render(<TestComponent />);
});
