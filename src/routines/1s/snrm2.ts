// Copyright (c) 1992-2013 The University of Tennessee and The University of Tennessee Research Foundation. All rights reserved.
// Copyright (c) 2000-2013 The University of California Berkeley. All rights reserved.
// Copyright (c) 2006-2013 The University of Colorado Denver. All rights reserved.
// Copyright (c) 2023-2026 Nicholas Ng. All rights reserved.

import { fortranRealVector } from '@/utils/vector';

interface Input extends FParameters {
  n: FInteger;
  x: FRealArray;
  incx: FInteger;
}

interface Output extends FParameters {
  _ret: FReal;
  n: FInteger;
  x: FRealArray;
  incx: FInteger;
}

const snrm2 = ({ n, x, incx }: Input): Output => {
  n = Math.trunc(n);
  incx = Math.trunc(incx);
  const values = fortranRealVector(x, n, incx, 4);
  let result = 0;
  let index = incx < 0 ? (1 - n) * incx + 1 : 1;
  for (let i = 0; i < n; i += 1) {
    const value = values.getElement(index).value;
    result = Math.hypot(result, value);
    index += incx;
  }
  return {
    _ret: Math.fround(result),
    n,
    x: values.toColumnMajorArray().slice(0, x.length),
    incx,
  };
};

export default snrm2;
