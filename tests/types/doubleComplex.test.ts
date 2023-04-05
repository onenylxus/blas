// Import
import { DoubleComplex, Z } from '../../src/types/doubleComplex';
import random from '../../utils/random';

// Define test variables
let rvalue: number;
let ivalue: number;
let instance: Z;

// Double complex type test
describe('Double complex type', () => {
  beforeAll(() => {
    rvalue = random();
    ivalue = random();
    instance = new DoubleComplex();
  });

  it('should get value correctly in constructor', () => {
    expect(instance.get().r).toEqual(0);
    expect(instance.get().i).toEqual(0);
  });

  it('should set and get value correctly', () => {
    instance.set(rvalue, ivalue);
    expect(instance.get().r).toEqual(rvalue);
    expect(instance.get().i).toEqual(ivalue);
  });

  it('should clear value to zero', () => {
    instance.clear();
    expect(instance.get().r).toEqual(0);
    expect(instance.get().i).toEqual(0);
  });
});
