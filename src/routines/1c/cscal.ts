// Copyright (c) 1992-2013 The University of Tennessee and The University of Tennessee Research Foundation. All rights reserved.
// Copyright (c) 2000-2013 The University of California Berkeley. All rights reserved.
// Copyright (c) 2006-2013 The University of Colorado Denver. All rights reserved.
// Copyright (c) 2023-2026 Nicholas Ng. All rights reserved.

import { fortranComplexVector } from '@/utils/vector';
import { CMPLX } from '@f';

interface Input extends FParameters {
  n: FInteger;
  ca: FComplex;
  cx: FComplexArray;
  incx: FInteger;
}

interface Output extends FParameters {
  _ret: FEmpty;
  n: FInteger;
  ca: FComplex;
  cx: FComplexArray;
  incx: FInteger;
}

const cscal = ({ n, ca, cx, incx }: Input): Output => {
  n = Math.trunc(n);
  incx = Math.trunc(incx);
  const alpha = CMPLX(ca, 8).value;
  const x = fortranComplexVector(cx, n, incx, 8);
  const active = n > 0 && incx > 0 && (alpha.r !== 1 || alpha.i !== 0);
  if (active) {
    let ix = 1;
    for (let i = 0; i < n; i += 1) {
      const xv = x.getElement(ix).value;
      x.setElement(
        {
          r: alpha.r * xv.r - alpha.i * xv.i,
          i: alpha.r * xv.i + alpha.i * xv.r,
        },
        ix,
      );
      ix += incx;
    }
  }
  return {
    _ret: undefined,
    n,
    ca: alpha,
    cx: x
      .toColumnMajorArray()
      .slice(
        0,
        active ? Math.max(cx.length, (n - 1) * Math.abs(incx) + 1) : cx.length,
      ),
    incx,
  };
};

export default cscal;
