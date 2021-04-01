import { test, expect } from "@jest/globals";
import canUseDOM from "../source";

test("window exists", () => {
  expect(canUseDOM).toBe(true);
});
