import test from 'ava';

import Golf from '../index.js';

test('returns itself', (t) => {
  process.env.SPORTSDATA_API_KEY = 'test';
  const golf = new Golf();
  t.true(golf instanceof Golf);
});
