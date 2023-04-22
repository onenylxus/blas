// Import
import { Integer, I } from '../../src/types/integer';
import random from '../../utils/random';
import relerr from '../../utils/relerr';

// Define test variables
let value: number;
let instance: I;

// Integer type test
describe('Integer type', () => {
  beforeAll(() => {
    value = random();
    instance = new Integer();
  });

  it('should get value correctly in constructor', () => {
    expect(instance.get()).toStrictEqual(0);
  });

  it('should set and get value correctly', () => {
    instance.set(value);
    expect(relerr(instance.get(), value)).toBeLessThan(1);
  });

  it('should clear value to zero', () => {
    instance.clear();
    expect(instance.get()).toStrictEqual(0);
  });
});
