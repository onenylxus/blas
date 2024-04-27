// Import
import { Integer, I } from '../../types/integer';
import { Single, S } from '../../types/single';
import { SingleArray, SA } from '../../types/singleArray';

// Input interface
interface Input extends FParameters {
  n: FInteger;
  sx: FRealArray;
  incx: FInteger;
  sy: FRealArray;
  incy: FInteger;
  c: FReal;
  s: FReal;
}

// Output interface
interface Output extends FParameters {
  _ret: FEmpty;
  n: FInteger | FEmpty;
  sx: FRealArray;
  incx: FInteger | FEmpty;
  sy: FRealArray;
  incy: FInteger | FEmpty;
  c: FReal | FEmpty;
  s: FReal | FEmpty;
}

// SROT routine
const srot = ({ n, sx, incx, sy, incy, c, s }: Input): Output => {
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
  const _c: S = new Single(c);
  const _s: S = new Single(s);

  // Resolve function
  const resolve = (): Output => ({
    _ret: undefined,
    n: _n.get(),
    sx: _sx.getAll(),
    incx: _incx.get(),
    sy: _sy.getAll(),
    incy: _incy.get(),
    c: _c.get(),
    s: _s.get(),
  });

  // Local variables
  const stemp: S = new Single();
  const i: I = new Integer();
  const ix: I = new Integer();
  const iy: I = new Integer();

  // Process
  if (_n.le(0)) {
    return resolve();
  }
  if (_incx.eq(1) && _incy.eq(1)) {
    for (i.set(1); i.le(_n); i.add(1)) {
      stemp.set(_c.get() * _sx.get(i) + _s.get() * _sy.get(i));
      _sy.set(i, _c.get() * _sy.get(i) - _s.get() * _sx.get(i));
      _sx.set(i, stemp);
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
    for (i.set(1); i.le(_n); i.add(1)) {
      stemp.set(_c.get() * _sx.get(ix) + _s.get() * _sy.get(iy));
      _sy.set(iy, _c.get() * _sy.get(iy) - _s.get() * _sx.get(ix));
      _sx.set(ix, stemp);
      ix.add(_incx);
      iy.add(_incy);
    }
  }

  // Output
  return resolve();
};

// Export
export default srot;
