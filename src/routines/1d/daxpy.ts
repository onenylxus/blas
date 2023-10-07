// Import
import { Double, D } from '../../types/double';
import { DoubleArray, DA } from '../../types/doubleArray';
import { Integer, I } from '../../types/integer';
import { abs } from '../../../utils/mathlib';

// DAXPY routine
const daxpy = (
  n: FInInteger,
  da: FInDouble,
  dx: FInDoubleArray,
  incx: FInInteger,
  dy: FInOutDoubleArray,
  incy: FInInteger,
): FVoid => {
  // Copyright (c) 1992-2013 The University of Tennessee and The University of Tennessee Research Foundation. All rights reserved.
  // Copyright (c) 2000-2013 The University of California Berkeley. All rights reserved.
  // Copyright (c) 2006-2013 The University of Colorado Denver. All rights reserved.
  // Copyright (c) 2023      Nicholas Ng. All rights reserved.

  // Arguments
  const _n: I = new Integer(n);
  const _da: D = new Double(da);
  const _dx: DA = new DoubleArray(dx, 1 + (n - 1) * abs(incx));
  const _incx: I = new Integer(incx);
  const _dy: DA = new DoubleArray(dy, 1 + (n - 1) * abs(incy));
  const _incy: I = new Integer(incy);

  // Resolve function
  const resolve = (): FVoid => {
    n = _n.get();
    da = _da.get();
    dx = _dx.getAll();
    incx = _incx.get();
    dy = _dy.getAll();
    incy = _incy.get();
  };

  // Local variables
  const i: I = new Integer();
  const ix: I = new Integer();
  const iy: I = new Integer();
  const m: I = new Integer();
  const mp1: I = new Integer();

  // Process
  if (_n.le(0)) {
    return resolve();
  }
  if (_da.eq(0)) {
    return resolve();
  }
  if (_incx.eq(1) && _incy.eq(1)) {
    m.set(_n.get() % 4);
    if (m.ne(0)) {
      for (i.set(1); i.le(m.get()); i.add(1)) {
        _dy.set(i.get(), _dy.get(i.get()) + _da.get() * _dx.get(i.get()));
      }
    }
    if (_n.lt(4)) {
      return resolve();
    }
    mp1.set(m.get() + 1);
    for (i.set(mp1.get()); i.le(_n.get()); i.add(4)) {
      _dy.set(i.get(), _dy.get(i.get()) + _da.get() * _dx.get(i.get()));
      _dy.set(i.get() + 1, _dy.get(i.get() + 1) + _da.get() * _dx.get(i.get() + 1));
      _dy.set(i.get() + 2, _dy.get(i.get() + 2) + _da.get() * _dx.get(i.get() + 2));
      _dy.set(i.get() + 3, _dy.get(i.get() + 3) + _da.get() * _dx.get(i.get() + 3));
    }
  } else {
    ix.set(1);
    iy.set(1);
    if (_incx.lt(0)) {
      ix.set((-_n.get() + 1) * _incx.get() + 1);
      iy.set((-_n.get() + 1) * _incy.get() + 1);
      for (i.set(1); i.le(_n.get()); i.add(1)) {
        _dy.set(iy.get(), _dy.get(iy.get()) + _da.get() * _dx.get(ix.get()));
        ix.add(_incx.get());
        iy.add(_incy.get());
      }
    }
  }

  // Output
  return resolve();
};

// Export
export default daxpy;
