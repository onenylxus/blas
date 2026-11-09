// Copyright (c) 1992-2013 The University of Tennessee and The University of Tennessee Research Foundation. All rights reserved.
// Copyright (c) 2000-2013 The University of California Berkeley. All rights reserved.
// Copyright (c) 2006-2013 The University of Colorado Denver. All rights reserved.
// Copyright (c) 2023-2026 Nicholas Ng. All rights reserved.

import { REAL } from '@f';

interface Input extends FParameters {
  sd1: FReal;
  sd2: FReal;
  sx1: FReal;
  sy1: FReal;
  sparam: FRealArray | FEmpty;
}

interface Output extends FParameters {
  _ret: FEmpty;
  sd1: FReal;
  sd2: FReal;
  sx1: FReal;
  sy1: FReal;
  sparam: FRealArray;
}

const srotmg = ({ sd1, sd2, sx1, sy1, sparam }: Input): Output => {
  const round = Math.fround;
  sd1 = REAL(sd1, 4).value;
  sd2 = REAL(sd2, 4).value;
  sx1 = REAL(sx1, 4).value;
  sy1 = REAL(sy1, 4).value;
  const param = REAL(
    [
      ...(sparam ?? []).slice(0, 5),
      ...Array<number>(Math.max(0, 5 - (sparam ?? []).length)).fill(0),
    ],
    4,
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

  if (sd1 < 0) {
    sd1 = 0;
    sd2 = 0;
    sx1 = 0;
  } else {
    p2 = round(sd2 * sy1);
    if (p2 === 0) {
      param.setElement(-2, 1);
      return {
        _ret: undefined,
        sd1,
        sd2,
        sx1,
        sy1,
        sparam: param.toColumnMajorArray(),
      };
    }
    p1 = round(sd1 * sx1);
    q2 = round(p2 * sy1);
    q1 = round(p1 * sx1);
    if (Math.abs(q1) > Math.abs(q2)) {
      h21 = round(-sy1 / sx1);
      h12 = round(p2 / p1);
      u = round(1 - h12 * h21);
      if (u > 0) {
        flag = 0;
        sd1 = round(sd1 / u);
        sd2 = round(sd2 / u);
        sx1 = round(sx1 * u);
      } else {
        h11 = 0;
        h12 = 0;
        h21 = 0;
        h22 = 0;
        sd1 = 0;
        sd2 = 0;
        sx1 = 0;
      }
    } else if (q2 < 0) {
      h11 = 0;
      h12 = 0;
      h21 = 0;
      h22 = 0;
      sd1 = 0;
      sd2 = 0;
      sx1 = 0;
    } else {
      flag = 1;
      h11 = round(p1 / p2);
      h22 = round(sx1 / sy1);
      u = round(1 + h11 * h22);
      temp = round(sd2 / u);
      sd2 = round(sd1 / u);
      sd1 = temp;
      sx1 = round(sy1 * u);
    }

    const gam = 4096;
    const gamsq = gam * gam;
    const rgamsq = 1 / gamsq;
    if (sd1 !== 0) {
      while (Number.isFinite(sd1) && (sd1 <= rgamsq || sd1 >= gamsq)) {
        if (flag === 0) {
          h11 = 1;
          h22 = 1;
        } else {
          h21 = -1;
          h12 = 1;
        }
        flag = -1;
        if (sd1 <= rgamsq) {
          sd1 = round(sd1 * gamsq);
          sx1 = round(sx1 / gam);
          h11 = round(h11 / gam);
          h12 = round(h12 / gam);
        } else {
          sd1 = round(sd1 / gamsq);
          sx1 = round(sx1 * gam);
          h11 = round(h11 * gam);
          h12 = round(h12 * gam);
        }
      }
    }
    if (sd2 !== 0) {
      while (
        Number.isFinite(sd2) &&
        (Math.abs(sd2) <= rgamsq || Math.abs(sd2) >= gamsq)
      ) {
        if (flag === 0) {
          h11 = 1;
          h22 = 1;
        } else {
          h21 = -1;
          h12 = 1;
        }
        flag = -1;
        if (Math.abs(sd2) <= rgamsq) {
          sd2 = round(sd2 * gamsq);
          h21 = round(h21 / gam);
          h22 = round(h22 / gam);
        } else {
          sd2 = round(sd2 / gamsq);
          h21 = round(h21 * gam);
          h22 = round(h22 * gam);
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
    sd1,
    sd2,
    sx1,
    sy1,
    sparam: param.toColumnMajorArray(),
  };
};

export default srotmg;
