// Import
import { SingleArray, SA } from '../../src/types/singleArray';
import { isClose, isEqual, isUndefined } from '../testers';
import { random } from '../../utils/random';

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
      isClose(instance.get(i + 1)!, values[i]);
    }
  });

  it('should set and get value correctly', () => {
    index = random(0, 99, true);
    values[index] = random();
    instance.set(index + 1, values[index]);
    isClose(instance.get(index + 1)!, values[index]);
  });

  it('should get value array correctly', () => {
    isClose(instance.getAll(), values);
  });

  it('should clear value to zero', () => {
    instance.clear();
    isEqual(instance.getAll(), values.fill(0));
  });

  it('should resize value array correctly in constructor', () => {
    instance = new SingleArray(values, 101);
    isEqual(instance.get(101), 0);
    instance = new SingleArray(values, 99);
    isUndefined(instance.get(100));
  });
});
