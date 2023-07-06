// Import
import { SingleArray, SA } from '../../src/types/singleArray';
import random from '../../utils/random';
import relerr from '../../utils/relerr';

// Define test variables
let values: number[];
let index: number;
let instance: SA;

// Single array type test
describe('Single array type', () => {
  beforeAll(() => {
    values = new Array(100);
    for (let i = 0; i < 100; ++i) {
      values[i] = random();
    }
    instance = new SingleArray(values);
  });

  it('should get value correctly in constructor', () => {
    for (let i = 0; i < 100; ++i) {
      expect(relerr(instance.get(i + 1)!, values[i])).toBeLessThan(10 ** -6);
    }
  });

  it('should set and get value correctly', () => {
    index = random(0, 99, true);
    values[index] = random();
    instance.set(index + 1, values[index]);
    expect(relerr(instance.get(index + 1)!, values[index])).toBeLessThan(10 ** -6);
  });

  it('should get value array correctly', () => {
    expect(instance.getAll().length).toStrictEqual(100);
    expect(instance.getAll().every((v, i) => relerr(v, values[i]) < 10 ** -6)).toBeTruthy();
  });

  it('should clear value to zero', () => {
    instance.clear();
    for (let i = 0; i < 100; ++i) {
      expect(instance.get(i + 1)).toStrictEqual(0);
    }
  });
});
