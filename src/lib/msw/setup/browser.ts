import { setupWorker } from "msw/browser";
import { handlers } from "../handlers";

console.log("browser");

export const worker = setupWorker(...handlers);
