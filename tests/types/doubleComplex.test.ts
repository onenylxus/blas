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
    expect(instance.get().r).toStrictEqual(0);
    expect(instance.get().i).toStrictEqual(0);
  });

  it('should set and get value correctly', () => {
    instance.set({ r: rvalue, i: ivalue });
    expect(instance.get().r).toStrictEqual(rvalue);
    expect(instance.get().i).toStrictEqual(ivalue);
  });

  it('should clear value to zero', () => {
    instance.clear();
    expect(instance.get().r).toStrictEqual(0);
    expect(instance.get().i).toStrictEqual(0);
  });
});
