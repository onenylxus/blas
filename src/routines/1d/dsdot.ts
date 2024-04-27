// Import
import { Double, D } from '../../types/double';
import { Integer, I } from '../../types/integer';
import { SingleArray, SA } from '../../types/singleArray';

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
  _ret: FDouble;
  n: FInteger | FEmpty;
  sx: FRealArray | FEmpty;
  incx: FInteger | FEmpty;
  sy: FRealArray | FEmpty;
  incy: FInteger | FEmpty;
}

// DSDOT routine
const dsdot = ({ n, sx, incx, sy, incy }: Input): Output => {
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

  // Return
  const _ret: D = new Double();

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
  const i: I = new Integer();
  const kx: I = new Integer();
  const ky: I = new Integer();
  const ns: I = new Integer();

  // Process
  if (_n.le(0)) {
    return resolve();
  }
  if (_incx.eq(_incy) && _incx.gt(0)) {
    ns.set(_n.get() * _incx.get());
    for (i.set(1); i.le(ns); i.add(_incx)) {
      _ret.add(_sx.get(i) * _sy.get(i));
    }
  } else {
    kx.set(1);
    ky.set(1);
    if (_incx.lt(0)) {
      kx.set((-_n.get() + 1) * _incx.get() + 1);
    }
    if (_incy.lt(0)) {
      ky.set((-_n.get() + 1) * _incy.get() + 1);
    }
    for (i.set(1); i.le(_n); i.add(1)) {
      _ret.add(_sx.get(kx) * _sy.get(ky));
      kx.add(_incx);
      ky.add(_incy);
    }
  }

  // Output
  return resolve();
};

// Export
export default dsdot;
