import { test, expect } from "@jest/globals";
import canUseDOM from "../source/index.js";

test("window exists", () => {
  expect(canUseDOM).toBe(true);
});
