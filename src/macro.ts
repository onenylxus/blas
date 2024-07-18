// Import
import { Integer } from './types/integer';

// Vector size function
export const vsize = (n: Integer, inc: Integer): number => {
  return (-n.get() + 1) * inc.get() + 1;
};
