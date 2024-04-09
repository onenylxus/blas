// Import
import { DoubleComplexArray, ZA } from '../../src/types/doubleComplexArray';
import { isEqual, isUndefined } from '../testers';
import { random } from '../../utils/random';
import _C from '../../utils/complex';

// Define test variables
let values: Dual[];
let index: number;
let instance: ZA;

// Double complex array type test
describe('Double complex array type', () => {
  beforeAll(() => {
    values = new Array(100);
    for (let i = 0; i < 100; i++) {
      values[i] = _C(random(), random());
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
    values[index] = _C(random(), random());
    instance.set(index + 1, values[index]);
    isEqual(instance.get(index + 1), values[index]);
  });

  it('should get value array correctly', () => {
    isEqual(instance.getAll(), values);
  });

  it('should clear value to zero', () => {
    instance.clear();
    isEqual(instance.getAll(), values.fill(_C(0, 0)));
  });

  it('should resize value array correctly in constructor', () => {
    instance = new DoubleComplexArray(values, 101);
    isEqual(instance.get(101), _C(0, 0));
    instance = new DoubleComplexArray(values, 99);
    isUndefined(instance.get(100));
  });
});
