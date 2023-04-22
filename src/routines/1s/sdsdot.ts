// Import
import { Integer, I } from '../../types/integer';
import { Single, S } from '../../types/single';
import { SingleArray, SA } from '../../types/singleArray';

// Math library snippets
const { abs } = Math;

// SDSDOT routine
const sdsdot = (n: FInteger, sb: FReal, sx: FRealArray, incx: FInteger, sy: FRealArray, incy: FInteger): FReal => {
  // Copyright (c) 1992-2013 The University of Tennessee and The University of Tennessee Research Foundation. All rights reserved.
  // Copyright (c) 2000-2013 The University of California Berkeley. All rights reserved.
  // Copyright (c) 2006-2013 The University of Colorado Denver. All rights reserved.
  // Copyright (c) 2023      Nicholas Ng. All rights reserved.

  // Input
  const _n: I = new Integer(n);
  const _sb: S = new Single(sb);
  const _sx: SA = new SingleArray(sx, 1 + (n - 1) * abs(incx));
  const _incx: I = new Integer(incx);
  const _sy: SA = new SingleArray(sy, 1 + (n - 1) * abs(incy));
  const _incy: I = new Integer(incy);
  const _ret: S = new Single();

  // Output
  n = _n.get();
  sb = _sb.get();
  sx = _sx.getAll();
  incx = _incx.get();
  sy = _sy.getAll();
  incy = _incy.get();
  return _ret.get();
};

// Export
export default sdsdot;
