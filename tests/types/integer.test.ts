// Import
import { Integer, I } from '../../src/types/integer';
import random from '../../utils/random';
import relerr from '../../utils/relerr';

// Define test variables
let value: number;
let instance: I;

// Integer type test
describe('Integer type', () => {
  beforeAll(() => {
    value = random();
    instance = new Integer();
  });

  it('should get value correctly in constructor', () => {
    expect(instance.get()).toStrictEqual(0);
  });

  it('should set and get value correctly', () => {
    instance.set(value);
    expect(relerr(instance.get(), value)).toBeLessThan(1);
  });

  it('should clear value to zero', () => {
    instance.clear();
    expect(instance.get()).toStrictEqual(0);
  });

  it('should add value correctly', () => {
    instance.set(value);
    instance.add(1);
    expect(relerr(instance.get(), value + 1)).toBeLessThan(1);
  });

  it('should subtract value correctly', () => {
    instance.set(value);
    instance.sub(1);
    expect(relerr(instance.get(), value - 1)).toBeLessThan(1);
  });

  it('should multiply value correctly', () => {
    instance.set(value);
    instance.mul(2);
    expect(relerr(instance.get(), value * 2)).toBeLessThan(1);
  });

  it('should divide value correctly', () => {
    instance.set(value);
    instance.div(2);
    expect(relerr(instance.get(), value / 2)).toBeLessThan(1);
  });

  it('should exponent value correctly', () => {
    instance.set(value);
    instance.exp(2);
    expect(relerr(instance.get(), value ** 2)).toBeLessThan(1);
  });

  it('should compare equal to value correctly', () => {
    instance.set(value);
    expect(instance.eq(value + 1) === (instance.get() === value + 1)).toBeTruthy();
    expect(instance.eq(value) === (instance.get() === value)).toBeTruthy();
    expect(instance.eq(value - 1) === (instance.get() === value - 1)).toBeTruthy();
  });

  it('should compare not equal to value correctly', () => {
    expect(instance.ne(value + 1) === (instance.get() !== value + 1)).toBeTruthy();
    expect(instance.ne(value) === (instance.get() !== value)).toBeTruthy();
    expect(instance.ne(value - 1) === (instance.get() !== value - 1)).toBeTruthy();
  });

  it('should compare greater than value correctly', () => {
    expect(instance.gt(value + 1) === (instance.get() > value + 1)).toBeTruthy();
    expect(instance.gt(value) === (instance.get() > value)).toBeTruthy();
    expect(instance.gt(value - 1) === (instance.get() > value - 1)).toBeTruthy();
  });

  it('should compare less than value correctly', () => {
    expect(instance.lt(value + 1) === (instance.get() < value + 1)).toBeTruthy();
    expect(instance.lt(value) === (instance.get() < value)).toBeTruthy();
    expect(instance.lt(value - 1) === (instance.get() < value - 1)).toBeTruthy();
  });

  it('should compare greater than or equal to value correctly', () => {
    expect(instance.ge(value + 1) === (instance.get() >= value + 1)).toBeTruthy();
    expect(instance.ge(value) === (instance.get() >= value)).toBeTruthy();
    expect(instance.ge(value - 1) === (instance.get() >= value - 1)).toBeTruthy();
  });

  it('should compare less than or equal to value correctly', () => {
    expect(instance.le(value + 1) === (instance.get() <= value + 1)).toBeTruthy();
    expect(instance.le(value) === (instance.get() <= value)).toBeTruthy();
    expect(instance.le(value - 1) === (instance.get() <= value - 1)).toBeTruthy();
  });
});
