// Import
import { Double, D } from '../../types/double';
import { DoubleArray, DA } from '../../types/doubleArray';
import { Integer, I } from '../../types/integer';

// Input interface
interface Input extends FParameters {
  n: FInteger;
  dx: FDoubleArray;
  incx: FInteger;
  dy: FDoubleArray;
  incy: FInteger;
  c: FDouble;
  s: FDouble;
}

// Output interface
interface Output extends FParameters {
  _ret: FEmpty;
  n: FInteger | FEmpty;
  dx: FDoubleArray;
  incx: FInteger | FEmpty;
  dy: FDoubleArray;
  incy: FInteger | FEmpty;
  c: FDouble | FEmpty;
  s: FDouble | FEmpty;
}

// DROT routine
const drot = ({ n, dx, incx, dy, incy, c, s }: Input): Output => {
  // Copyright (c) 1992-2013 The University of Tennessee and The University of Tennessee Research Foundation. All rights reserved.
  // Copyright (c) 2000-2013 The University of California Berkeley. All rights reserved.
  // Copyright (c) 2006-2013 The University of Colorado Denver. All rights reserved.
  // Copyright (c) 2023-2024 Nicholas Ng. All rights reserved.

  // Arguments
  const _n: I = new Integer(n);
  const _dx: DA = new DoubleArray(dx);
  const _incx: I = new Integer(incx);
  const _dy: DA = new DoubleArray(dy);
  const _incy: I = new Integer(incy);
  const _c: D = new Double(c);
  const _s: D = new Double(s);

  // Resolve function
  const resolve = (): Output => ({
    _ret: undefined,
    n: _n.get(),
    dx: _dx.getAll(),
    incx: _incx.get(),
    dy: _dy.getAll(),
    incy: _incy.get(),
    c: _c.get(),
    s: _s.get(),
  });

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
