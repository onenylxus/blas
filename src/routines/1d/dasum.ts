import { fortranRealVector } from '@/utils/vector';

interface Input extends FParameters {
  n: FInteger;
  dx: FDoubleArray;
  incx: FInteger;
}

interface Output extends FParameters {
  _ret: FReal;
  n: FInteger;
  dx: FDoubleArray;
  incx: FInteger;
}

const dasum = ({ n, dx, incx }: Input): Output => {
  const values = fortranRealVector(dx, n, incx);
  let result = 0;

  if (n > 0 && incx > 0) {
    let index = 1;
    for (let i = 0; i < n; i += 1) {
      result += Math.abs(values.getElement(index).value);
      index += incx;
    }
  }

  return { _ret: result, n, dx: dx.slice(), incx };
};

export default dasum;
// Copyright (c) 1992-2013 The University of Tennessee and The University of Tennessee Research Foundation. All rights reserved.
// Copyright (c) 2000-2013 The University of California Berkeley. All rights reserved.
// Copyright (c) 2006-2013 The University of Colorado Denver. All rights reserved.
// Copyright (c) 2023-2026 Nicholas Ng. All rights reserved.
