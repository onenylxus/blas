// Copyright (c) 1992-2013 The University of Tennessee and The University of Tennessee Research Foundation. All rights reserved.
// Copyright (c) 2000-2013 The University of California Berkeley. All rights reserved.
// Copyright (c) 2006-2013 The University of Colorado Denver. All rights reserved.
// Copyright (c) 2023-2026 Nicholas Ng. All rights reserved.

import { fortranComplexVector } from '@/utils/vector';

interface Input extends FParameters {
  n: FInteger;
  x: FDoubleComplexArray;
  incx: FInteger;
}

interface Output extends FParameters {
  _ret: FDouble;
  n: FInteger;
  x: FDoubleComplexArray;
  incx: FInteger;
}

const dznrm2 = ({ n, x, incx }: Input): Output => {
  n = Math.trunc(n);
  incx = Math.trunc(incx);
  const values = fortranComplexVector(x, n, incx, 16);
  let result = 0;
  let sum = 0;
  let direct = true;
  let index = incx < 0 ? (1 - n) * incx + 1 : 1;
  for (let i = 0; i < n; i += 1) {
    const value = values.getElement(index).value;
    result = Math.hypot(result, value.r, value.i);
    for (const component of [value.r, value.i]) {
      const square = component * component;
      sum += square;
      if (!Number.isFinite(sum) || (component !== 0 && square < 2 ** -1022)) {
        direct = false;
      }
    }
    index += incx;
  }
  return {
    _ret: direct ? Math.sqrt(sum) : result,
    n,
    x: values.toColumnMajorArray().slice(0, x.length),
    incx,
  };
};

export default dznrm2;
