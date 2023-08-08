// Import
import { Double, D } from '../../types/double';
import { MAXDPINT, MINDPINT } from '../../../utils/constants';

// Math library snippets
const { abs, sign, sqrt, max, min } = Math;

// DROTG routine
const drotg = (a: FDouble, b: FDouble, c: FDouble | FEmpty, s: FDouble | FEmpty): FVoid => {
  // Copyright (c) 1992-2013 The University of Tennessee and The University of Tennessee Research Foundation. All rights reserved.
  // Copyright (c) 2000-2013 The University of California Berkeley. All rights reserved.
  // Copyright (c) 2006-2013 The University of Colorado Denver. All rights reserved.
  // Copyright (c) 2023      Nicholas Ng. All rights reserved.

  // Arguments
  const _a: D = new Double(a);
  const _b: D = new Double(b);
  const _c: D = new Double(c);
  const _s: D = new Double(s);

  // Resolve function
  const resolve = (): FVoid => {
    a = _a.get();
    b = _b.get();
    c = _c.get();
    s = _s.get();
  };

  // Local scalars
  const anorm: D = new Double();
  const bnorm: D = new Double();
  const scl: D = new Double();
  const sigma: D = new Double();
  const r: D = new Double();
  const z: D = new Double();

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
    scl.set(min(MAXDPINT, max(MINDPINT, anorm.get(), bnorm.get())));
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

  // Output
  return resolve();
};

// Export
export default drotg;
