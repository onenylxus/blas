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
  sparam: FRealArray;
}

interface Output extends Input {
  _ret: FEmpty;
}

const srotm = ({ n, sx, incx, sy, incy, sparam }: Input): Output => {
  n = Math.trunc(n);
  incx = Math.trunc(incx);
  incy = Math.trunc(incy);
  const x = fortranRealVector(sx, n, incx, 4);
  const y = fortranRealVector(sy, n, incy, 4);
  const p = fortranRealVector(sparam.slice(0, 5), 5, 1, 4);
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
    ? Math.max(sx.length, (n - 1) * Math.abs(incx) + 1)
    : sx.length;
  const yLength = active
    ? Math.max(sy.length, (n - 1) * Math.abs(incy) + 1)
    : sy.length;
  return {
    _ret: undefined,
    n,
    sx: x.toColumnMajorArray().slice(0, xLength),
    incx,
    sy: y.toColumnMajorArray().slice(0, yLength),
    incy,
    sparam: p.toColumnMajorArray().slice(0, 5),
  };
};

export default srotm;
