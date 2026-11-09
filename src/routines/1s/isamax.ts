// Copyright (c) 1992-2013 The University of Tennessee and The University of Tennessee Research Foundation. All rights reserved.
// Copyright (c) 2000-2013 The University of California Berkeley. All rights reserved.
// Copyright (c) 2006-2013 The University of Colorado Denver. All rights reserved.
// Copyright (c) 2023-2026 Nicholas Ng. All rights reserved.

import { fortranRealVector } from '@/utils/vector';

interface Input extends FParameters {
  n: FInteger;
  sx: FRealArray;
  incx: FInteger;
}

interface Output extends FParameters {
  _ret: FInteger;
  n: FInteger;
  sx: FRealArray;
  incx: FInteger;
}

const isamax = ({ n, sx, incx }: Input): Output => {
  n = Math.trunc(n);
  incx = Math.trunc(incx);
  const x = fortranRealVector(sx, n, incx, 4);
  let result = 0;
  if (n > 0 && incx > 0) {
    result = 1;
    let maximum = Math.abs(x.getElement(1).value);
    for (let i = 1; i < n; i += 1) {
      const value = Math.abs(x.getElement(1 + i * incx).value);
      if (value > maximum) {
        maximum = value;
        result = i + 1;
      }
    }
  }
  return {
    _ret: result,
    n,
    sx: x.toColumnMajorArray().slice(0, sx.length),
    incx,
  };
};

export default isamax;
