// Import
import { MAX_DP_INT, MIN_DP_INT } from './limit';

// Random integer function
const random = (min: number = MIN_DP_INT, max: number = MAX_DP_INT, isInteger: boolean = false): number => {
  let value = min + Math.random() * (max - min);
  return isInteger ? Math.floor(value) : value;
};

// Export
export default random;
