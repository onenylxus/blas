/* eslint-disable @typescript-eslint/ban-types, @typescript-eslint/no-explicit-any */

// Performance function
const perf = (f: Function, ...p: any[]): { result: any; time: number; } => {
  const start = performance.now();
  const result = f(...p);
  const end = performance.now();
  return { result, time: Math.round((end - start) * 1000) };
};

// Export
export default perf;
