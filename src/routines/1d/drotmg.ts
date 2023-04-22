// Import
import { Double, D } from '../../types/double';
import { DoubleArray, DA } from '../../types/doubleArray';

// DROTMG routine
const drotmg = (dd1: FDouble, dd2: FDouble, dx1: FDouble, dy1: FDouble, dparam: FDoubleArray | FEmpty): FVoid => {
  // Copyright (c) 1992-2013 The University of Tennessee and The University of Tennessee Research Foundation. All rights reserved.
  // Copyright (c) 2000-2013 The University of California Berkeley. All rights reserved.
  // Copyright (c) 2006-2013 The University of Colorado Denver. All rights reserved.
  // Copyright (c) 2023      Nicholas Ng. All rights reserved.

  // Input
  const _dd1: D = new Double(dd1);
  const _dd2: D = new Double(dd2);
  const _dx1: D = new Double(dx1);
  const _dy1: D = new Double(dy1);
  const _dparam: DA = new DoubleArray(dparam, 5);

  // Output
  dd1 = _dd1.get();
  dd2 = _dd2.get();
  dx1 = _dx1.get();
  dy1 = _dy1.get();
  dparam = _dparam.getAll();
};

// Export
export default drotmg;
