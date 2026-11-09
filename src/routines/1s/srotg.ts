// Copyright (c) 1992-2013 The University of Tennessee and The University of Tennessee Research Foundation. All rights reserved.
// Copyright (c) 2000-2013 The University of California Berkeley. All rights reserved.
// Copyright (c) 2006-2013 The University of Colorado Denver. All rights reserved.
// Copyright (c) 2023-2026 Nicholas Ng. All rights reserved.

import { REAL } from '@f';

interface Input extends FParameters {
  a: FReal;
  b: FReal;
  c: FReal | FEmpty;
  s: FReal | FEmpty;
}

interface Output extends FParameters {
  _ret: FEmpty;
  a: FReal;
  b: FReal;
  c: FReal;
  s: FReal;
}

const srotg = ({ a, b }: Input): Output => {
  const round = Math.fround;
  a = REAL(a, 4).value;
  b = REAL(b, 4).value;
  const anorm = Math.abs(a);
  const bnorm = Math.abs(b);
  let c: number;
  let s: number;
  if (bnorm === 0) {
    c = 1;
    s = 0;
    b = 0;
  } else if (anorm === 0) {
    c = 0;
    s = 1;
    a = b;
    b = 1;
  } else {
    const scale = round(Math.min(2 ** 31 - 1, Math.max(anorm, bnorm)));
    const sigma = anorm > bnorm ? Math.sign(a) : Math.sign(b);
    const r = round(
      sigma * (scale * Math.sqrt((a / scale) ** 2 + (b / scale) ** 2)),
    );
    c = round(a / r);
    s = round(b / r);
    const z = anorm > bnorm ? s : c !== 0 ? round(1 / c) : 1;
    a = r;
    b = z;
  }
  return { _ret: undefined, a, b, c, s };
};

export default srotg;
