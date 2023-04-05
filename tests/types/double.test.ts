// Import
import { Double, D } from '../../src/types/double';
import random from '../../utils/random';

// Define test variables
let value: number;
let instance: D;

// Double type test
describe('Double type', () => {
  beforeAll(() => {
    value = random();
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
