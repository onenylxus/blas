// Import
import { Double, D } from '../../types/double';
import { MAXDPINT, MINDPINT, abs, max, min, sign, sqrt } from '../../mathlib';

// Input interface
interface Input extends FParameters {
  a: FDouble;
  b: FDouble;
  c: FDouble | FEmpty;
  s: FDouble | FEmpty;
}

// Output interface
interface Output extends FParameters {
  _ret: FEmpty;
  a: FDouble;
  b: FDouble;
  c: FDouble;
  s: FDouble;
}

// DROTG routine
const drotg = ({ a, b, c, s }: Input): Output => {
  // Copyright (c) 1992-2013 The University of Tennessee and The University of Tennessee Research Foundation. All rights reserved.
  // Copyright (c) 2000-2013 The University of California Berkeley. All rights reserved.
  // Copyright (c) 2006-2013 The University of Colorado Denver. All rights reserved.
  // Copyright (c) 2023-2025 Nicholas Ng. All rights reserved.

  // Arguments
  const _a: D = new Double(a);
  const _b: D = new Double(b);
  const _c: D = new Double(c);
  const _s: D = new Double(s);

  // Resolve function
  const resolve = (): Output => ({
    _ret: undefined,
    a: _a.get(),
    b: _b.get(),
    c: _c.get(),
    s: _s.get(),
  });

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
    _a.set(_b);
    _b.set(1);
  } else {
    scl.set(min(MAXDPINT, max(MINDPINT, anorm.get(), bnorm.get())));
    if (anorm.gt(bnorm)) {
      sigma.set(sign(_a.get()));
    } else {
      sigma.set(sign(_b.get()));
    }
    r.set(sigma.get() * (scl.get() * sqrt((_a.get() / scl.get()) ** 2 + (_b.get() / scl.get()) ** 2)));
    _c.set(_a.get() / r.get());
    _s.set(_b.get() / r.get());
    if (anorm.gt(bnorm)) {
      z.set(_s);
    } else if (_c.ne(0)) {
      z.set(1 / _c.get());
    } else {
      z.set(1);
    }
    _a.set(r);
    _b.set(z);
  }

  // Output
  return resolve();
};

// Export
export default drotg;
