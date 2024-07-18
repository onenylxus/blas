// Import
import { Double, D } from '../../types/double';
import { Integer, I } from '../../types/integer';
import { Single, S } from '../../types/single';
import { SingleArray, SA } from '../../types/singleArray';
import { vsize } from '../../macro';

// Input interface
interface Input extends FParameters {
  n: FInteger;
  sb: FReal;
  sx: FRealArray;
  incx: FInteger;
  sy: FRealArray;
  incy: FInteger;
}

// Output interface
interface Output extends FParameters {
  _ret: FReal;
  n: FInteger | FEmpty;
  sb: FReal | FEmpty;
  sx: FRealArray | FEmpty;
  incx: FInteger | FEmpty;
  sy: FRealArray | FEmpty;
  incy: FInteger | FEmpty;
}

// SDSDOT routine
const sdsdot = ({ n, sb, sx, incx, sy, incy }: Input): Output => {
  // Copyright (c) 1992-2013 The University of Tennessee and The University of Tennessee Research Foundation. All rights reserved.
  // Copyright (c) 2000-2013 The University of California Berkeley. All rights reserved.
  // Copyright (c) 2006-2013 The University of Colorado Denver. All rights reserved.
  // Copyright (c) 2023-2024 Nicholas Ng. All rights reserved.

  // Arguments
  const _n: I = new Integer(n);
  const _sb: S = new Single(sb);
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
    sb: _sb.get(),
    sx: _sx.getAll(),
    incx: _incx.get(),
    sy: _sy.getAll(),
    incy: _incy.get(),
  });

  // Local variables
  const dsdot: D = new Double();
  const i: I = new Integer();
  const kx: I = new Integer();
  const ky: I = new Integer();
  const ns: I = new Integer();

  // Process
  dsdot.set(_sb);
  if (_n.le(0)) {
    _ret.set(dsdot);
    return resolve();
  }
  if (_incx.eq(_incy) && _incx.gt(0)) {
    ns.set(_n.get() * _incx.get());
    for (i.set(1); i.le(ns); i.add(_incx)) {
      dsdot.add(_sx.get(i) * _sy.get(i));
    }
  } else {
    kx.set(1);
    ky.set(1);
    if (_incx.lt(0)) {
      kx.set(vsize(_n, _incx));
    }
    if (_incy.lt(0)) {
      ky.set(vsize(_n, _incy));
    }
    for (i.set(1); i.le(_n); i.add(1)) {
      dsdot.add(_sx.get(kx) * _sy.get(ky));
      kx.add(_incx);
      ky.add(_incy);
    }
  }
  _ret.set(dsdot);

  // Output
  return resolve();
};

// Export
export default sdsdot;
