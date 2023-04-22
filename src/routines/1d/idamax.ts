// Import
import { DoubleArray, DA } from '../../types/doubleArray';
import { Integer, I } from '../../types/integer';

// Math library snippets
const { abs } = Math;

// IDAMAX routine
const idamax = (n: FInteger, dx: FDoubleArray, incx: FInteger): FInteger => {
  // Copyright (c) 1992-2013 The University of Tennessee and The University of Tennessee Research Foundation. All rights reserved.
  // Copyright (c) 2000-2013 The University of California Berkeley. All rights reserved.
  // Copyright (c) 2006-2013 The University of Colorado Denver. All rights reserved.
  // Copyright (c) 2023      Nicholas Ng. All rights reserved.

  // Input
  const _n: I = new Integer(n);
  const _dx: DA = new DoubleArray(dx, 1 + (n - 1) * abs(incx));
  const _incx: I = new Integer(incx);
  const _ret: I = new Integer();

  // Output
  n = _n.get();
  dx = _dx.getAll();
  incx = _incx.get();
  return _ret.get();
};

// Export
export default idamax;
