// Import
import { Single, S } from '../../src/types/single';
import { MAXSPINT, MINSPINT } from '../../src/mathlib';
import { isClose, isEqual } from '../testers';
import { random } from '../../utils/random';

// Define test variables
let value: number;
let instance: S;

// Single type test
describe('Single type', () => {
  beforeAll(() => {
    value = random(MINSPINT, MAXSPINT);
    instance = new Single();
  });

  it('should get value correctly in constructor', () => {
    isEqual(instance.get(), 0);
  });

  it('should set and get value correctly', () => {
    instance.set(value);
    isClose(instance.get(), value);
  });

  it('should clear value to zero', () => {
    instance.clear();
    isEqual(instance.get(), 0);
  });

  it('should add value correctly', () => {
    instance.set(value);
    instance.add(1);
    isClose(instance.get(), value + 1);
  });

  it('should subtract value correctly', () => {
    instance.set(value);
    instance.sub(1);
    isClose(instance.get(), value - 1);
  });

  it('should multiply value correctly', () => {
    instance.set(value);
    instance.mul(2);
    isClose(instance.get(), value * 2);
  });

  it('should divide value correctly', () => {
    instance.set(value);
    instance.div(2);
    isClose(instance.get(), value / 2);
  });

  it('should exponent value correctly', () => {
    instance.set(value);
    instance.exp(2);
    isClose(instance.get(), value ** 2);
  });

  it('should compare equal to value correctly', () => {
    instance.set(value);
    isEqual(instance.eq(value + 1), instance.get() === value + 1);
    isEqual(instance.eq(value), instance.get() === value);
    isEqual(instance.eq(value - 1), instance.get() === value - 1);
  });

  it('should compare not equal to value correctly', () => {
    isEqual(instance.ne(value + 1), instance.get() !== value + 1);
    isEqual(instance.ne(value), instance.get() !== value);
    isEqual(instance.ne(value - 1), instance.get() !== value - 1);
  });

  it('should compare greater than value correctly', () => {
    isEqual(instance.gt(value + 1), instance.get() > value + 1);
    isEqual(instance.gt(value), instance.get() > value);
    isEqual(instance.gt(value - 1), instance.get() > value - 1);
  });

  it('should compare less than value correctly', () => {
    isEqual(instance.lt(value + 1), instance.get() < value + 1);
    isEqual(instance.lt(value), instance.get() < value);
    isEqual(instance.lt(value - 1), instance.get() < value - 1);
  });

  it('should compare greater than or equal to value correctly', () => {
    isEqual(instance.ge(value + 1), instance.get() >= value + 1);
    isEqual(instance.ge(value), instance.get() >= value);
    isEqual(instance.ge(value - 1), instance.get() >= value - 1);
  });

  it('should compare less than or equal to value correctly', () => {
    isEqual(instance.le(value + 1), instance.get() <= value + 1);
    isEqual(instance.le(value), instance.get() <= value);
    isEqual(instance.le(value - 1), instance.get() <= value - 1);
  });
});
