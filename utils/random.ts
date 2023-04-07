// Random integer function
const random = (min: number = Number.MIN_SAFE_INTEGER, max: number = Number.MAX_SAFE_INTEGER): number => {
  return min + Math.random() * (max - min);
};

// Export
export default random;
