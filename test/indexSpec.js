import add from '../src/index';

describe('Index module', function() {
  it('should return the sum of the two inputs', function() {
    expect(add(1, 3)).toBe(4);
  })
})