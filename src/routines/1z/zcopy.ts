// Copyright (c) 1992-2013 The University of Tennessee and The University of Tennessee Research Foundation. All rights reserved.
// Copyright (c) 2000-2013 The University of California Berkeley. All rights reserved.
// Copyright (c) 2006-2013 The University of Colorado Denver. All rights reserved.
// Copyright (c) 2023-2026 Nicholas Ng. All rights reserved.

import { fortranComplexVector } from '@/utils/vector';

interface Input extends FParameters {
  n: FInteger;
  zx: FDoubleComplexArray;
  incx: FInteger;
  zy: FDoubleComplexArray | FEmpty;
  incy: FInteger;
}

interface Output extends FParameters {
  _ret: FEmpty;
  n: FInteger;
  zx: FDoubleComplexArray;
  incx: FInteger;
  zy: FDoubleComplexArray;
  incy: FInteger;
}

const zcopy = ({ n, zx, incx, zy, incy }: Input): Output => {
  n = Math.trunc(n);
  incx = Math.trunc(incx);
  incy = Math.trunc(incy);
  const x = fortranComplexVector(zx, n, incx, 16);
  const y = fortranComplexVector(zy ?? [], n, incy, 16);
  const active = n > 0;
  if (active) {
    let ix = incx < 0 ? (1 - n) * incx + 1 : 1;
    let iy = incy < 0 ? (1 - n) * incy + 1 : 1;
    for (let i = 0; i < n; i += 1) {
      const xv = x.getElement(ix).value;
      y.setElement(xv, iy);
      ix += incx;
      iy += incy;
    }
  }
  return {
    _ret: undefined,
    n,
    zx: x.toColumnMajorArray().slice(0, zx.length),
    incx,
    zy: y
      .toColumnMajorArray()
      .slice(
        0,
        active
          ? Math.max((zy ?? []).length, (n - 1) * Math.abs(incy) + 1)
          : (zy ?? []).length,
      ),
    incy,
  };
};

export default zcopy;
