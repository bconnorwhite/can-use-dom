import { test, expect, beforeEach, afterEach, jest } from "@jest/globals";

let windowSpy: ReturnType<typeof jest.spyOn>;

beforeEach(() => {
  windowSpy = jest.spyOn(global, "window", "get");
});

afterEach(() => {
  windowSpy.mockRestore();
});

test("undefined window", async () => {
  windowSpy.mockImplementation(() => undefined);
  const canUseDOM = (await import("../source/index.js")).default;
  expect(canUseDOM).toBe(false);
});
