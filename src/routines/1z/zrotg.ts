// Import
import { Double, D } from '../../types/double';
import { DoubleComplex, Z } from '../../types/doubleComplex';

// ZROTG routine
const zrotg = (a: FDoubleComplex, b: FDoubleComplex, c: FDouble | FEmpty, s: FDoubleComplex | FEmpty): FVoid => {
  // Copyright (c) 1992-2013 The University of Tennessee and The University of Tennessee Research Foundation. All rights reserved.
  // Copyright (c) 2000-2013 The University of California Berkeley. All rights reserved.
  // Copyright (c) 2006-2013 The University of Colorado Denver. All rights reserved.
  // Copyright (c) 2023      Nicholas Ng. All rights reserved.

  // Input
  const _a: Z = new DoubleComplex(a);
  const _b: Z = new DoubleComplex(b);
  const _c: D = new Double(c);
  const _s: Z = new DoubleComplex(s);

  // Output
  a = _a.get();
  b = _b.get();
  c = _c.get();
  s = _s.get();
};

// Export
export default zrotg;
