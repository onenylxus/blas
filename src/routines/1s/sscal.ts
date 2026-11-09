// Copyright (c) 1992-2013 The University of Tennessee and The University of Tennessee Research Foundation. All rights reserved.
// Copyright (c) 2000-2013 The University of California Berkeley. All rights reserved.
// Copyright (c) 2006-2013 The University of Colorado Denver. All rights reserved.
// Copyright (c) 2023-2026 Nicholas Ng. All rights reserved.

import { fortranRealVector } from '@/utils/vector';

interface Input extends FParameters {
  n: FInteger;
  sa: FReal;
  sx: FRealArray;
  incx: FInteger;
}

interface Output extends FParameters {
  _ret: FEmpty;
  n: FInteger;
  sa: FReal;
  sx: FRealArray;
  incx: FInteger;
}

const sscal = ({ n, sa, sx, incx }: Input): Output => {
  n = Math.trunc(n);
  incx = Math.trunc(incx);
  const x = fortranRealVector(sx, n, incx, 4);
  const alpha = Math.fround(sa);
  const active = n > 0 && incx > 0 && alpha !== 1;
  if (active) {
    for (let i = 0; i < n; i += 1) {
      const index = 1 + i * incx;
      x.setElement(alpha * x.getElement(index).value, index);
    }
  }
  const length = active ? Math.max(sx.length, (n - 1) * incx + 1) : sx.length;
  return {
    _ret: undefined,
    n,
    sa: alpha,
    sx: x.toColumnMajorArray().slice(0, length),
    incx,
  };
};

export default sscal;
