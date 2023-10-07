// Import
import { Double, D } from '../../types/double';
import { DoubleArray, DA } from '../../types/doubleArray';
import { Integer, I } from '../../types/integer';
import { abs } from '../../../utils/mathlib';

// DSCAL routine
const dscal = (
  n: FInInteger,
  da: FInDouble,
  dx: FInOutDoubleArray,
  incx: FInInteger,
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

  // Resolve function
  const resolve = (): FVoid => {
    n = _n.get();
    da = _da.get();
    dx = _dx.getAll();
    incx = _incx.get();
  };

  // Local variables
  const i: I = new Integer();
  const m: I = new Integer();
  const mp1: I = new Integer();
  const nincx: I = new Integer();

  // Process
  if (_n.le(0) || _incx.le(0) || _da.eq(1)) {
    return resolve();
  }
  if (_incx.eq(1)) {
    m.set(_n.get() % 5);
    if (m.ne(0)) {
      for (i.set(1); i.le(m.get()); i.add(1)) {
        _dx.set(i.get(), _da.get() * _dx.get(i.get()));
      }
      if (_n.lt(5)) {
        return resolve();
      }
    }
    mp1.set(m.get() + 1);
    for (i.set(mp1.get()); i.le(_n.get()); i.add(5)) {
      _dx.set(i.get(), _da.get() * _dx.get(i.get()));
      _dx.set(i.get() + 1, _da.get() * _dx.get(i.get() + 1));
      _dx.set(i.get() + 2, _da.get() * _dx.get(i.get() + 2));
      _dx.set(i.get() + 3, _da.get() * _dx.get(i.get() + 3));
      _dx.set(i.get() + 4, _da.get() * _dx.get(i.get() + 4));
    }
  } else {
    nincx.set(_n.get() * _incx.get());
    for (i.set(1); i.le(nincx.get()); i.add(_incx.get())) {
      _dx.set(i.get(), _da.get() * _dx.get(i.get()));
    }
  }

  // Output
  return resolve();
};

// Export
export default dscal;
