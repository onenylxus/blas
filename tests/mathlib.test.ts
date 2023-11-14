// Import
import * as matl from '../src/mathlib';
import { isEqual } from './testers';
import _C from '../utils/complex';

// Absolute function
describe('Absolute function', () => {
  it ('should calculate real number correctly', () => {
    isEqual(matl.abs(0), 0);
    isEqual(matl.abs(2), 2);
    isEqual(matl.abs(-2), 2);
  });

  it('should calculate complex number correctly', () => {
    isEqual(matl.abs(_C(3, -4)), 5);
  });
});

// Conjugate function
describe('Conjugate function', () => {
  it ('should calculate real number correctly', () => {
    isEqual(matl.conjg(2), 2);
  });

  it('should calculate complex number correctly', () => {
    isEqual(matl.conjg(_C(3, -4)), _C(3, 4));
  });
});
