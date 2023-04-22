// Import
import { DoubleComplexArray, ZA } from '../../src/types/doubleComplexArray';
import random from '../../utils/random';

// Dual number type
type Dual = { r: number, i: number };

// Define test variables
let values: Dual[];
let index: number;
let instance: ZA;

// Double complex array type test
describe('Double complex array type', () => {
  beforeAll(() => {
    values = new Array(100);
    for (let i = 0; i < 100; ++i) {
      values[i] = { r: random(), i: random() };
    }
    instance = new DoubleComplexArray(values);
  });

  it('should get value correctly in constructor', () => {
    for (let i = 0; i < 100; ++i) {
      expect(instance.get(i)!.r).toStrictEqual(values[i].r);
      expect(instance.get(i)!.i).toStrictEqual(values[i].i);
    }
  });

  it('should set and get value correctly', () => {
    index = random(0, 99, true);
    values[index] = { r: random(), i: random() };
    instance.set(index, values[index]);
    expect(instance.get(index)!.r).toStrictEqual(values[index].r);
    expect(instance.get(index)!.i).toStrictEqual(values[index].i);
  });

  it('should clear value to zero', () => {
    instance.clear();
    for (let i = 0; i < 100; ++i) {
      expect(instance.get(i)!.r).toStrictEqual(0);
      expect(instance.get(i)!.i).toStrictEqual(0);
    }
  });
});
