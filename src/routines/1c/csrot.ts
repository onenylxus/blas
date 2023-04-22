// Import
import { Integer, I } from '../../types/integer';
import { Single, S } from '../../types/single';
import { SingleComplexArray, CA } from '../../types/singleComplexArray';

// Math library snippets
const { abs } = Math;

// CSROT routine
const csrot = (n: FInteger, cx: FComplexArray, incx: FInteger, cy: FComplexArray, incy: FInteger, c: FReal, s: FReal): FVoid => {
  // Copyright (c) 1992-2013 The University of Tennessee and The University of Tennessee Research Foundation. All rights reserved.
  // Copyright (c) 2000-2013 The University of California Berkeley. All rights reserved.
  // Copyright (c) 2006-2013 The University of Colorado Denver. All rights reserved.
  // Copyright (c) 2023      Nicholas Ng. All rights reserved.

  // Input
  const _n: I = new Integer(n);
  const _cx: CA = new SingleComplexArray(cx, 1 + (n - 1) * abs(incx));
  const _incx: I = new Integer(incx);
  const _cy: CA = new SingleComplexArray(cy, 1 + (n - 1) * abs(incy));
  const _incy: I = new Integer(incy);
  const _c: S = new Single(c);
  const _s: S = new Single(s);

  // Output
  n = _n.get();
  cx = _cx.getAll();
  incx = _incx.get();
  cy = _cy.getAll();
  incy = _incy.get();
  c = _c.get();
  s = _s.get();
};

// Export
export default csrot;
