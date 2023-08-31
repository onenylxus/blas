// Import
import { Double, D } from '../../types/double';
import { Integer, I } from '../../types/integer';
import { SingleArray, SA } from '../../types/singleArray';

// Math library snippets
const { abs } = Math;

// DSDOT routine
const dsdot = (
  n: FInInteger,
  sx: FInRealArray,
  incx: FInInteger,
  sy: FInRealArray,
  incy: FInInteger,
): FDouble => {
  // Copyright (c) 1992-2013 The University of Tennessee and The University of Tennessee Research Foundation. All rights reserved.
  // Copyright (c) 2000-2013 The University of California Berkeley. All rights reserved.
  // Copyright (c) 2006-2013 The University of Colorado Denver. All rights reserved.
  // Copyright (c) 2023      Nicholas Ng. All rights reserved.

  // Arguments
  const _n: I = new Integer(n);
  const _sx: SA = new SingleArray(sx, 1 + (n - 1) * abs(incx));
  const _incx: I = new Integer(incx);
  const _sy: SA = new SingleArray(sy, 1 + (n - 1) * abs(incy));
  const _incy: I = new Integer(incy);

  // Return
  const _ret: D = new Double();

  // Resolve function
  const resolve = (): FDouble => {
    n = _n.get();
    sx = _sx.getAll();
    incx = _incx.get();
    sy = _sy.getAll();
    incy = _incy.get();
    return _ret.get();
  };

  // Local variables
  const i: I = new Integer();
  const kx: I = new Integer();
  const ky: I = new Integer();
  const ns: I = new Integer();

  // Process
  if (_n.le(0)) {
    return resolve();
  }
  if (_incx.eq(_incy.get()) && _incx.gt(0)) {
    ns.set(_n.get() * _incx.get());
    for (i.set(1); i.le(ns.get()); i.add(_incx.get())) {
      _ret.add(_sx.get(i.get()) * _sy.get(i.get()));
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
    for (i.set(1); i.le(_n.get()); i.add(1)) {
      _ret.add(_sx.get(kx.get()) * _sy.get(ky.get()));
      kx.add(_incx.get());
      ky.add(_incy.get());
    }
  }

  // Output
  return resolve();
};

// Export
export default dsdot;
