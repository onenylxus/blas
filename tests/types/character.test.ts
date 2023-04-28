// Import
import { Character, H } from '../../src/types/character';
import randstr from '../../utils/randstr';

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
    expect(instance.get()).toStrictEqual('');
  });

  it('should set and get value correctly', () => {
    instance.set(value);
    expect(instance.get()).toStrictEqual(value[0]);
  });

  it('should clear value to zero', () => {
    instance.clear();
    expect(instance.get()).toStrictEqual('');
  });
});
