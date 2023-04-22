// Import
import { Integer, I } from '../../types/integer';
import { SingleArray, SA } from '../../types/singleArray';

// Math library snippets
const { abs } = Math;

// SCOPY routine
const scopy = (n: FInteger, sx: FRealArray, incx: FInteger, sy: FRealArray | FEmpty, incy: FInteger): FVoid => {
  // Copyright (c) 1992-2013 The University of Tennessee and The University of Tennessee Research Foundation. All rights reserved.
  // Copyright (c) 2000-2013 The University of California Berkeley. All rights reserved.
  // Copyright (c) 2006-2013 The University of Colorado Denver. All rights reserved.
  // Copyright (c) 2023      Nicholas Ng. All rights reserved.

  // Input
  const _n: I = new Integer(n);
  const _sx: SA = new SingleArray(sx, 1 + (n - 1) * abs(incx));
  const _incx: I = new Integer(incx);
  const _sy: SA = new SingleArray(sy, 1 + (n - 1) * abs(incy));
  const _incy: I = new Integer(incy);

  // Output
  n = _n.get();
  sx = _sx.getAll();
  incx = _incx.get();
  sy = _sy.getAll();
  incy = _incy.get();
};

// Export
export default scopy;
