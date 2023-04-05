// Import
import { Single, S } from '../../src/types/single';
import random from '../../utils/random';

// Define test variables
let value: number;
let instance: S;
let error: number;

// Single type test
describe('Single type', () => {
  beforeAll(() => {
    value = random();
    instance = new Single();
  });

  it('should get value correctly in constructor', () => {
    expect(instance.get()).toEqual(0);
  });

  it('should set and get value correctly', () => {
    instance.set(value);
    error = Math.abs((instance.get() - value) / value);
    expect(error).toBeLessThan(10 ** -7);
  });

  it('should clear value to zero', () => {
    instance.clear();
    expect(instance.get()).toEqual(0);
  });
});
