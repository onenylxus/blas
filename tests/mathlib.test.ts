// Import
import * as matl from '../src/mathlib';
import { isEqual } from './testers';

// Absolute function
describe('Absolute function', () => {
  it ('should calculate real number correctly', () => {
    isEqual(matl.abs(0), 0);
    isEqual(matl.abs(2), 2);
    isEqual(matl.abs(-2), 2);
  });

  it('should calculate complex number correctly', () => {
    isEqual(matl.abs({ r: 3, i: -4 }), 5);
  });
});

// Conjugate function
describe('Conjugate function', () => {
  it ('should calculate real number correctly', () => {
    isEqual(matl.conjg(2), 2);
  });

  it('should calculate complex number correctly', () => {
    isEqual(matl.conjg({ r: 3, i: -4 }), { r: 3, i: 4 });
  });
});
