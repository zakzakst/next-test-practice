import "cross-fetch/polyfill";
import { render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TestComponent } from "./TestComponent";
import { server } from "@/lib/msw/setup/server";
import { http, HttpResponse } from "msw";
import { TodoMock } from "@/mocks/TodoMock";

const user = userEvent.setup();
const url = "https://jsonplaceholder.typicode.com/todos/1";

describe("Test Component", () => {
  const mockFn = jest.fn();
  beforeEach(() => {
    server.use(
      http.get(url, () => {
        mockFn();
        return HttpResponse.json(TodoMock);
      })
    );
  });
  it("クリック", async () => {
    const { getByRole, getByText } = render(<TestComponent />);
    const ButtonEl = getByRole("button");
    expect(ButtonEl).toBeInTheDocument();
    expect(getByText("Test Component: 0")).toBeInTheDocument();
    await user.click(ButtonEl);
    expect(getByText("Test Component: 1")).toBeInTheDocument();
    await waitFor(() => {
      // expect(getByText("delectus aut autem")).toBeInTheDocument();
      expect(getByText("Mock Todo")).toBeInTheDocument();
      expect(mockFn).toHaveBeenCalledTimes(1);
    });
  });
});
