// Import
import { DoubleComplex, Z } from '../../src/types/doubleComplex';
import random from '../../utils/random';

// Define test variables
let value: Dual;
let instance: Z;

// Double complex type test
describe('Double complex type', () => {
  beforeAll(() => {
    value = { r: random(), i: random() };
    instance = new DoubleComplex();
  });

  it('should get value correctly in constructor', () => {
    expect(instance.get().r).toStrictEqual(0);
    expect(instance.get().i).toStrictEqual(0);
  });

  it('should set and get value correctly', () => {
    instance.set(value);
    expect(instance.get().r).toStrictEqual(value.r);
    expect(instance.get().i).toStrictEqual(value.i);
  });

  it('should clear value to zero', () => {
    instance.clear();
    expect(instance.get().r).toStrictEqual(0);
    expect(instance.get().i).toStrictEqual(0);
  });
});
