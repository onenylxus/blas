// Copyright (c) 1992-2013 The University of Tennessee and The University of Tennessee Research Foundation. All rights reserved.
// Copyright (c) 2000-2013 The University of California Berkeley. All rights reserved.
// Copyright (c) 2006-2013 The University of Colorado Denver. All rights reserved.
// Copyright (c) 2023-2026 Nicholas Ng. All rights reserved.

import { fortranRealVector } from '@/utils/vector';

interface Input extends FParameters {
  n: FInteger;
  dx: FDoubleArray;
  incx: FInteger;
  dy: FDoubleArray;
  incy: FInteger;
  c: FDouble;
  s: FDouble;
}

interface Output extends Input {
  _ret: FEmpty;
}

const drot = ({ n, dx, incx, dy, incy, c, s }: Input): Output => {
  n = Math.trunc(n);
  incx = Math.trunc(incx);
  incy = Math.trunc(incy);

  const x = fortranRealVector(dx, n, incx, 8);
  const y = fortranRealVector(dy, n, incy, 8);
  let ix = incx < 0 ? (1 - n) * incx + 1 : 1;
  let iy = incy < 0 ? (1 - n) * incy + 1 : 1;
  for (let i = 0; i < n; i += 1) {
    const xv = x.getElement(ix).value;
    const yv = y.getElement(iy).value;
    x.setElement(c * xv + s * yv, ix);
    y.setElement(c * yv - s * xv, iy);
    ix += incx;
    iy += incy;
  }
  const xLength =
    n > 0 ? Math.max(dx.length, (n - 1) * Math.abs(incx) + 1) : dx.length;
  const yLength =
    n > 0 ? Math.max(dy.length, (n - 1) * Math.abs(incy) + 1) : dy.length;
  return {
    _ret: undefined,
    n,
    dx: x.toColumnMajorArray().slice(0, xLength),
    incx,
    dy: y.toColumnMajorArray().slice(0, yLength),
    incy,
    c,
    s,
  };
};

export default drot;
