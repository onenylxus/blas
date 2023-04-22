// Import
import { Double, D } from '../../types/double';
import { DoubleArray, DA } from '../../types/doubleArray';
import { Integer, I } from '../../types/integer';

// Math library snippets
const { abs } = Math;

// DROT routine
const drot = (n: FInteger, dx: FDoubleArray, incx: FInteger, dy: FDoubleArray, incy: FInteger, c: FDouble, s: FDouble): FVoid => {
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
  const _c: D = new Double(c);
  const _s: D = new Double(s);

  // Output
  n = _n.get();
  dx = _dx.getAll();
  incx = _incx.get();
  dy = _dy.getAll();
  incy = _incy.get();
  c = _c.get();
  s = _s.get();
};

// Export
export default drot;
