// Import
import { Double, D } from '../../types/double';
import { DoubleArray, DA } from '../../types/doubleArray';
import { Integer, I } from '../../types/integer';

// Input interface
interface Input extends FParameters {
  n: FInteger;
  da: FDouble;
  dx: FDoubleArray;
  incx: FInteger;
}

// Output interface
interface Output extends FParameters {
  _ret: FEmpty;
  n: FInteger | FEmpty;
  da: FDouble | FEmpty;
  dx: FDoubleArray;
  incx: FInteger | FEmpty;
}

// DSCAL routine
const dscal = ({ n, da, dx, incx }: Input): Output => {
  // Copyright (c) 1992-2013 The University of Tennessee and The University of Tennessee Research Foundation. All rights reserved.
  // Copyright (c) 2000-2013 The University of California Berkeley. All rights reserved.
  // Copyright (c) 2006-2013 The University of Colorado Denver. All rights reserved.
  // Copyright (c) 2023-2025 Nicholas Ng. All rights reserved.

  // Arguments
  const _n: I = new Integer(n);
  const _da: D = new Double(da);
  const _dx: DA = new DoubleArray(dx);
  const _incx: I = new Integer(incx);

  // Resolve function
  const resolve = (): Output => ({
    _ret: undefined,
    n: _n.get(),
    da: _da.get(),
    dx: _dx.getAll(),
    incx: _incx.get(),
  });

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
      for (i.set(1); i.le(m); i.add(1)) {
        _dx.set(i, _da.get() * _dx.get(i));
      }
      if (_n.lt(5)) {
        return resolve();
      }
    }
    mp1.set(m.get() + 1);
    for (i.set(mp1); i.le(_n); i.add(5)) {
      _dx.set(i, _da.get() * _dx.get(i));
      _dx.set(i.get() + 1, _da.get() * _dx.get(i.get() + 1));
      _dx.set(i.get() + 2, _da.get() * _dx.get(i.get() + 2));
      _dx.set(i.get() + 3, _da.get() * _dx.get(i.get() + 3));
      _dx.set(i.get() + 4, _da.get() * _dx.get(i.get() + 4));
    }
  } else {
    nincx.set(_n.get() * _incx.get());
    for (i.set(1); i.le(nincx); i.add(_incx)) {
      _dx.set(i, _da.get() * _dx.get(i));
    }
  }

  // Output
  return resolve();
};

// Export
export default dscal;
