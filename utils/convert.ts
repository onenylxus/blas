// Import
import { Double, D } from '../src/types/double';
import { Single, S } from '../src/types/single';

// Convert single to double
const dble = (single: S): D => {
  return new Double(single.get());
};

// Convert double to single
const real = (double: D): S => {
  return new Single(double.get());
};

// Export
export { dble, real };
