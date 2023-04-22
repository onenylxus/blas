// Import
import { SingleComplexArray, CA } from '../../src/types/singleComplexArray';
import random from '../../utils/random';
import relerr from '../../utils/relerr';

// Dual number type
type Dual = { r: number, i: number };

// Define test variables
let values: Dual[];
let index: number;
let instance: CA;

// Single complex array type test
describe('Single complex array type', () => {
  beforeAll(() => {
    values = new Array(100);
    for (let i = 0; i < 100; ++i) {
      values[i] = { r: random(), i: random() };
    }
    instance = new SingleComplexArray(values);
  });

  it('should get value correctly in constructor', () => {
    for (let i = 0; i < 100; ++i) {
      expect(relerr(instance.get(i)!.r, values[i].r)).toBeLessThan(10 ** -7);
      expect(relerr(instance.get(i)!.i, values[i].i)).toBeLessThan(10 ** -7);
    }
  });

  it('should set and get value correctly', () => {
    index = random(0, 99, true);
    values[index] = { r: random(), i: random() };
    instance.set(index, values[index]);
    expect(relerr(instance.get(index)!.r, values[index].r)).toBeLessThan(10 ** -7);
    expect(relerr(instance.get(index)!.i, values[index].i)).toBeLessThan(10 ** -7);
  });

  it('should clear value to zero', () => {
    instance.clear();
    for (let i = 0; i < 100; ++i) {
      expect(instance.get(i)!.r).toStrictEqual(0);
      expect(instance.get(i)!.i).toStrictEqual(0);
    }
  });
});
