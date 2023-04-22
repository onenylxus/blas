// Import
import { Single, S } from '../../src/types/single';
import random from '../../utils/random';
import relerr from '../../utils/relerr';

// Define test variables
let value: number;
let instance: S;

// Single type test
describe('Single type', () => {
  beforeAll(() => {
    value = random();
    instance = new Single();
  });

  it('should get value correctly in constructor', () => {
    expect(instance.get()).toStrictEqual(0);
  });

  it('should set and get value correctly', () => {
    instance.set(value);
    expect(relerr(instance.get(), value)).toBeLessThan(10 ** -7);
  });

  it('should clear value to zero', () => {
    instance.clear();
    expect(instance.get()).toStrictEqual(0);
  });
});
