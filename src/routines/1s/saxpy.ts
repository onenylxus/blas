// Import
import { Integer, I } from '../../types/integer';
import { Single, S } from '../../types/single';
import { SingleArray, SA } from '../../types/singleArray';
import { vsize } from '../../macro';

// Input interface
interface Input extends FParameters {
  n: FInteger;
  sa: FReal;
  sx: FRealArray;
  incx: FInteger;
  sy: FRealArray;
  incy: FInteger;
}

// Output interface
interface Output extends FParameters {
  _ret: FEmpty;
  n: FInteger | FEmpty;
  sa: FReal | FEmpty;
  sx: FRealArray | FEmpty;
  incx: FInteger | FEmpty;
  sy: FRealArray;
  incy: FInteger | FEmpty;
}

// SAXPY routine
const saxpy = ({ n, sa, sx, incx, sy, incy }: Input): Output => {
  // Copyright (c) 1992-2013 The University of Tennessee and The University of Tennessee Research Foundation. All rights reserved.
  // Copyright (c) 2000-2013 The University of California Berkeley. All rights reserved.
  // Copyright (c) 2006-2013 The University of Colorado Denver. All rights reserved.
  // Copyright (c) 2023-2025 Nicholas Ng. All rights reserved.

  // Arguments
  const _n: I = new Integer(n);
  const _sa: S = new Single(sa);
  const _sx: SA = new SingleArray(sx);
  const _incx: I = new Integer(incx);
  const _sy: SA = new SingleArray(sy);
  const _incy: I = new Integer(incy);

  // Resolve function
  const resolve = (): Output => ({
    _ret: undefined,
    n: _n.get(),
    sa: _sa.get(),
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
  if (_sa.eq(0)) {
    return resolve();
  }
  if (_incx.eq(1) && _incy.eq(1)) {
    m.set(_n.get() % 4);
    if (m.ne(0)) {
      for (i.set(1); i.le(m); i.add(1)) {
        _sy.set(i, _sy.get(i) + _sa.get() * _sx.get(i));
      }
    }
    if (_n.lt(4)) {
      return resolve();
    }
    mp1.set(m.get() + 1);
    for (i.set(mp1); i.le(_n); i.add(4)) {
      _sy.set(i, _sy.get(i) + _sa.get() * _sx.get(i));
      _sy.set(
        i.get() + 1,
        _sy.get(i.get() + 1) + _sa.get() * _sx.get(i.get() + 1),
      );
      _sy.set(
        i.get() + 2,
        _sy.get(i.get() + 2) + _sa.get() * _sx.get(i.get() + 2),
      );
      _sy.set(
        i.get() + 3,
        _sy.get(i.get() + 3) + _sa.get() * _sx.get(i.get() + 3),
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
      _sy.set(iy, _sy.get(iy) + _sa.get() * _sx.get(ix));
      ix.add(_incx);
      iy.add(_incy);
    }
  }

  // Output
  return resolve();
};

// Export
export default saxpy;
