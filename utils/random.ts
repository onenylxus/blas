// Import
import { MAXDPINT, MINDPINT } from './constants';

// Random integer function
const random = (min: number = MINDPINT, max: number = MAXDPINT, isInteger: boolean = false): number => {
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
