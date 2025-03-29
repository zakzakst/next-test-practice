// import { TextDecoder, TextEncoder } from "util";
import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./",
});

const config: Config = {
  coverageProvider: "v8",
  // testEnvironment: "jest-environment-jsdom",
  testEnvironment: "jest-fixed-jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "@/(.*)$": "<rootDir>/src/$1",
  },
  collectCoverage: true,
  // coverageThreshold: {
  //   global: {
  //     statements: 100,
  //     branches: 100,
  //     functions: 100,
  //     lines: 100,
  //   },
  // },
  // reporters: ["default", "jest-html-reporters"],
  // testEnvironmentOptions: {
  //   customExportConditions: [""],
  // },
  // globals: {
  //   // TextEncoder: require("util").TextEncoder,　// この記述でグローバル化してあげる必要あり
  //   TextEncoder,
  //   TextDecoder,
  //   // TextDecoder: require("util").TextDecoder,
  // },
};

export default createJestConfig(config);
