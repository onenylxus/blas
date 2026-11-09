import { fortranRealVector } from '@/utils/vector';

interface Input extends FParameters {
  n: FInteger;
  sx: FRealArray;
  incx: FInteger;
  sy: FRealArray;
  incy: FInteger;
}

interface Output extends FParameters {
  _ret: FReal;
  n: FInteger;
  sx: FRealArray;
  incx: FInteger;
  sy: FRealArray;
  incy: FInteger;
}

const sdot = ({ n, sx, incx, sy, incy }: Input): Output => {
  const x = fortranRealVector(sx, n, incx, 4);
  const y = fortranRealVector(sy, n, incy, 4);
  let result = 0;

  if (n > 0) {
    let ix = incx < 0 ? (1 - n) * incx + 1 : 1;
    let iy = incy < 0 ? (1 - n) * incy + 1 : 1;
    for (let i = 0; i < n; i += 1) {
      result = Math.fround(
        result + x.getElement(ix).value * y.getElement(iy).value,
      );
      ix += incx;
      iy += incy;
    }
  }

  return { _ret: result, n, sx: x.toColumnMajorArray().slice(0, sx.length), incx, sy: y.toColumnMajorArray().slice(0, sy.length), incy };
};

export default sdot;
// Copyright (c) 1992-2013 The University of Tennessee and The University of Tennessee Research Foundation. All rights reserved.
// Copyright (c) 2000-2013 The University of California Berkeley. All rights reserved.
// Copyright (c) 2006-2013 The University of Colorado Denver. All rights reserved.
// Copyright (c) 2023-2026 Nicholas Ng. All rights reserved.
