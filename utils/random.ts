// Random number function
const random = (min: number = Number.MIN_SAFE_INTEGER, max: number = Number.MAX_SAFE_INTEGER, isInteger: boolean = false): number => {
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
