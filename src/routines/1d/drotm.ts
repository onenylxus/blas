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
  dparam: FDoubleArray;
}

interface Output extends Input {
  _ret: FEmpty;
}

const drotm = ({ n, dx, incx, dy, incy, dparam }: Input): Output => {
  n = Math.trunc(n);
  incx = Math.trunc(incx);
  incy = Math.trunc(incy);
  const x = fortranRealVector(dx, n, incx, 8);
  const y = fortranRealVector(dy, n, incy, 8);
  const p = fortranRealVector(dparam.slice(0, 5), 5, 1, 8);
  const flag = p.getElement(1).value;
  const active = n > 0 && flag !== -2;
  if (active) {
    const h11 = p.getElement(2).value;
    const h21 = p.getElement(3).value;
    const h12 = p.getElement(4).value;
    const h22 = p.getElement(5).value;
    let ix = incx < 0 ? (1 - n) * incx + 1 : 1;
    let iy = incy < 0 ? (1 - n) * incy + 1 : 1;
    for (let i = 0; i < n; i += 1) {
      const w = x.getElement(ix).value;
      const z = y.getElement(iy).value;
      if (flag < 0) {
        x.setElement(w * h11 + z * h12, ix);
        y.setElement(w * h21 + z * h22, iy);
      } else if (flag === 0) {
        x.setElement(w + z * h12, ix);
        y.setElement(w * h21 + z, iy);
      } else {
        x.setElement(w * h11 + z, ix);
        y.setElement(-w + z * h22, iy);
      }
      ix += incx;
      iy += incy;
    }
  }
  const xLength = active
    ? Math.max(dx.length, (n - 1) * Math.abs(incx) + 1)
    : dx.length;
  const yLength = active
    ? Math.max(dy.length, (n - 1) * Math.abs(incy) + 1)
    : dy.length;
  return {
    _ret: undefined,
    n,
    dx: x.toColumnMajorArray().slice(0, xLength),
    incx,
    dy: y.toColumnMajorArray().slice(0, yLength),
    incy,
    dparam: p.toColumnMajorArray().slice(0, 5),
  };
};

export default drotm;
