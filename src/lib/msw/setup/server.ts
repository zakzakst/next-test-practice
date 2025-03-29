import { setupServer } from "msw/node";
import { handlers } from "../handlers";

console.log("server");

export const server = setupServer(...handlers);
