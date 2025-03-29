import { http, HttpResponse, type RequestHandler } from "msw";
import { TodoMock } from "@/mocks/TodoMock";

// const url = "https://localhost:3000/hello";
// const url = "https://example.com/hello";
const url = "https://jsonplaceholder.typicode.com/todos/1";

const helloHandler = http.get(url, () => {
  // return HttpResponse.json({
  //   message: "Hello, world!",
  // });
  return HttpResponse.json(TodoMock);
});

export const handlers: RequestHandler[] = [helloHandler];
