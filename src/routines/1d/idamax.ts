import { fortranRealVector } from '@/utils/vector';

interface Input extends FParameters {
  n: FInteger;
  dx: FDoubleArray;
  incx: FInteger;
}

interface Output extends FParameters {
  _ret: FInteger;
  n: FInteger;
  dx: FDoubleArray;
  incx: FInteger;
}

const idamax = ({ n, dx, incx }: Input): Output => {
  const values = fortranRealVector(dx, n, incx);
  let result = 0;

  if (n > 0 && incx > 0) {
    result = 1;
    let index = 1;
    let maximum = Math.abs(values.getElement(index).value);
    for (let i = 2; i <= n; i += 1) {
      index += incx;
      const value = Math.abs(values.getElement(index).value);
      if (value > maximum) {
        result = i;
        maximum = value;
      }
    }
  }

  return { _ret: result, n, dx: dx.slice(), incx };
};

export default idamax;
// Copyright (c) 1992-2013 The University of Tennessee and The University of Tennessee Research Foundation. All rights reserved.
// Copyright (c) 2000-2013 The University of California Berkeley. All rights reserved.
// Copyright (c) 2006-2013 The University of Colorado Denver. All rights reserved.
// Copyright (c) 2023-2026 Nicholas Ng. All rights reserved.
