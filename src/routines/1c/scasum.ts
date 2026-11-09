// Copyright (c) 1992-2013 The University of Tennessee and The University of Tennessee Research Foundation. All rights reserved.
// Copyright (c) 2000-2013 The University of California Berkeley. All rights reserved.
// Copyright (c) 2006-2013 The University of Colorado Denver. All rights reserved.
// Copyright (c) 2023-2026 Nicholas Ng. All rights reserved.

import { fortranComplexVector } from '@/utils/vector';

interface Input extends FParameters {
  n: FInteger;
  cx: FComplexArray;
  incx: FInteger;
}

interface Output extends FParameters {
  _ret: FReal;
  n: FInteger;
  cx: FComplexArray;
  incx: FInteger;
}

const scasum = ({ n, cx, incx }: Input): Output => {
  n = Math.trunc(n);
  incx = Math.trunc(incx);
  const x = fortranComplexVector(cx, n, incx, 8);
  let result = 0;
  if (n > 0 && incx > 0) {
    for (let i = 0; i < n; i += 1) {
      const value = x.getElement(1 + i * incx).value;
      result = Math.fround(result + (Math.abs(value.r) + Math.abs(value.i)));
    }
  }
  return {
    _ret: result,
    n,
    cx: x.toColumnMajorArray().slice(0, cx.length),
    incx,
  };
};

export default scasum;
