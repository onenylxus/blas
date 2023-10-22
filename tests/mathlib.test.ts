// Import
import * as matl from '../src/mathlib';
import compare from '../utils/compare';

// Absolute function
describe('Absolute function', () => {
  it ('should calculate real number correctly', () => {
    expect(compare(matl.abs(0), 0)).toBeTruthy();
    expect(compare(matl.abs(2), 2)).toBeTruthy();
    expect(compare(matl.abs(-2), 2)).toBeTruthy();
  });

  it('should calculate complex number correctly', () => {
    expect(compare(matl.abs({ r: 3, i: -4 }), 5)).toBeTruthy();
  });
});

// Conjugate function
describe('Conjugate function', () => {
  it ('should calculate real number correctly', () => {
    expect(compare(matl.conjg(2), 2)).toBeTruthy();
  });

  it('should calculate complex number correctly', () => {
    expect(compare(matl.conjg({ r: 3, i: -4 }), { r: 3, i: 4 })).toBeTruthy();
  });
});
