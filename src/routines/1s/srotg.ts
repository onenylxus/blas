// Import
import { Single, S } from '../../types/single';
import { MAX_SP_INT, MIN_SP_INT } from '../../../utils/limit';

// Math library snippets
const { abs, sign, sqrt, max, min } = Math;

// SROTG routine
const srotg = (a: FReal, b: FReal, c: FReal | FEmpty, s: FReal | FEmpty): FVoid => {
  // Copyright (c) 1992-2013 The University of Tennessee and The University of Tennessee Research Foundation. All rights reserved.
  // Copyright (c) 2000-2013 The University of California Berkeley. All rights reserved.
  // Copyright (c) 2006-2013 The University of Colorado Denver. All rights reserved.
  // Copyright (c) 2023      Nicholas Ng. All rights reserved.

  // Scalar arguments
  const _a: S = new Single(a);
  const _b: S = new Single(b);
  const _c: S = new Single(c);
  const _s: S = new Single(s);

  // Resolve function
  const resolve = (): void => {
    a = _a.get();
    b = _b.get();
    c = _c.get();
    s = _s.get();
  };

  // Local scalars
  const anorm: S = new Single();
  const bnorm: S = new Single();
  const scl: S = new Single();
  const sigma: S = new Single();
  const r: S = new Single();
  const z: S = new Single();

  // Process
  anorm.set(abs(_a.get()));
  bnorm.set(abs(_b.get()));
  if (bnorm.eq(0)) {
    _c.set(1);
    _s.set(0);
    _b.set(0);
  } else if (anorm.eq(0)) {
    _c.set(0);
    _s.set(1);
    _a.set(_b.get());
    _b.set(1);
  } else {
    scl.set(min(MAX_SP_INT, max(MIN_SP_INT, anorm.get(), bnorm.get())));
    if (anorm.gt(bnorm.get())) {
      sigma.set(sign(anorm.get()));
    } else {
      sigma.set(sign(bnorm.get()));
    }
    r.set(sigma.get() * (scl.get() * sqrt((_a.get() / scl.get()) ** 2 + (_b.get() / scl.get()) ** 2)));
    _c.set(_a.get() / r.get());
    _s.set(_b.get() / r.get());
    if (anorm.gt(bnorm.get())) {
      z.set(_s.get());
    } else if (_c.ne(0)) {
      z.set(1 / _c.get());
    } else {
      z.set(1);
    }
    _a.set(r.get());
    _b.set(z.get());
  }
  return resolve();
};

// Export
export default srotg;
