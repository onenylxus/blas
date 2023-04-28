// Import
import random from './random';

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
export default randstr;
