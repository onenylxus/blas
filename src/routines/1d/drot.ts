// Import
import { Double, D } from '../../types/double';
import { DoubleArray, DA } from '../../types/doubleArray';
import { Integer, I } from '../../types/integer';
import { abs } from '../../mathlib';

// DROT routine
const drot = (
  n: FInInteger,
  dx: FInOutDoubleArray,
  incx: FInInteger,
  dy: FInOutDoubleArray,
  incy: FInInteger,
  c: FInDouble,
  s: FInDouble,
): FVoid => {
  // Copyright (c) 1992-2013 The University of Tennessee and The University of Tennessee Research Foundation. All rights reserved.
  // Copyright (c) 2000-2013 The University of California Berkeley. All rights reserved.
  // Copyright (c) 2006-2013 The University of Colorado Denver. All rights reserved.
  // Copyright (c) 2023      Nicholas Ng. All rights reserved.

  // Arguments
  const _n: I = new Integer(n);
  const _dx: DA = new DoubleArray(dx, 1 + (n - 1) * abs(incx));
  const _incx: I = new Integer(incx);
  const _dy: DA = new DoubleArray(dy, 1 + (n - 1) * abs(incy));
  const _incy: I = new Integer(incy);
  const _c: D = new Double(c);
  const _s: D = new Double(s);

  // Resolve function
  const resolve = (): FVoid => {
    n = _n.get();
    dx = _dx.getAll();
    incx = _incx.get();
    dy = _dy.getAll();
    incy = _incy.get();
    c = _c.get();
    s = _s.get();
  };

  // Local variables
  const dtemp: D = new Double();
  const i: I = new Integer();
  const ix: I = new Integer();
  const iy: I = new Integer();

  // Process
  if (_n.le(0)) {
    return resolve();
  }
  if (_incx.eq(1) && _incy.eq(1)) {
    for (i.set(1); i.le(_n.get()); i.add(1)) {
      dtemp.set(_c.get() * _dx.get(i.get()) + _s.get() * _dy.get(i.get()));
      _dy.set(i.get(), _c.get() * _dy.get(i.get()) - _s.get() * _dx.get(i.get()));
      _dx.set(i.get(), dtemp.get());
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
      dtemp.set(_c.get() * _dx.get(ix.get()) + _s.get() * _dy.get(iy.get()));
      _dy.set(iy.get(), _c.get() * _dy.get(iy.get()) - _s.get() * _dx.get(ix.get()));
      _dx.set(ix.get(), dtemp.get());
      ix.add(_incx.get());
      iy.add(_incy.get());
    }
  }

  // Output
  return resolve();
};

// Export
export default drot;
