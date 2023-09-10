import { assert, describe, expect, it, test } from 'vitest'

test('basic', () => {
});

describe('my suite', () => {
  it('foo', () => {
    assert.equal(Math.sqrt(4), 2)
  })

  it('bar', () => {
    expect(1 + 1).eq(2)
  })
})
