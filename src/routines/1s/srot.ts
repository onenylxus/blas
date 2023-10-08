// Import
import { Integer, I } from '../../types/integer';
import { Single, S } from '../../types/single';
import { SingleArray, SA } from '../../types/singleArray';
import { abs } from '../../mathlib';

// SROT routine
const srot = (
  n: FInInteger,
  sx: FInOutRealArray,
  incx: FInInteger,
  sy: FInOutRealArray,
  incy: FInInteger,
  c: FInReal,
  s: FInReal,
): FVoid => {
  // Copyright (c) 1992-2013 The University of Tennessee and The University of Tennessee Research Foundation. All rights reserved.
  // Copyright (c) 2000-2013 The University of California Berkeley. All rights reserved.
  // Copyright (c) 2006-2013 The University of Colorado Denver. All rights reserved.
  // Copyright (c) 2023      Nicholas Ng. All rights reserved.

  // Arguments
  const _n: I = new Integer(n);
  const _sx: SA = new SingleArray(sx, 1 + (n - 1) * abs(incx));
  const _incx: I = new Integer(incx);
  const _sy: SA = new SingleArray(sy, 1 + (n - 1) * abs(incy));
  const _incy: I = new Integer(incy);
  const _c: S = new Single(c);
  const _s: S = new Single(s);

  // Resolve function
  const resolve = (): FVoid => {
    n = _n.get();
    sx = _sx.getAll();
    incx = _incx.get();
    sy = _sy.getAll();
    incy = _incy.get();
    c = _c.get();
    s = _s.get();
  };

  // Local variables
  const stemp: S = new Single();
  const i: I = new Integer();
  const ix: I = new Integer();
  const iy: I = new Integer();

  // Process
  if (_n.le(0)) {
    return resolve();
  }
  if (_incx.eq(1) && _incy.eq(1)) {
    for (i.set(1); i.le(_n.get()); i.add(1)) {
      stemp.set(_c.get() * _sx.get(i.get()) + _s.get() * _sy.get(i.get()));
      _sy.set(i.get(), _c.get() * _sy.get(i.get()) - _s.get() * _sx.get(i.get()));
      _sx.set(i.get(), stemp.get());
    }
  } else {
    ix.set(0);
    iy.set(0);
    if (_incx.lt(0)) {
      ix.set((-_n.get() + 1) * _incx.get() + 1);
    }
    if (_incy.lt(0)) {
      iy.set((-_n.get() + 1) * _incy.get() + 1);
    }
    for (i.set(1); i.le(_n.get()); i.add(1)) {
      stemp.set(_c.get() * _sx.get(ix.get()) + _s.get() * _sy.get(iy.get()));
      _sy.set(iy.get(), _c.get() * _sy.get(iy.get()) - _s.get() * _sx.get(ix.get()));
      _sx.set(ix.get(), stemp.get());
      ix.add(_incx.get());
      iy.add(_incy.get());
    }
  }

  // Output
  return resolve();
};

// Export
export default srot;
