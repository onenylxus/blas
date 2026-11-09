// Copyright (c) 1992-2013 The University of Tennessee and The University of Tennessee Research Foundation. All rights reserved.
// Copyright (c) 2000-2013 The University of California Berkeley. All rights reserved.
// Copyright (c) 2006-2013 The University of Colorado Denver. All rights reserved.
// Copyright (c) 2023-2026 Nicholas Ng. All rights reserved.

import { fortranRealVector } from '@/utils/vector';

interface Input extends FParameters {
  n: FInteger;
  sx: FRealArray;
  incx: FInteger;
  sy: FRealArray;
  incy: FInteger;
}

interface Output extends FParameters {
  _ret: FEmpty;
  n: FInteger;
  sx: FRealArray;
  incx: FInteger;
  sy: FRealArray;
  incy: FInteger;
}

const sswap = ({ n, sx, incx, sy, incy }: Input): Output => {
  n = Math.trunc(n);
  incx = Math.trunc(incx);
  incy = Math.trunc(incy);
  const x = fortranRealVector(sx, n, incx, 4);
  const y = fortranRealVector(sy, n, incy, 4);
  let ix = incx < 0 ? (1 - n) * incx + 1 : 1;
  let iy = incy < 0 ? (1 - n) * incy + 1 : 1;
  for (let i = 0; i < n; i += 1) {
    const value = x.getElement(ix).value;
    x.setElement(y.getElement(iy).value, ix);
    y.setElement(value, iy);
    ix += incx;
    iy += incy;
  }
  const xLength =
    n > 0 ? Math.max(sx.length, (n - 1) * Math.abs(incx) + 1) : sx.length;
  const yLength =
    n > 0 ? Math.max(sy.length, (n - 1) * Math.abs(incy) + 1) : sy.length;
  return {
    _ret: undefined,
    n,
    sx: x.toColumnMajorArray().slice(0, xLength),
    incx,
    sy: y.toColumnMajorArray().slice(0, yLength),
    incy,
  };
};

export default sswap;
