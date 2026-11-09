// Copyright (c) 1992-2013 The University of Tennessee and The University of Tennessee Research Foundation. All rights reserved.
// Copyright (c) 2000-2013 The University of California Berkeley. All rights reserved.
// Copyright (c) 2006-2013 The University of Colorado Denver. All rights reserved.
// Copyright (c) 2023-2026 Nicholas Ng. All rights reserved.

import { fortranComplexVector } from '@/utils/vector';

interface Input extends FParameters {
  n: FInteger;
  zx: FDoubleComplexArray;
  incx: FInteger;
}

interface Output extends FParameters {
  _ret: FInteger;
  n: FInteger;
  zx: FDoubleComplexArray;
  incx: FInteger;
}

const izamax = ({ n, zx, incx }: Input): Output => {
  n = Math.trunc(n);
  incx = Math.trunc(incx);
  const x = fortranComplexVector(zx, n, incx, 16);
  let result = 0;
  if (n > 0 && incx > 0) {
    result = 1;
    const first = x.getElement(1).value;
    let maximum = Math.abs(first.r) + Math.abs(first.i);
    for (let i = 1; i < n; i += 1) {
      const value = x.getElement(1 + i * incx).value;
      const magnitude = Math.abs(value.r) + Math.abs(value.i);
      if (magnitude > maximum) {
        maximum = magnitude;
        result = i + 1;
      }
    }
  }
  return {
    _ret: result,
    n,
    zx: x.toColumnMajorArray().slice(0, zx.length),
    incx,
  };
};

export default izamax;
