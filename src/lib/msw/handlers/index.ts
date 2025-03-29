import { http, HttpResponse, type RequestHandler } from "msw";

// const url = "https://localhost:3000/hello";
const url = "https://example.com/hello";

const helloHandler = http.get(url, () => {
  return HttpResponse.json({
    message: "Hello, world!",
  });
});

export const handlers: RequestHandler[] = [helloHandler];
