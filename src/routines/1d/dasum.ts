// Import
import { Double, D } from '../../types/double';
import { DoubleArray, DA } from '../../types/doubleArray';
import { Integer, I } from '../../types/integer';
import { abs } from '../../mathlib';

// Input interface
interface Input extends FParameters {
  n: FInteger;
  dx: FDoubleArray;
  incx: FInteger;
}

// Output interface
interface Output extends FParameters {
  _ret: FReal;
  n: FInteger | FEmpty;
  dx: FDoubleArray | FEmpty;
  incx: FInteger | FEmpty;
}

// DASUM routine
const dasum = ({ n, dx, incx }: Input): Output => {
  // Copyright (c) 1992-2013 The University of Tennessee and The University of Tennessee Research Foundation. All rights reserved.
  // Copyright (c) 2000-2013 The University of California Berkeley. All rights reserved.
  // Copyright (c) 2006-2013 The University of Colorado Denver. All rights reserved.
  // Copyright (c) 2023-2024 Nicholas Ng. All rights reserved.

  // Arguments
  const _n: I = new Integer(n);
  const _dx: DA = new DoubleArray(dx);
  const _incx: I = new Integer(incx);

  // Return value
  const _ret: D = new Double();

  // Resolve function
  const resolve = (): Output => ({
    _ret: _ret.get(),
    n: _n.get(),
    dx: _dx.getAll(),
    incx: _incx.get(),
  });

  // Local variables
  const dtemp: D = new Double();
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
      for (i.set(1); i.le(m); i.add(1)) {
        dtemp.add(abs(_dx.get(i)));
      }
      if (_n.lt(6)) {
        _ret.set(dtemp);
        return resolve();
      }
    }
    mp1.set(m.get() + 1);
    for (i.set(mp1); i.le(_n); i.add(6)) {
      dtemp.add(abs(_dx.get(i)) + abs(_dx.get(i.get() + 1)) + abs(_dx.get(i.get() + 2)) + abs(_dx.get(i.get() + 3)) + abs(_dx.get(i.get() + 4)) + abs(_dx.get(i.get() + 5)));
    }
  } else {
    nincx.set(_n.get() * _incx.get());
    for (i.set(1); i.le(nincx); i.add(_incx)) {
      dtemp.add(abs(_dx.get(i)));
    }
  }
  _ret.set(dtemp);

  // Output
  return resolve();
};

// Export
export default dasum;
