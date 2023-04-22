// Import
import { Double, D } from '../../types/double';
import { DoubleArray, DA } from '../../types/doubleArray';
import { Integer, I } from '../../types/integer';

// DSCAL routine
const dscal = (n: FInteger, da: FDouble, dx: FDoubleArray, incx: FInteger): FVoid => {
  // Copyright (c) 1992-2013 The University of Tennessee and The University of Tennessee Research Foundation. All rights reserved.
  // Copyright (c) 2000-2013 The University of California Berkeley. All rights reserved.
  // Copyright (c) 2006-2013 The University of Colorado Denver. All rights reserved.
  // Copyright (c) 2023      Nicholas Ng. All rights reserved.

  // Input
  const _n: I = new Integer(n);
  const _da: D = new Double(da);
  const _dx: DA = new DoubleArray(dx);
  const _incx: I = new Integer(incx);

  // Output
  n = _n.get();
  da = _da.get();
  dx = _dx.getAll();
  incx = _incx.get();
};

// Export
export default dscal;
