// Import
import { DoubleArray, DA } from '../../src/types/doubleArray';
import { isEqual, isUndefined } from '../testfn';
import { random } from '../../utils/random';

// Define test variables
let values: number[];
let index: number;
let instance: DA;

// Double array type test
describe('Double array type', () => {
  beforeAll(() => {
    values = new Array(100);
    for (let i = 0; i < 100; i++) {
      values[i] = random();
    }
    instance = new DoubleArray(values);
  });

  it('should get value correctly in constructor', () => {
    for (let i = 0; i < 100; i++) {
      isEqual(instance.get(i + 1), values[i]);
    }
  });

  it('should set and get value correctly', () => {
    index = random(0, 99, true);
    values[index] = random();
    instance.set(index + 1, values[index]);
    isEqual(instance.get(index + 1), values[index]);
  });

  it('should get value array correctly', () => {
    isEqual(instance.getAll(), values);
  });

  it('should clear value to zero', () => {
    instance.clear();
    isEqual(instance.getAll(), values.fill(0));
  });

  it('should resize value array correctly in constructor', () => {
    instance = new DoubleArray(values, 101);
    isEqual(instance.get(101), 0);
    instance = new DoubleArray(values, 99);
    isUndefined(instance.get(100));
  });
});
