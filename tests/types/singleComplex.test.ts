// Import
import { SingleComplex, C } from '../../src/types/singleComplex';
import { isClose, isEqual } from '../testers';
import { random } from '../../utils/random';

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
    isEqual(instance.get(), { r: 0, i: 0 });
  });

  it('should set and get value correctly', () => {
    instance.set(value);
    isClose(instance.get(), value);
  });

  it('should clear value to zero', () => {
    instance.clear();
    isEqual(instance.get(), { r: 0, i: 0 });
  });

  it('should add value correctly', () => {
    instance.set(value);
    instance.add({ r: 1, i: -1 });
    isClose(instance.get(), { r: value.r + 1, i: value.i - 1 });
  });

  it('should subtract value correctly', () => {
    instance.set(value);
    instance.sub({ r: 1, i: -1 });
    isClose(instance.get(), { r: value.r - 1, i: value.i + 1 });
  });

  it('should multiply value correctly', () => {
    instance.set(value);
    instance.mul({ r: 1, i: -1 });
    isClose(instance.get(), { r: value.r + value.i, i: value.i - value.r });
  });

  it('should divide value correctly', () => {
    instance.set(value);
    instance.div({ r: 1, i: -1 });
    isClose(instance.get(), { r: (value.r - value.i) / 2, i: (value.i + value.r) / 2 });
  });

  it('should compare equal to value correctly', () => {
    instance.set(value);
    isEqual(instance.eq({ r: value.r, i: value.i }), instance.get().r === value.r && instance.get().i === value.i);
    isEqual(instance.eq({ r: value.r + 1, i: value.i }), instance.get().r === value.r + 1 && instance.get().i === value.i);
    isEqual(instance.eq({ r: value.r, i: value.i + 1 }), instance.get().r === value.r && instance.get().i === value.i + 1);
  });

  it('should compare not equal to value correctly', () => {
    isEqual(instance.ne({ r: value.r, i: value.i }), instance.get().r !== value.r || instance.get().i !== value.i);
    isEqual(instance.ne({ r: value.r + 1, i: value.i }), instance.get().r !== value.r + 1 || instance.get().i !== value.i);
    isEqual(instance.ne({ r: value.r, i: value.i + 1 }), instance.get().r !== value.r || instance.get().i !== value.i + 1);
  });
});
