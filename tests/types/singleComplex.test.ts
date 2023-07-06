// Import
import { SingleComplex, C } from '../../src/types/singleComplex';
import random from '../../utils/random';
import relerr from '../../utils/relerr';

// Define test variables
let value: Dual;
let instance: C;

// Single complex type test
describe('Single complex type', () => {
  beforeAll(() => {
    value = { r: random(), i: random() };
    instance = new SingleComplex();
  });

  it('should get value correctly in constructor', () => {
    expect(instance.get().r).toStrictEqual(0);
    expect(instance.get().i).toStrictEqual(0);
  });

  it('should set and get value correctly', () => {
    instance.set(value);
    expect(relerr(instance.get().r, value.r)).toBeLessThan(10 ** -7);
    expect(relerr(instance.get().i, value.i)).toBeLessThan(10 ** -7);
  });

  it('should clear value to zero', () => {
    instance.clear();
    expect(instance.get().r).toStrictEqual(0);
    expect(instance.get().i).toStrictEqual(0);
  });

  it('should add value correctly', () => {
    instance.set(value);
    instance.add({ r: 1, i: -1 });
    expect(relerr(instance.get().r, value.r + 1)).toBeLessThan(10 ** -7);
    expect(relerr(instance.get().i, value.i - 1)).toBeLessThan(10 ** -7);
  });

  it('should subtract value correctly', () => {
    instance.set(value);
    instance.sub({ r: 1, i: -1 });
    expect(relerr(instance.get().r, value.r - 1)).toBeLessThan(10 ** -7);
    expect(relerr(instance.get().i, value.i + 1)).toBeLessThan(10 ** -7);
  });

  it('should multiply value correctly', () => {
    instance.set(value);
    instance.mul({ r: 1, i: -1 });
    expect(relerr(instance.get().r, value.r + value.i)).toBeLessThan(2 * 10 ** -7);
    expect(relerr(instance.get().i, value.i - value.r)).toBeLessThan(2 * 10 ** -7);
  });

  it('should divide value correctly', () => {
    instance.set(value);
    instance.div({ r: 1, i: -1 });
    expect(relerr(instance.get().r, (value.r - value.i) / 2)).toBeLessThan(10 ** -7);
    expect(relerr(instance.get().i, (value.i + value.r) / 2)).toBeLessThan(10 ** -7);
  });

  it('should compare equal to value correctly', () => {
    instance.set(value);
    expect(instance.eq({ r: value.r, i: value.i }) === (instance.get().r === value.r && instance.get().i === value.i)).toBeTruthy();
    expect(instance.eq({ r: value.r + 1, i: value.i }) === (instance.get().r === value.r + 1 && instance.get().i === value.i)).toBeTruthy();
    expect(instance.eq({ r: value.r, i: value.i + 1 }) === (instance.get().r === value.r && instance.get().i === value.i + 1)).toBeTruthy();
  });

  it('should compare not equal to value correctly', () => {
    expect(instance.ne({ r: value.r, i: value.i }) === (instance.get().r !== value.r || instance.get().i !== value.i)).toBeTruthy();
    expect(instance.ne({ r: value.r + 1, i: value.i }) === (instance.get().r !== value.r + 1 || instance.get().i !== value.i)).toBeTruthy();
    expect(instance.ne({ r: value.r, i: value.i + 1 }) === (instance.get().r !== value.r || instance.get().i !== value.i + 1)).toBeTruthy();
  });
});
