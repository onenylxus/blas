// Import
import { Integer, I } from '../../types/integer';
import { Single, S } from '../../types/single';
import { SingleComplexArray, CA } from '../../types/singleComplexArray';

// Math library snippets
const { abs } = Math;

// CSSCAL routine
const csscal = (n: FInteger, sa: FReal, cx: FComplexArray, incx: FInteger): FVoid => {
  // Copyright (c) 1992-2013 The University of Tennessee and The University of Tennessee Research Foundation. All rights reserved.
  // Copyright (c) 2000-2013 The University of California Berkeley. All rights reserved.
  // Copyright (c) 2006-2013 The University of Colorado Denver. All rights reserved.
  // Copyright (c) 2023      Nicholas Ng. All rights reserved.

  // Input
  const _n: I = new Integer(n);
  const _sa: S = new Single(sa);
  const _cx: CA = new SingleComplexArray(cx);
  const _incx: I = new Integer(incx);

  // Output
  n = _n.get();
  sa = _sa.get();
  cx = _cx.getAll();
  incx = _incx.get();
};

// Export
export default csscal;
