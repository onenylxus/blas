// Import
import * as ml from '../src/mathlib';
import { _C } from '../utils/complex';
import { isEqual } from './testers';

// Absolute function
describe('Absolute function', () => {
  it('should calculate real number correctly', () => {
    isEqual(ml.abs(0), 0);
    isEqual(ml.abs(2), 2);
    isEqual(ml.abs(-2), 2);
  });

  it('should calculate complex number correctly', () => {
    isEqual(ml.abs(_C(3, -4)), 5);
  });
});

// Add function
describe('Add function', () => {
  it('should calculate real number correctly', () => {
    isEqual(ml.add(1, 2), 3);
  });

  it('should calculate complex number correctly', () => {
    isEqual(ml.add(_C(3, 4), 2), _C(5, 4));
    isEqual(ml.add(1, _C(1, 2)), _C(2, 2));
    isEqual(ml.add(_C(3, 4), _C(1, 2)), _C(4, 6));
  });
});

// Conjugate function
describe('Conjugate function', () => {
  it ('should calculate real number correctly', () => {
    isEqual(ml.conjg(2), 2);
  });

  it('should calculate complex number correctly', () => {
    isEqual(ml.conjg(_C(3, -4)), _C(3, 4));
  });
});

// Divide function
describe('Divide function', () => {
  it('should calculate real number correctly', () => {
    isEqual(ml.div(1, 2), 0.5);
  });

  it('should calculate complex number correctly', () => {
    isEqual(ml.div(_C(3, 4), 2), _C(1.5, 2));
    isEqual(ml.div(1, _C(1, 2)), _C(0.2, -0.4));
    isEqual(ml.div(_C(3, 4), _C(1, 2)), _C(2.2, -0.4));
  });
});

// Multiply function
describe('Multiply function', () => {
  it('should calculate real number correctly', () => {
    isEqual(ml.mul(1, 2), 2);
  });

  it('should calculate complex number correctly', () => {
    isEqual(ml.mul(_C(3, 4), 2), _C(6, 8));
    isEqual(ml.mul(1, _C(1, 2)), _C(1, 2));
    isEqual(ml.mul(_C(3, 4), _C(1, 2)), _C(-5, 10));
  });
});

// Subtract function
describe('Subtract function', () => {
  it('should calculate real number correctly', () => {
    isEqual(ml.sub(1, 2), -1);
  });

  it('should calculate complex number correctly', () => {
    isEqual(ml.sub(_C(3, 4), 2), _C(1, 4));
    isEqual(ml.sub(1, _C(1, 2)), _C(0, 2));
    isEqual(ml.sub(_C(3, 4), _C(1, 2)), _C(2, 2));
  });
});
