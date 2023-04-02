// Import
import { Double, D } from '../../src/types/double';

// Define test variables
let value: number;
let instance: D;

// Double type test
describe('Double type', () => {
  beforeAll(() => {
    value = Number.MIN_SAFE_INTEGER + Math.random() * (Number.MAX_SAFE_INTEGER - Number.MIN_SAFE_INTEGER);
    instance = new Double();
  });

  it('should get value correctly in constructor', () => {
    expect(instance.get()).toEqual(0);
  });

  it('should set and get value correctly', () => {
    instance.set(value);
    expect(instance.get()).toEqual(value);
  });

  it('should clear value to zero', () => {
    instance.clear();
    expect(instance.get()).toEqual(0);
  });
});
