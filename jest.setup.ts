import "@testing-library/jest-dom";
import { server } from "@/lib/msw/setup/server";
beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
