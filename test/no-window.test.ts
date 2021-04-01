import { test, expect } from "@jest/globals";

let windowSpy: jest.SpyInstance<(Window & typeof globalThis) | undefined, []>;

beforeEach(() => {
  windowSpy = jest.spyOn(global, "window", "get");
});

afterEach(() => {
  windowSpy.mockRestore();
});

test("undefined window", () => {
  windowSpy.mockImplementation(() => undefined);
  // eslint-disable-next-line @typescript-eslint/no-var-requires, global-require
  const canUseDOM = require("../source").default;
  expect(canUseDOM).toBe(false);
});
