// Import
import { _C } from '../../utils/complex';
import { SingleComplex, C } from '../../src/types/singleComplex';
import { isClose, isEqual } from '../testfn';
import { random } from '../../utils/random';

// Define test variables
let value: Dual;
let instance: C;
let reference: C;

// Single complex type test
describe('Single complex type', () => {
  beforeAll(() => {
    value = _C(random(), random());
    instance = new SingleComplex();
    reference = new SingleComplex();
  });

  it('should get value correctly in constructor', () => {
    isEqual(instance.get(), _C(0, 0));
  });

  it('should set and get value correctly', () => {
    instance.set(value);
    isClose(instance.get(), value);
  });

  it('should clear value to zero', () => {
    instance.clear();
    isEqual(instance.get(), _C(0, 0));
  });

  it('should add value correctly', () => {
    instance.set(value);
    instance.add(_C(1, -1));
    isClose(instance.get(), _C(value.r + 1, value.i - 1));
  });

  it('should subtract value correctly', () => {
    instance.set(value);
    instance.sub(_C(1, -1));
    isClose(instance.get(), _C(value.r - 1, value.i + 1));
  });

  it('should multiply value correctly', () => {
    instance.set(value);
    instance.mul(_C(1, -1));
    isClose(instance.get(), _C(value.r + value.i, value.i - value.r));
  });

  it('should divide value correctly', () => {
    instance.set(value);
    instance.div(_C(1, -1));
    isClose(instance.get(), _C((value.r - value.i) / 2, (value.i + value.r) / 2));
  });

  it('should compare equal to value correctly', () => {
    instance.set(value);
    reference.set(_C(value.r, value.i));
    isEqual(instance.eq(_C(value.r, value.i)), instance.get().r === reference.get().r && instance.get().i === reference.get().i);
    reference.set(_C(value.r + 1, value.i));
    isEqual(instance.eq(_C(value.r + 1, value.i)), instance.get().r === reference.get().r && instance.get().i === reference.get().i);
    reference.set(_C(value.r, value.i + 1));
    isEqual(instance.eq(_C(value.r, value.i + 1)), instance.get().r === reference.get().r && instance.get().i === reference.get().i);
  });

  it('should compare not equal to value correctly', () => {
    reference.set(_C(value.r, value.i));
    isEqual(instance.ne(_C(value.r, value.i)), instance.get().r !== reference.get().r || instance.get().i !== reference.get().i);
    reference.set(_C(value.r + 1, value.i));
    isEqual(instance.ne(_C(value.r + 1, value.i)), instance.get().r !== reference.get().r || instance.get().i !== reference.get().i);
    reference.set(_C(value.r, value.i + 1));
    isEqual(instance.ne(_C(value.r, value.i + 1)), instance.get().r !== reference.get().r || instance.get().i !== reference.get().i);
  });
});
