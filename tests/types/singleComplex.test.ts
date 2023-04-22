// Import
import { SingleComplex, C } from '../../src/types/singleComplex';
import random from '../../utils/random';
import relerr from '../../utils/relerr';

// Define test variables
let value: Dual;
let instance: C;

// Single complex type test
describe('Single complex type', () => {
  beforeAll(() => {
    value = { r: random(), i: random() };
    instance = new SingleComplex();
  });

  it('should get value correctly in constructor', () => {
    expect(instance.get().r).toStrictEqual(0);
    expect(instance.get().i).toStrictEqual(0);
  });

  it('should set and get value correctly', () => {
    instance.set(value);
    expect(relerr(instance.get().r, value.r)).toBeLessThan(10 ** -7);
    expect(relerr(instance.get().i, value.i)).toBeLessThan(10 ** -7);
  });

  it('should clear value to zero', () => {
    instance.clear();
    expect(instance.get().r).toStrictEqual(0);
    expect(instance.get().i).toStrictEqual(0);
  });
});
