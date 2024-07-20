// Import
import { IntegerArray, IA } from '../../src/types/integerArray';
import { isClose, isEqual, isUndefined } from '../testfn';
import { random } from '../../utils/random';

// Define test variables
let values: number[];
let index: number;
let instance: IA;

// Integer array type test
describe('Integer array type', () => {
  beforeAll(() => {
    values = new Array(100);
    for (let i = 0; i < 100; i++) {
      values[i] = random();
    }
    instance = new IntegerArray(values);
  });

  it('should get value correctly in constructor', () => {
    for (let i = 0; i < 100; i++) {
      isClose(instance.get(i + 1), values[i]);
    }
  });

  it('should set and get value correctly', () => {
    index = random(0, 99, true);
    values[index] = random();
    instance.set(index + 1, values[index]);
    isClose(instance.get(index + 1), values[index]);
  });

  it('should get value array correctly', () => {
    isClose(instance.getAll(), values);
  });

  it('should clear value to zero', () => {
    instance.clear();
    isEqual(instance.getAll(), values.fill(0));
  });

  it('should resize value array correctly in constructor', () => {
    instance = new IntegerArray(values, 101);
    isEqual(instance.get(101), 0);
    instance = new IntegerArray(values, 99);
    isUndefined(instance.get(100));
  });
});
