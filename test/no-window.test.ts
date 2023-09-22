import { expect, test } from "@jest/globals";
import canUseDOM from "../source/index.js";

test("undefined window", async () => {
  expect(canUseDOM).toBe(false);
});
