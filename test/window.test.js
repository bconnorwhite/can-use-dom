import { test, expect } from "@jest/globals";

const canUseDOM = require('../build')['default'];

test('window exists', () => {
  expect(canUseDOM).toBe(true);
});
