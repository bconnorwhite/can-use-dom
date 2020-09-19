const canUseDOM = require('../build')['default'];

test('window exists', () => {
  expect(canUseDOM).toBe(true);
});
