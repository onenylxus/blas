import { fortranRealVector } from '@/utils/vector';

interface Input extends FParameters {
  n: FInteger;
  x: FDoubleArray;
  incx: FInteger;
}

interface Output extends FParameters {
  _ret: FDouble;
  n: FInteger;
  x: FDoubleArray;
  incx: FInteger;
}

const dnrm2 = ({ n, x, incx }: Input): Output => {
  const values = fortranRealVector(x, n, incx);
  let scale = 0;
  let sumSquares = 1;

  if (n > 0) {
    let index = incx < 0 ? (1 - n) * incx + 1 : 1;
    for (let i = 0; i < n; i += 1) {
      const value = Math.abs(values.getElement(index).value);
      if (value !== 0) {
        if (scale < value) {
          sumSquares = 1 + sumSquares * (scale / value) ** 2;
          scale = value;
        } else {
          sumSquares += (value / scale) ** 2;
        }
      }
      index += incx;
    }
  }

  return { _ret: scale * Math.sqrt(sumSquares), n, x: x.slice(), incx };
};

export default dnrm2;
// Copyright (c) 1992-2013 The University of Tennessee and The University of Tennessee Research Foundation. All rights reserved.
// Copyright (c) 2000-2013 The University of California Berkeley. All rights reserved.
// Copyright (c) 2006-2013 The University of Colorado Denver. All rights reserved.
// Copyright (c) 2023-2026 Nicholas Ng. All rights reserved.
