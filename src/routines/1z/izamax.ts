// Import
import { DoubleComplexArray, ZA } from '../../types/doubleComplexArray';
import { Integer, I } from '../../types/integer';

// Math library snippets
const { abs } = Math;

// IZAMAX routine
const izamax = (n: FInteger, zx: FDoubleComplexArray, incx: FInteger): FInteger => {
  // Copyright (c) 1992-2013 The University of Tennessee and The University of Tennessee Research Foundation. All rights reserved.
  // Copyright (c) 2000-2013 The University of California Berkeley. All rights reserved.
  // Copyright (c) 2006-2013 The University of Colorado Denver. All rights reserved.
  // Copyright (c) 2023      Nicholas Ng. All rights reserved.

  // Input
  const _n: I = new Integer(n);
  const _zx: ZA = new DoubleComplexArray(zx, 1 + (n - 1) * abs(incx));
  const _incx: I = new Integer(incx);
  const _ret: I = new Integer();

  // Output
  n = _n.get();
  zx = _zx.getAll();
  incx = _incx.get();
  return _ret.get();
};

// Export
export default izamax;
