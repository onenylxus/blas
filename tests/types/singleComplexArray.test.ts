// Import
import { SingleComplexArray, CA } from '../../src/types/singleComplexArray';
import { isClose, isEqual } from '../testers';
import { random } from '../../utils/random';
import _C from '../../utils/complex';

// Define test variables
let values: Dual[];
let index: number;
let instance: CA;

// Single complex array type test
describe('Single complex array type', () => {
  beforeAll(() => {
    values = new Array(100);
    for (let i = 0; i < 100; ++i) {
      values[i] = _C(random(), random());
    }
    instance = new SingleComplexArray(values);
  });

  it('should get value correctly in constructor', () => {
    for (let i = 0; i < 100; ++i) {
      isClose(instance.get(i + 1)!, values[i]);
    }
  });

  it('should set and get value correctly', () => {
    index = random(0, 99, true);
    values[index] = _C(random(), random());
    instance.set(index + 1, values[index]);
    isClose(instance.get(index + 1), values[index]);
  });

  it('should get value array correctly', () => {
    isClose(instance.getAll(), values);
  });

  it('should clear value to zero', () => {
    instance.clear();
    isEqual(instance.getAll(), values.fill(_C(0, 0)));
  });
});
