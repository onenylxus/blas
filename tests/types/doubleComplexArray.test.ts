// Import
import { DoubleComplexArray, ZA } from '../../src/types/doubleComplexArray';
import { random } from '../../utils/random';

// Define test variables
let values: Dual[];
let index: number;
let instance: ZA;

// Double complex array type test
describe('Double complex array type', () => {
  beforeAll(() => {
    values = new Array(100);
    for (let i = 0; i < 100; ++i) {
      values[i] = { r: random(), i: random() };
    }
    instance = new DoubleComplexArray(values);
  });

  it('should get value correctly in constructor', () => {
    for (let i = 0; i < 100; ++i) {
      expect(instance.get(i + 1)!.r).toStrictEqual(values[i].r);
      expect(instance.get(i + 1)!.i).toStrictEqual(values[i].i);
    }
  });

  it('should set and get value correctly', () => {
    index = random(0, 99, true);
    values[index] = { r: random(), i: random() };
    instance.set(index + 1, values[index]);
    expect(instance.get(index + 1)!.r).toStrictEqual(values[index].r);
    expect(instance.get(index + 1)!.i).toStrictEqual(values[index].i);
  });

  it('should get value array correctly', () => {
    expect(instance.getAll().length).toStrictEqual(100);
    expect(instance.getAll().every((v, i) => v.r === values[i].r)).toBeTruthy();
    expect(instance.getAll().every((v, i) => v.i === values[i].i)).toBeTruthy();
  });

  it('should clear value to zero', () => {
    instance.clear();
    for (let i = 0; i < 100; ++i) {
      expect(instance.get(i + 1)!.r).toStrictEqual(0);
      expect(instance.get(i + 1)!.i).toStrictEqual(0);
    }
  });
});
