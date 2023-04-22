// Import
import { IntegerArray, IA } from '../../src/types/integerArray';
import random from '../../utils/random';
import relerr from '../../utils/relerr';

// Define test variables
let values: number[];
let index: number;
let instance: IA;

// Integer array type test
describe('Integer array type', () => {
  beforeAll(() => {
    values = new Array(100);
    for (let i = 0; i < 100; ++i) {
      values[i] = random();
    }
    instance = new IntegerArray(values);
  });

  it('should get value correctly in constructor', () => {
    for (let i = 0; i < 100; ++i) {
      expect(relerr(instance.get(i)!, values[i])).toBeLessThan(1);
    }
  });

  it('should set and get value correctly', () => {
    index = random(0, 99, true);
    values[index] = random();
    instance.set(index, values[index]);
    expect(relerr(instance.get(index)!, values[index])).toBeLessThan(1);
  });

  it('should clear value to zero', () => {
    instance.clear();
    for (let i = 0; i < 100; ++i) {
      expect(instance.get(i)).toStrictEqual(0);
    }
  });
});
