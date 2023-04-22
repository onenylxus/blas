// Number library snippets
const MAX_INT = Number.MAX_SAFE_INTEGER;
const MIN_INT = Number.MIN_SAFE_INTEGER;

// Random integer function
const random = (min: number = MIN_INT, max: number = MAX_INT, isInteger: boolean = false): number => {
  let value = min + Math.random() * (max - min);
  return isInteger ? Math.floor(value) : value;
};

// Export
export default random;
