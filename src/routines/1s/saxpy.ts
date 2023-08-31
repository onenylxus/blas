// Import
import { Integer, I } from '../../types/integer';
import { Single, S } from '../../types/single';
import { SingleArray, SA } from '../../types/singleArray';

// Math library snippets
const { abs } = Math;

// SAXPY routine
const saxpy = (
  n: FInInteger,
  sa: FInReal,
  sx: FInRealArray,
  incx: FInInteger,
  sy: FInOutRealArray,
  incy: FInInteger,
): FVoid => {
  // Copyright (c) 1992-2013 The University of Tennessee and The University of Tennessee Research Foundation. All rights reserved.
  // Copyright (c) 2000-2013 The University of California Berkeley. All rights reserved.
  // Copyright (c) 2006-2013 The University of Colorado Denver. All rights reserved.
  // Copyright (c) 2023      Nicholas Ng. All rights reserved.

  // Arguments
  const _n: I = new Integer(n);
  const _sa: S = new Single(sa);
  const _sx: SA = new SingleArray(sx, 1 + (n - 1) * abs(incx));
  const _incx: I = new Integer(incx);
  const _sy: SA = new SingleArray(sy, 1 + (n - 1) * abs(incy));
  const _incy: I = new Integer(incy);

  // Resolve function
  const resolve = (): FVoid => {
    n = _n.get();
    sa = _sa.get();
    sx = _sx.getAll();
    incx = _incx.get();
    sy = _sy.getAll();
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
  if (_sa.eq(0)) {
    return resolve();
  }
  if (_incx.eq(1) && _incy.eq(1)) {
    m.set(_n.get() % 4);
    if (m.ne(0)) {
      for (i.set(1); i.le(m.get()); i.add(1)) {
        _sy.set(i.get(), _sy.get(i.get()) + _sa.get() * _sx.get(i.get()));
      }
    }
    if (_n.lt(4)) {
      return resolve();
    }
    mp1.set(m.get() + 1);
    for (i.set(mp1.get()); i.le(_n.get()); i.add(4)) {
      _sy.set(i.get(), _sy.get(i.get()) + _sa.get() * _sx.get(i.get()));
      _sy.set(i.get() + 1, _sy.get(i.get() + 1) + _sa.get() * _sx.get(i.get() + 1));
      _sy.set(i.get() + 2, _sy.get(i.get() + 2) + _sa.get() * _sx.get(i.get() + 2));
      _sy.set(i.get() + 3, _sy.get(i.get() + 3) + _sa.get() * _sx.get(i.get() + 3));
    }
  } else {
    ix.set(1);
    iy.set(1);
    if (_incx.lt(0)) {
      ix.set((-_n.get() + 1) * _incx.get() + 1);
      iy.set((-_n.get() + 1) * _incy.get() + 1);
      for (i.set(1); i.le(_n.get()); i.add(1)) {
        _sy.set(iy.get(), _sy.get(iy.get()) + _sa.get() * _sx.get(ix.get()));
        ix.add(_incx.get());
        iy.add(_incy.get());
      }
    }
  }

  // Output
  return resolve();
};

// Export
export default saxpy;
