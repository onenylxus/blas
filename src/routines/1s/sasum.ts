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
  _ret: FReal;
  n: FInteger;
  sx: FRealArray;
  incx: FInteger;
}

const sasum = ({ n, sx, incx }: Input): Output => {
  n = Math.trunc(n);
  incx = Math.trunc(incx);
  const x = fortranRealVector(sx, n, incx, 4);
  let result = 0;
  if (n > 0 && incx > 0) {
    if (incx === 1) {
      const remainder = n % 6;
      for (let i = 1; i <= remainder; i += 1) {
        result = Math.fround(result + Math.abs(x.getElement(i).value));
      }
      for (let i = remainder + 1; i <= n; i += 6) {
        let block = 0;
        for (let j = 0; j < 6; j += 1)
          block += Math.abs(x.getElement(i + j).value);
        result = Math.fround(result + block);
      }
    } else {
      for (let i = 1; i <= (n - 1) * incx + 1; i += incx) {
        result = Math.fround(result + Math.abs(x.getElement(i).value));
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

export default sasum;
