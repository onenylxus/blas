import { fortranRealVector } from '@/utils/vector';

interface Input extends FParameters {
  n: FInteger;
  da: FDouble;
  dx: FDoubleArray;
  incx: FInteger;
}

interface Output extends FParameters {
  _ret: FEmpty;
  n: FInteger;
  da: FDouble;
  dx: FDoubleArray;
  incx: FInteger;
}

const dscal = ({ n, da, dx, incx }: Input): Output => {
  const values = fortranRealVector(dx, n, incx);
  if (n > 0 && incx > 0 && da !== 1) {
    let index = 1;
    for (let i = 0; i < n; i += 1) {
      values.setElement(da * values.getElement(index).value, index);
      index += incx;
    }
  }

  return {
    _ret: undefined,
    n,
    da,
    dx:
      n > 0 && incx > 0 && da !== 1
        ? values
            .toColumnMajorArray()
            .slice(0, Math.max(dx.length, (n - 1) * incx + 1))
        : dx.slice(),
    incx,
  };
};

export default dscal;
// Copyright (c) 1992-2013 The University of Tennessee and The University of Tennessee Research Foundation. All rights reserved.
// Copyright (c) 2000-2013 The University of California Berkeley. All rights reserved.
// Copyright (c) 2006-2013 The University of Colorado Denver. All rights reserved.
// Copyright (c) 2023-2026 Nicholas Ng. All rights reserved.
