// Import
import { DoubleComplexArray, ZA } from '../../src/types/doubleComplexArray';
import { isEqual, isUndefined } from '../testfn';
import { random } from '../../utils/random';
import { toDual } from '../../utils/complex';

// Define test variables
let values: Dual[];
let index: number;
let instance: ZA;

// Double complex array type test
describe('Double complex array type', () => {
  beforeAll(() => {
    values = new Array(100);
    for (let i = 0; i < 100; i++) {
      values[i] = toDual(random(), random());
    }
    instance = new DoubleComplexArray(values);
  });

  it('should get value correctly in constructor', () => {
    for (let i = 0; i < 100; i++) {
      isEqual(instance.get(i + 1), values[i]);
    }
  });

  it('should set and get value correctly', () => {
    index = random(0, 99, true);
    values[index] = toDual(random(), random());
    instance.set(index + 1, values[index]);
    isEqual(instance.get(index + 1), values[index]);
  });

  it('should get value array correctly', () => {
    isEqual(instance.getAll(), values);
  });

  it('should clear value to zero', () => {
    instance.clear();
    isEqual(instance.getAll(), values.fill(toDual(0, 0)));
  });

  it('should handle resize correctly for array with size', () => {
    instance = new DoubleComplexArray(values, 101);
    instance.set(-1, random());
    instance.set(102, random());
    isEqual(instance.getAll(), [...values, toDual(0, 0)]);
    isUndefined(instance.get(-1));
    isUndefined(instance.get(102));
  });

  it('should handle resize correctly for array without value and size', () => {
    instance = new DoubleComplexArray();
    instance.set(2, values[0]);
    isEqual(instance.getAll(), [toDual(0, 0), values[0]]);
    isEqual(instance.get(3), toDual(0, 0));
  });
});
