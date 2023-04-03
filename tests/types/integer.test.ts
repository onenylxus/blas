// Import
import { Integer, I } from '../../src/types/integer';

// Define test variables
let value: number;
let instance: I;
let error: number;

// Integer type test
describe('Integer type', () => {
  beforeAll(() => {
    value = Number.MIN_SAFE_INTEGER + Math.random() * (Number.MAX_SAFE_INTEGER - Number.MIN_SAFE_INTEGER);
    instance = new Integer();
  });

  it('should get value correctly in constructor', () => {
    expect(instance.get()).toEqual(0);
  });

  it('should set and get value correctly', () => {
    instance.set(value);
    error = Math.abs((instance.get() - value) / value);
    expect(error).toBeLessThan(1);
  });

  it('should clear value to zero', () => {
    instance.clear();
    expect(instance.get()).toEqual(0);
  });
});
