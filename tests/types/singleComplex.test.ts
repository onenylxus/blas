// Import
import { SingleComplex, C } from '../../src/types/singleComplex';
import random from '../../utils/random';

// Define test variables
let rvalue: number;
let ivalue: number;
let instance: C;
let rerror: number;
let ierror: number;

// Single complex type test
describe('Single complex type', () => {
  beforeAll(() => {
    rvalue = random();
    ivalue = random();
    instance = new SingleComplex();
  });

  it('should get value correctly in constructor', () => {
    expect(instance.get().r).toEqual(0);
    expect(instance.get().i).toEqual(0);
  });

  it('should set and get value correctly', () => {
    instance.set(rvalue, ivalue);
    rerror = Math.abs((instance.get().r - rvalue) / rvalue);
    ierror = Math.abs((instance.get().i - ivalue) / ivalue);
    expect(rerror).toBeLessThan(10 ** -7);
    expect(ierror).toBeLessThan(10 ** -7);
  });

  it('should clear value to zero', () => {
    instance.clear();
    expect(instance.get().r).toEqual(0);
    expect(instance.get().i).toEqual(0);
  });
});
