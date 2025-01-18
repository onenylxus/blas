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
  _ret: FReal;
  n: FInteger | FEmpty;
  dx: FDoubleArray | FEmpty;
  incx: FInteger | FEmpty;
  dy: FDoubleArray | FEmpty;
  incy: FInteger | FEmpty;
}

// DDOT routine
const ddot = ({ n, dx, incx, dy, incy }: Input): Output => {
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

  // Return value
  const _ret: D = new Double();

  // Resolve function
  const resolve = (): Output => ({
    _ret: _ret.get(),
    n: _n.get(),
    dx: _dx.getAll(),
    incx: _incx.get(),
    dy: _dy.getAll(),
    incy: _incy.get(),
  });

  // Local variables
  const dtemp: D = new Double();
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
    m.set(_n.get() % 5);
    if (m.ne(0)) {
      for (i.set(1); i.le(m); i.add(1)) {
        dtemp.add(_dx.get(i) * _dy.get(i));
      }
      if (_n.lt(5)) {
        _ret.set(dtemp);
        return resolve();
      }
    }
    mp1.set(m.get() + 1);
    for (i.set(mp1); i.le(_n); i.add(5)) {
      dtemp.add(
        _dx.get(i) * _dy.get(i) +
          _dx.get(i.get() + 1) * _dy.get(i.get() + 1) +
          _dx.get(i.get() + 2) * _dy.get(i.get() + 2) +
          _dx.get(i.get() + 3) * _dy.get(i.get() + 3) +
          _dx.get(i.get() + 4) * _dy.get(i.get() + 4),
      );
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
      dtemp.add(_dx.get(ix) * _dy.get(iy));
      ix.add(_incx);
      iy.add(_incy);
    }
  }
  _ret.set(dtemp);

  // Output
  return resolve();
};

// Export
export default ddot;
