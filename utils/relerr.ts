// Relative error function
const relerr = (measured: number, real: number): number => {
  return Math.abs((measured - real) / real);
};

// Export
export default relerr;