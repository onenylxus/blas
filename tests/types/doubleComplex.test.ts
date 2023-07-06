// Import
import { DoubleComplex, Z } from '../../src/types/doubleComplex';
import random from '../../utils/random';

// Define test variables
let value: Dual;
let instance: Z;

// Double complex type test
describe('Double complex type', () => {
  beforeAll(() => {
    value = { r: random(), i: random() };
    instance = new DoubleComplex();
  });

  it('should get value correctly in constructor', () => {
    expect(instance.get().r).toStrictEqual(0);
    expect(instance.get().i).toStrictEqual(0);
  });

  it('should set and get value correctly', () => {
    instance.set(value);
    expect(instance.get().r).toStrictEqual(value.r);
    expect(instance.get().i).toStrictEqual(value.i);
  });

  it('should clear value to zero', () => {
    instance.clear();
    expect(instance.get().r).toStrictEqual(0);
    expect(instance.get().i).toStrictEqual(0);
  });

  it('should add value correctly', () => {
    instance.set(value);
    instance.add({ r: 1, i: -1 });
    expect(instance.get().r).toStrictEqual(value.r + 1);
    expect(instance.get().i).toStrictEqual(value.i - 1);
  });

  it('should subtract value correctly', () => {
    instance.set(value);
    instance.sub({ r: 1, i: -1 });
    expect(instance.get().r).toStrictEqual(value.r - 1);
    expect(instance.get().i).toStrictEqual(value.i + 1);
  });

  it('should multiply value correctly', () => {
    instance.set(value);
    instance.mul({ r: 1, i: -1 });
    expect(instance.get().r).toStrictEqual(value.r + value.i);
    expect(instance.get().i).toStrictEqual(value.i - value.r);
  });

  it('should divide value correctly', () => {
    instance.set(value);
    instance.div({ r: 1, i: -1 });
    expect(instance.get().r).toStrictEqual((value.r - value.i) / 2);
    expect(instance.get().i).toStrictEqual((value.i + value.r) / 2);
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
