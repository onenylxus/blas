import { fortranRealVector } from '@/utils/vector';

interface Input extends FParameters {
  n: FInteger;
  dx: FDoubleArray;
  incx: FInteger;
  dy: FDoubleArray;
  incy: FInteger;
}

interface Output extends FParameters {
  _ret: FEmpty;
  n: FInteger;
  dx: FDoubleArray;
  incx: FInteger;
  dy: FDoubleArray;
  incy: FInteger;
}

const dswap = ({ n, dx, incx, dy, incy }: Input): Output => {
  const x = fortranRealVector(dx, n, incx);
  const y = fortranRealVector(dy, n, incy);

  if (n > 0) {
    let ix = incx < 0 ? (1 - n) * incx + 1 : 1;
    let iy = incy < 0 ? (1 - n) * incy + 1 : 1;

    for (let i = 0; i < n; i += 1) {
      const value = x.getElement(ix).value;
      x.setElement(y.getElement(iy).value, ix);
      y.setElement(value, iy);
      ix += incx;
      iy += incy;
    }
  }

  const requiredX = n > 0 ? (n - 1) * Math.abs(incx) + 1 : dx.length;
  const requiredY = n > 0 ? (n - 1) * Math.abs(incy) + 1 : dy.length;
  return {
    _ret: undefined,
    n,
    dx: x.toColumnMajorArray().slice(0, Math.max(dx.length, requiredX)),
    incx,
    dy: y.toColumnMajorArray().slice(0, Math.max(dy.length, requiredY)),
    incy,
  };
};

export default dswap;
// Copyright (c) 1992-2013 The University of Tennessee and The University of Tennessee Research Foundation. All rights reserved.
// Copyright (c) 2000-2013 The University of California Berkeley. All rights reserved.
// Copyright (c) 2006-2013 The University of Colorado Denver. All rights reserved.
// Copyright (c) 2023-2026 Nicholas Ng. All rights reserved.
