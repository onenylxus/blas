// Dual object verify function
const isdual = (x: any): boolean => {
  return typeof x === 'object' && typeof x.r === 'number' && typeof x.i === 'number';
};

// Export
export default isdual;
