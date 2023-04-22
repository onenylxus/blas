// Import
import { Double, D } from '../../types/double';
import { DoubleArray, DA } from '../../types/doubleArray';
import { Integer, I } from '../../types/integer';

// Math library snippets
const { abs } = Math;

// DDOT routine
const ddot = (n: FInteger, dx: FDoubleArray, incx: FInteger, dy: FDoubleArray, incy: FInteger): FDouble => {
  // Copyright (c) 1992-2013 The University of Tennessee and The University of Tennessee Research Foundation. All rights reserved.
  // Copyright (c) 2000-2013 The University of California Berkeley. All rights reserved.
  // Copyright (c) 2006-2013 The University of Colorado Denver. All rights reserved.
  // Copyright (c) 2023      Nicholas Ng. All rights reserved.

  // Input
  const _n: I = new Integer(n);
  const _dx: DA = new DoubleArray(dx, 1 + (n - 1) * abs(incx));
  const _incx: I = new Integer(incx);
  const _dy: DA = new DoubleArray(dy, 1 + (n - 1) * abs(incy));
  const _incy: I = new Integer(incy);
  const _ret: D = new Double();

  // Output
  n = _n.get();
  dx = _dx.getAll();
  incx = _incx.get();
  dy = _dy.getAll();
  incy = _incy.get();
  return _ret.get();
};

// Export
export default ddot;
