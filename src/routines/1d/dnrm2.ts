// Import
import { Double, D } from '../../types/double';
import { DoubleArray, DA } from '../../types/doubleArray';
import { Integer, I } from '../../types/integer';

// Math library snippets
const { abs } = Math;

// DNRM2 routine
const dnrm2 = (n: FInteger, x: FDoubleArray, incx: FInteger): FDouble => {
  // Copyright (c) 1992-2013 The University of Tennessee and The University of Tennessee Research Foundation. All rights reserved.
  // Copyright (c) 2000-2013 The University of California Berkeley. All rights reserved.
  // Copyright (c) 2006-2013 The University of Colorado Denver. All rights reserved.
  // Copyright (c) 2023      Nicholas Ng. All rights reserved.

  // Input
  const _n: I = new Integer(n);
  const _x: DA = new DoubleArray(x, 1 + (n - 1) * abs(incx));
  const _incx: I = new Integer(incx);
  const _ret: D = new Double();

  // Output
  n = _n.get();
  x = _x.getAll();
  incx = _incx.get();
  return _ret.get();
};

// Export
export default dnrm2;
