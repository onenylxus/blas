// Import
import { DoubleComplex, Z } from '../../types/doubleComplex';
import { DoubleComplexArray, ZA } from '../../types/doubleComplexArray';
import { Integer, I } from '../../types/integer';

// Math library snippets
const { abs } = Math;

// ZSCAL routine
const zscal = (n: FInteger, za: FDoubleComplex, zx: FDoubleComplexArray, incx: FInteger): FVoid => {
  // Copyright (c) 1992-2013 The University of Tennessee and The University of Tennessee Research Foundation. All rights reserved.
  // Copyright (c) 2000-2013 The University of California Berkeley. All rights reserved.
  // Copyright (c) 2006-2013 The University of Colorado Denver. All rights reserved.
  // Copyright (c) 2023      Nicholas Ng. All rights reserved.

  // Input
  const _n: I = new Integer(n);
  const _za: Z = new DoubleComplex(za);
  const _zx: ZA = new DoubleComplexArray(zx, 1 + (n - 1) * abs(incx));
  const _incx: I = new Integer(incx);

  // Output
  n = _n.get();
  za = _za.get();
  zx = _zx.getAll();
  incx = _incx.get();
};

// Export
export default zscal;
