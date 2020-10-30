import { test, expect } from "@jest/globals";

let windowSpy;

beforeEach(() => {
  windowSpy = jest.spyOn(global, 'window', 'get');
});

afterEach(() => {
  windowSpy.mockRestore();
});

test('undefined window', () => {
  windowSpy.mockImplementation(() => undefined);
  const canUseDOM = require('../build')['default'];
  expect(canUseDOM).toBe(false);
});
