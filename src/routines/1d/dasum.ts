// Import
import { Double, D } from '../../types/double';
import { DoubleArray, DA } from '../../types/doubleArray';
import { Integer, I } from '../../types/integer';

// Math library snippets
const { abs } = Math;

// DASUM routine
const dasum = (
  n: FInInteger,
  dx: FInDoubleArray,
  incx: FInInteger,
): FDouble => {
  // Copyright (c) 1992-2013 The University of Tennessee and The University of Tennessee Research Foundation. All rights reserved.
  // Copyright (c) 2000-2013 The University of California Berkeley. All rights reserved.
  // Copyright (c) 2006-2013 The University of Colorado Denver. All rights reserved.
  // Copyright (c) 2023      Nicholas Ng. All rights reserved.

  // Arguments
  const _n: I = new Integer(n);
  const _dx: DA = new DoubleArray(dx, 1 + (n - 1) * abs(incx));
  const _incx: I = new Integer(incx);

  // Return value
  const _ret: D = new Double();

  // Resolve function
  const resolve = (): FReal => {
    n = _n.get();
    dx = _dx.getAll();
    incx = _incx.get();
    return _ret.get();
  };

  // Local variables
  const stemp: D = new Double();
  const i: I = new Integer();
  const m: I = new Integer();
  const mp1: I = new Integer();
  const nincx: I = new Integer();

  // Process
  if (_n.le(0) || _incx.le(0)) {
    return resolve();
  }
  if (_incx.eq(1)) {
    m.set(_n.get() % 6);
    if (m.ne(0)) {
      for (i.set(1); i.le(m.get()); i.add(1)) {
        stemp.add(abs(_dx.get(i.get())));
      }
      if (_n.lt(6)) {
        _ret.set(stemp.get());
        return resolve();
      }
    }
    mp1.set(m.get() + 1);
    for (i.set(mp1.get()); i.le(_n.get()); i.add(6)) {
      stemp.add(abs(_dx.get(i.get())) + abs(_dx.get(i.get() + 1)) + abs(_dx.get(i.get() + 2)) + abs(_dx.get(i.get() + 3)) + abs(_dx.get(i.get() + 4)) + abs(_dx.get(i.get() + 5)));
    }
  } else {
    nincx.set(_n.get() * _incx.get());
    for (i.set(1); i.le(nincx.get()); i.add(_incx.get())) {
      stemp.add(abs(_dx.get(i.get())));
    }
  }
  _ret.set(stemp.get());

  // Output
  return resolve();
};

// Export
export default dasum;
