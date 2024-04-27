// Import
import { Integer, I } from '../../types/integer';
import { SingleArray, SA } from '../../types/singleArray';

// Input interface
interface Input extends FParameters {
  n: FInteger;
  sx: FRealArray;
  incx: FInteger;
  sy: FRealArray | FEmpty;
  incy: FInteger;
}

// Output interface
interface Output extends FParameters {
  _ret: FEmpty;
  n: FInteger | FEmpty;
  sx: FRealArray | FEmpty;
  incx: FInteger | FEmpty;
  sy: FRealArray;
  incy: FInteger | FEmpty;
}

// SCOPY routine
const scopy = ({ n, sx, incx, sy, incy }: Input): Output => {
  // Copyright (c) 1992-2013 The University of Tennessee and The University of Tennessee Research Foundation. All rights reserved.
  // Copyright (c) 2000-2013 The University of California Berkeley. All rights reserved.
  // Copyright (c) 2006-2013 The University of Colorado Denver. All rights reserved.
  // Copyright (c) 2023-2024 Nicholas Ng. All rights reserved.

  // Arguments
  const _n: I = new Integer(n);
  const _sx: SA = new SingleArray(sx);
  const _incx: I = new Integer(incx);
  const _sy: SA = new SingleArray(sy);
  const _incy: I = new Integer(incy);

  // Resolve function
  const resolve = (): Output => ({
    _ret: undefined,
    n: _n.get(),
    sx: _sx.getAll(),
    incx: _incx.get(),
    sy: _sy.getAll(),
    incy: _incy.get(),
  });

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
  if (_incx.eq(1) && _incy.eq(1)) {
    m.set(_n.get() % 7);
    if (m.ne(0)) {
      for (i.set(1); i.le(m); i.add(1)) {
        _sy.set(i, _sx.get(i));
      }
      if (_n.lt(7)) {
        return resolve();
      }
    }
    mp1.set(m.get() + 1);
    for (i.set(mp1); i.le(_n); i.add(7)) {
      _sy.set(i, _sx.get(i));
      _sy.set(i.get() + 1, _sx.get(i.get() + 1));
      _sy.set(i.get() + 2, _sx.get(i.get() + 2));
      _sy.set(i.get() + 3, _sx.get(i.get() + 3));
      _sy.set(i.get() + 4, _sx.get(i.get() + 4));
      _sy.set(i.get() + 5, _sx.get(i.get() + 5));
      _sy.set(i.get() + 6, _sx.get(i.get() + 6));
    }
  } else {
    ix.set(1);
    iy.set(1);
    if (_incx.lt(0)) {
      ix.set((-_n.get() + 1) * _incx.get() + 1);
    }
    if (_incy.lt(0)) {
      iy.set((-_n.get() + 1) * _incy.get() + 1);
    }
    for (i.set(1); i.le(_n); i.add(1)) {
      _sy.set(iy, _sx.get(ix));
      ix.add(_incx);
      iy.add(_incy);
    }
  }

  // Output
  return resolve();
};

// Export
export default scopy;
