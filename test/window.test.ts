import { afterAll, beforeAll, expect, test } from "@jest/globals";

beforeAll(() => {
  global.window = {
    document: {
      createElement: () => {}
    }
  } as any;
});

afterAll(() => {
  delete (global as any).window;
});

test("window", async () => {
  const canUseDOM = (await import("../source/index.js")).default;
  expect(canUseDOM).toBe(true);
});
