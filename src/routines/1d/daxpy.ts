import { fortranRealVector } from '@/utils/vector';

interface Input extends FParameters {
  n: FInteger;
  da: FDouble;
  dx: FDoubleArray;
  incx: FInteger;
  dy: FDoubleArray;
  incy: FInteger;
}

interface Output extends FParameters {
  _ret: FEmpty;
  n: FInteger;
  da: FDouble;
  dx: FDoubleArray;
  incx: FInteger;
  dy: FDoubleArray;
  incy: FInteger;
}

const daxpy = ({ n, da, dx, incx, dy, incy }: Input): Output => {
  const x = fortranRealVector(dx, n, incx);
  const y = fortranRealVector(dy, n, incy);
  const alpha = da;

  const active = n > 0 && alpha !== 0;
  if (active) {
    let ix = incx < 0 ? (1 - n) * incx + 1 : 1;
    let iy = incy < 0 ? (1 - n) * incy + 1 : 1;

    for (let i = 0; i < n; i += 1) {
      y.setElement(y.getElement(iy).value + alpha * x.getElement(ix).value, iy);
      ix += incx;
      iy += incy;
    }
  }

  return {
    _ret: undefined,
    n,
    da,
    dx: dx.slice(),
    incx,
    dy: active
      ? y.toColumnMajorArray().slice(
          0,
          Math.max(dy.length, (n - 1) * Math.abs(incy) + 1),
        )
      : dy.slice(),
    incy,
  };
};

export default daxpy;
// Copyright (c) 1992-2013 The University of Tennessee and The University of Tennessee Research Foundation. All rights reserved.
// Copyright (c) 2000-2013 The University of California Berkeley. All rights reserved.
// Copyright (c) 2006-2013 The University of Colorado Denver. All rights reserved.
// Copyright (c) 2023-2026 Nicholas Ng. All rights reserved.
