// Import
import { Character, H } from '../../src/types/character';
import { isStrictEqual, isFalse, isTrue } from '../testfn';
import { randstr } from '../../utils/random';

// Define test variables
let value: string;
let instance: H;

// Character type test
describe('Character type', () => {
  beforeAll(() => {
    value = randstr(8);
    instance = new Character();
  });

  it('should get value correctly in constructor', () => {
    isStrictEqual(instance.get(), '');
  });

  it('should set and get value correctly', () => {
    instance.set(value);
    isStrictEqual(instance.get(), value[0]);
  });

  it('should clear value to zero', () => {
    instance.clear();
    isStrictEqual(instance.get(), '');
  });

  it('should compare equal to value correctly', () => {
    instance.set(value);
    isTrue(instance.eq(value[0]));
    isFalse(instance.eq(''));
  });

  it('should compare not equal to value correctly', () => {
    isTrue(instance.ne(''));
    isFalse(instance.ne(value[0]));
  });
});
