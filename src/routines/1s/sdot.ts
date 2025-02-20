// Import
import { Integer, I } from '../../types/integer';
import { Single, S } from '../../types/single';
import { SingleArray, SA } from '../../types/singleArray';
import { vsize } from '../../macro';

// Input interface
interface Input extends FParameters {
  n: FInteger;
  sx: FRealArray;
  incx: FInteger;
  sy: FRealArray;
  incy: FInteger;
}

// Output interface
interface Output extends FParameters {
  _ret: FReal;
  n: FInteger | FEmpty;
  sx: FRealArray | FEmpty;
  incx: FInteger | FEmpty;
  sy: FRealArray | FEmpty;
  incy: FInteger | FEmpty;
}

// SDOT routine
const sdot = ({ n, sx, incx, sy, incy }: Input): Output => {
  // Copyright (c) 1992-2013 The University of Tennessee and The University of Tennessee Research Foundation. All rights reserved.
  // Copyright (c) 2000-2013 The University of California Berkeley. All rights reserved.
  // Copyright (c) 2006-2013 The University of Colorado Denver. All rights reserved.
  // Copyright (c) 2023-2025 Nicholas Ng. All rights reserved.

  // Arguments
  const _n: I = new Integer(n);
  const _sx: SA = new SingleArray(sx);
  const _incx: I = new Integer(incx);
  const _sy: SA = new SingleArray(sy);
  const _incy: I = new Integer(incy);

  // Return value
  const _ret: S = new Single();

  // Resolve function
  const resolve = (): Output => ({
    _ret: _ret.get(),
    n: _n.get(),
    sx: _sx.getAll(),
    incx: _incx.get(),
    sy: _sy.getAll(),
    incy: _incy.get(),
  });

  // Local variables
  const stemp: S = new Single();
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
        stemp.add(_sx.get(i) * _sy.get(i));
      }
      if (_n.lt(5)) {
        _ret.set(stemp);
        return resolve();
      }
    }
    mp1.set(m.get() + 1);
    for (i.set(mp1); i.le(_n); i.add(5)) {
      stemp.add(
        _sx.get(i) * _sy.get(i) +
          _sx.get(i.get() + 1) * _sy.get(i.get() + 1) +
          _sx.get(i.get() + 2) * _sy.get(i.get() + 2) +
          _sx.get(i.get() + 3) * _sy.get(i.get() + 3) +
          _sx.get(i.get() + 4) * _sy.get(i.get() + 4),
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
      stemp.add(_sx.get(ix) * _sy.get(iy));
      ix.add(_incx);
      iy.add(_incy);
    }
  }
  _ret.set(stemp);

  // Output
  return resolve();
};

// Export
export default sdot;
