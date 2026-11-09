// Copyright (c) 1992-2013 The University of Tennessee and The University of Tennessee Research Foundation. All rights reserved.
// Copyright (c) 2000-2013 The University of California Berkeley. All rights reserved.
// Copyright (c) 2006-2013 The University of Colorado Denver. All rights reserved.
// Copyright (c) 2023-2026 Nicholas Ng. All rights reserved.

import { REAL } from '@f';

interface Input extends FParameters {
  dd1: FDouble;
  dd2: FDouble;
  dx1: FDouble;
  dy1: FDouble;
  dparam: FDoubleArray | FEmpty;
}

interface Output extends FParameters {
  _ret: FEmpty;
  dd1: FDouble;
  dd2: FDouble;
  dx1: FDouble;
  dy1: FDouble;
  dparam: FDoubleArray;
}

const drotmg = ({ dd1, dd2, dx1, dy1, dparam }: Input): Output => {
  const param = REAL(
    [
      ...(dparam ?? []).slice(0, 5),
      ...Array<number>(Math.max(0, 5 - (dparam ?? []).length)).fill(0),
    ],
    8,
  );
  let flag = -1;
  let h11 = 0;
  let h12 = 0;
  let h21 = 0;
  let h22 = 0;
  let p1: number;
  let p2: number;
  let q1: number;
  let q2: number;
  let temp: number;
  let u: number;

  if (dd1 < 0) {
    dd1 = 0;
    dd2 = 0;
    dx1 = 0;
  } else {
    p2 = dd2 * dy1;
    if (p2 === 0) {
      param.setElement(-2, 1);
      return {
        _ret: undefined,
        dd1,
        dd2,
        dx1,
        dy1,
        dparam: param.toColumnMajorArray(),
      };
    }
    p1 = dd1 * dx1;
    q2 = p2 * dy1;
    q1 = p1 * dx1;
    if (Math.abs(q1) > Math.abs(q2)) {
      h21 = -dy1 / dx1;
      h12 = p2 / p1;
      u = 1 - h12 * h21;
      if (u > 0) {
        flag = 0;
        dd1 /= u;
        dd2 /= u;
        dx1 *= u;
      } else {
        h11 = 0;
        h12 = 0;
        h21 = 0;
        h22 = 0;
        dd1 = 0;
        dd2 = 0;
        dx1 = 0;
      }
    } else if (q2 < 0) {
      h11 = 0;
      h12 = 0;
      h21 = 0;
      h22 = 0;
      dd1 = 0;
      dd2 = 0;
      dx1 = 0;
    } else {
      flag = 1;
      h11 = p1 / p2;
      h22 = dx1 / dy1;
      u = 1 + h11 * h22;
      temp = dd2 / u;
      dd2 = dd1 / u;
      dd1 = temp;
      dx1 = dy1 * u;
    }

    const gam = 4096;
    const gamsq = gam * gam;
    const rgamsq = 1 / gamsq;
    if (dd1 !== 0) {
      while (Number.isFinite(dd1) && (dd1 <= rgamsq || dd1 >= gamsq)) {
        if (flag === 0) {
          h11 = 1;
          h22 = 1;
        } else {
          h21 = -1;
          h12 = 1;
        }
        flag = -1;
        if (dd1 <= rgamsq) {
          dd1 *= gamsq;
          dx1 /= gam;
          h11 /= gam;
          h12 /= gam;
        } else {
          dd1 /= gamsq;
          dx1 *= gam;
          h11 *= gam;
          h12 *= gam;
        }
      }
    }
    if (dd2 !== 0) {
      while (
        Number.isFinite(dd2) &&
        (Math.abs(dd2) <= rgamsq || Math.abs(dd2) >= gamsq)
      ) {
        if (flag === 0) {
          h11 = 1;
          h22 = 1;
        } else {
          h21 = -1;
          h12 = 1;
        }
        flag = -1;
        if (Math.abs(dd2) <= rgamsq) {
          dd2 *= gamsq;
          h21 /= gam;
          h22 /= gam;
        } else {
          dd2 /= gamsq;
          h21 *= gam;
          h22 *= gam;
        }
      }
    }
  }

  if (flag < 0) {
    param.setElement(h11, 2);
    param.setElement(h21, 3);
    param.setElement(h12, 4);
    param.setElement(h22, 5);
  } else if (flag === 0) {
    param.setElement(h21, 3);
    param.setElement(h12, 4);
  } else {
    param.setElement(h11, 2);
    param.setElement(h22, 5);
  }
  param.setElement(flag, 1);
  return {
    _ret: undefined,
    dd1,
    dd2,
    dx1,
    dy1,
    dparam: param.toColumnMajorArray(),
  };
};

export default drotmg;
