// Import
import { Double, D } from '../../types/double';
import { DoubleArray, DA } from '../../types/doubleArray';
import { Integer, I } from '../../types/integer';
import { vsize } from '../../macro';

// Input interface
interface Input extends FParameters {
  n: FInteger;
  dx: FDoubleArray;
  incx: FInteger;
  dy: FDoubleArray;
  incy: FInteger;
}

// Output interface
interface Output extends FParameters {
  _ret: FEmpty;
  n: FInteger | FEmpty;
  dx: FDoubleArray;
  incx: FInteger | FEmpty;
  dy: FDoubleArray;
  incy: FInteger | FEmpty;
}

// DSWAP routine
const dswap = ({ n, dx, incx, dy, incy }: Input): Output => {
  // Copyright (c) 1992-2013 The University of Tennessee and The University of Tennessee Research Foundation. All rights reserved.
  // Copyright (c) 2000-2013 The University of California Berkeley. All rights reserved.
  // Copyright (c) 2006-2013 The University of Colorado Denver. All rights reserved.
  // Copyright (c) 2023-2025 Nicholas Ng. All rights reserved.

  // Arguments
  const _n: I = new Integer(n);
  const _dx: DA = new DoubleArray(dx);
  const _incx: I = new Integer(incx);
  const _dy: DA = new DoubleArray(dy);
  const _incy: I = new Integer(incy);

  // Resolve function
  const resolve = (): Output => ({
    _ret: undefined,
    n: _n.get(),
    dx: _dx.getAll(),
    incx: _incx.get(),
    dy: _dy.getAll(),
    incy: _incy.get(),
  });

  // Local variables
  const dtemp: D = new Double();
  const ix: I = new Integer();
  const iy: I = new Integer();
  const m: I = new Integer();
  const mp1: I = new Integer();
  const i: I = new Integer();

  // Process
  if (_n.le(0)) {
    return resolve();
  }
  if (_incx.eq(1) && _incy.eq(1)) {
    m.set(_n.get() % 3);
    if (m.ne(0)) {
      for (i.set(1); i.le(m); i.add(1)) {
        dtemp.set(_dx.get(i));
        _dx.set(i, _dy.get(i));
        _dy.set(i, dtemp);
      }
      if (_n.lt(3)) {
        return resolve();
      }
    }
    mp1.set(m.get() + 1);
    for (i.set(mp1); i.le(_n); i.add(3)) {
      dtemp.set(_dx.get(i));
      _dx.set(i, _dy.get(i));
      _dy.set(i, dtemp);
      dtemp.set(_dx.get(i.get() + 1));
      _dx.set(i.get() + 1, _dy.get(i.get() + 1));
      _dy.set(i.get() + 1, dtemp);
      dtemp.set(_dx.get(i.get() + 2));
      _dx.set(i.get() + 2, _dy.get(i.get() + 2));
      _dy.set(i.get() + 2, dtemp);
    }
  } else {
    ix.set(1);
    iy.set(1);
    if (_incx.lt(0)) {
      ix.set(vsize(_n, _incx));
    }
    if (_incy.lt(0)) {
      iy.set(vsize(_n, _incy));
    }
    for (i.set(1); i.le(_n); i.add(1)) {
      dtemp.set(_dx.get(ix));
      _dx.set(ix, _dy.get(iy));
      _dy.set(iy, dtemp);
      ix.add(_incx);
      iy.add(_incy);
    }
  }

  // Output
  return resolve();
};

// Export
export default dswap;
