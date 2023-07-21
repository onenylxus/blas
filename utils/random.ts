// Import
import { MAX_DP_INT, MIN_DP_INT } from './limit';

// Random integer function
const random = (min: number = MIN_DP_INT, max: number = MAX_DP_INT, isInteger: boolean = false): number => {
  let value = min + Math.random() * (max - min);
  return isInteger ? Math.floor(value) : value;
};

// Random string function
const randstr = (length: number): string => {
  const pool ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += pool.charAt(random(0, pool.length, true));
  }
  return result;
};

// Export
export { random, randstr };
