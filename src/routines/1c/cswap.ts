// Copyright (c) 1992-2013 The University of Tennessee and The University of Tennessee Research Foundation. All rights reserved.
// Copyright (c) 2000-2013 The University of California Berkeley. All rights reserved.
// Copyright (c) 2006-2013 The University of Colorado Denver. All rights reserved.
// Copyright (c) 2023-2026 Nicholas Ng. All rights reserved.

import { fortranComplexVector } from '@/utils/vector';

interface Input extends FParameters {
  n: FInteger;
  cx: FComplexArray;
  incx: FInteger;
  cy: FComplexArray;
  incy: FInteger;
}

interface Output extends FParameters {
  _ret: FEmpty;
  n: FInteger;
  cx: FComplexArray;
  incx: FInteger;
  cy: FComplexArray;
  incy: FInteger;
}

const cswap = ({ n, cx, incx, cy, incy }: Input): Output => {
  n = Math.trunc(n);
  incx = Math.trunc(incx);
  incy = Math.trunc(incy);
  const x = fortranComplexVector(cx, n, incx, 8);
  const y = fortranComplexVector(cy, n, incy, 8);
  const active = n > 0;
  if (active) {
    let ix = incx < 0 ? (1 - n) * incx + 1 : 1;
    let iy = incy < 0 ? (1 - n) * incy + 1 : 1;
    for (let i = 0; i < n; i += 1) {
      const xv = x.getElement(ix).value;
      const yv = y.getElement(iy).value;
      x.setElement(yv, ix);
      y.setElement(xv, iy);
      ix += incx;
      iy += incy;
    }
  }
  return {
    _ret: undefined,
    n,
    cx: x
      .toColumnMajorArray()
      .slice(
        0,
        active ? Math.max(cx.length, (n - 1) * Math.abs(incx) + 1) : cx.length,
      ),
    incx,
    cy: y
      .toColumnMajorArray()
      .slice(
        0,
        active ? Math.max(cy.length, (n - 1) * Math.abs(incy) + 1) : cy.length,
      ),
    incy,
  };
};

export default cswap;
