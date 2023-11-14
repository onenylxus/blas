// Import
import _C from '../utils/complex';

// Math object constants
// export const E: number = Math.E;
// export const LN10: number = Math.LN10;
// export const LN2: number = Math.LN2;
// export const LOG10E: number = Math.LOG10E;
// export const LOG2E: number = Math.LOG2E;
// export const PI: number = Math.PI;
// export const SQRT1_2: number = Math.SQRT1_2;
// export const SQRT2: number = Math.SQRT2;

// Limits
export const MAXDPINT: number = 2 ** 53 - 1;
export const MINDPINT: number = -(2 ** 53) + 1;
export const MAXSPINT: number = 2 ** 31 - 1;
export const MINSPINT: number = -(2 ** 31) + 1;

// GAM scaling constants
export const GAM: number = 4096;
export const GAMSQ: number = 4096 ** 2;
export const RGAMSQ: number = 1 / (4096 ** 2);

// Blue's scaling constants
export const MAXN: number = 2 ** 128;
export const TSML: number = 2 ** -63;
export const TBIG: number = 2 ** 52;
export const SSML: number = 2 ** 75;
export const SBIG: number = 2 ** -76;

// Absolute function
export const abs = (x: number | Dual): number => {
  if (typeof x === 'number') {
    return Math.abs(x);
  }
  return sqrt(x.r ** 2 + x.i ** 2);
};

// Inverse cosine function
// export const acos: (x: number) => number = Math.acos;

// Inverse hyperbolic cosine function
// export const acosh: (x: number) => number = Math.acosh;

// Inverse sine function
// export const asin: (x: number) => number = Math.asin;

// Inverse hyperbolic sine function
// export const asinh: (x: number) => number = Math.asinh;

// Inverse tangent function
// export const atan: (x: number) => number = Math.atan;

// 2-argument inverse tangent function
// export const atan2: (x: number, y: number) => number = Math.atan2;

// Inverse hyperbolic tangent function
// export const atanh: (x: number) => number = Math.atanh;

// Cubic root function
// export const cbrt: (x: number) => number = Math.cbrt;

// Ceiling function
// export const ceil: (x: number) => number = Math.ceil;

// 32-bit count leading zeroes function
// export const clz32: (x: number) => number = Math.clz32;

// Conjugate function
export const conjg = (x: number | Dual): number | Dual => {
  if (typeof x === 'number') {
    return x;
  }
  return _C(x.r, -x.i);
};

// Cosine function
// export const cos: (x: number) => number = Math.cos;

// Hyperbolic cosine function
// export const cosh: (x: number) => number = Math.cosh;

// Exponent function
// export const exp: (x: number) => number = Math.exp;

// Exponent minus-1 function
// export const expm1: (x: number) => number = Math.expm1;

// Floor function
// export const floor: (x: number) => number = Math.floor;

// 32-bit round function
// export const fround: (x: number) => number = Math.fround;

// Hypotenuse function
// export const hypot: (...values: number[]) => number = Math.hypot;

// 32-bit multiplication function
// export const imul: (x: number, y: number) => number = Math.imul;

// Natural logarithm function
// export const log: (x: number) => number = Math.log;

// Base-10 logarithm function
// export const log10: (x: number) => number = Math.log10;

// Natural logarithm plus-1 function
// export const log1p: (x: number) => number = Math.log1p;

// Base-2 logarithm function
// export const log2: (x: number) => number = Math.log2;

// Maximum function
export const max: (...values: number[]) => number = Math.max;

// Minimum function
export const min: (...values: number[]) => number = Math.min;

// Power function
// export const pow: (x: number, y: number) => number = Math.pow;

// Random function
// export const random: () => number = Math.random;

// Round function
// export const round: (x: number) => number = Math.round;

// Sign function
export const sign: (x: number) => number = Math.sign;

// Sine function
// export const sin: (x: number) => number = Math.sin;

// Hyperbolic sine function
// export const sinh: (x: number) => number = Math.sinh;

// Square root function
export const sqrt: (x: number) => number = Math.sqrt;

// Tangent function
// export const tan: (x: number) => number = Math.tan;

// Hyperbolic tangent function
// export const tanh: (x: number) => number = Math.tanh;

// Truncate function
// export const trunc: (x: number) => number = Math.trunc;
