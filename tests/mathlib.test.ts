// Import
import * as matl from '../src/mathlib';

// Absolute function
describe('Absolute function', () => {
  it ('should calculate real number correctly', () => {
    expect(matl.abs(0)).toStrictEqual(0);
    expect(matl.abs(2)).toStrictEqual(2);
    expect(matl.abs(-2)).toStrictEqual(2);
  });

  it('should calculate complex number correctly', () => {
    expect(matl.abs({ r: 3, i: -4 })).toStrictEqual(5);
  });
});

// Conjugate function
describe('Conjugate function', () => {
  it ('should calculate real number correctly', () => {
    expect(matl.conjg(2)).toStrictEqual(2);
  });

  it('should calculate complex number correctly', () => {
    expect(matl.conjg({ r: 3, i: -4 })).toStrictEqual({ r: 3, i: 4 });
  });
});
