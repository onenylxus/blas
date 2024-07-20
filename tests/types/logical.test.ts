// Import
import { Logical, L } from '../../src/types/logical';
import { isStrictEqual } from '../testfn';

// Define test variables
let value: boolean;
let instance: L;

// Logical type test
describe('Logical type', () => {
  beforeAll(() => {
    value = Math.random() > 0.5;
    instance = new Logical();
  });

  it('should get value correctly in constructor', () => {
    isStrictEqual(instance.get(), true);
  });

  it('should set and get value correctly', () => {
    instance.set(value);
    isStrictEqual(instance.get(), value);
  });
});
