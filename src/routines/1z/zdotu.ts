// Import
import { DoubleComplex, Z } from '../../types/doubleComplex';
import { DoubleComplexArray, ZA } from '../../types/doubleComplexArray';
import { Integer, I } from '../../types/integer';

// Math library snippets
const { abs } = Math;

// ZDOTU routine
const zdotu = (n: FInteger, zx: FDoubleComplexArray, incx: FInteger, zy: FDoubleComplexArray, incy: FInteger): FDoubleComplex => {
  // Copyright (c) 1992-2013 The University of Tennessee and The University of Tennessee Research Foundation. All rights reserved.
  // Copyright (c) 2000-2013 The University of California Berkeley. All rights reserved.
  // Copyright (c) 2006-2013 The University of Colorado Denver. All rights reserved.
  // Copyright (c) 2023      Nicholas Ng. All rights reserved.

  // Input
  const _n = new Integer(n);
  const _zx = new DoubleComplexArray(zx, 1 + (n - 1) * abs(incx));
  const _incx = new Integer(incx);
  const _zy = new DoubleComplexArray(zy, 1 + (n - 1) * abs(incy));
  const _incy = new Integer(incy);
  const _ret = new DoubleComplex();

  // Output
  n = _n.get();
  zx = _zx.getAll();
  incx = _incx.get();
  zy = _zy.getAll();
  incy = _incy.get();
  return _ret.get();
};

// Export
export default zdotu;
