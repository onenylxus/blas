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
  sparam: FRealArray;
}

// Output interface
interface Output extends FParameters {
  _ret: FEmpty;
  n: FInteger | FEmpty;
  sx: FRealArray;
  incx: FInteger | FEmpty;
  sy: FRealArray;
  incy: FInteger | FEmpty;
  sparam: FRealArray | FEmpty;
}

// SROTM routine
const srotm = ({ n, sx, incx, sy, incy, sparam }: Input): Output => {
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
  const _sparam: SA = new SingleArray(sparam, 5);

  // Resolve function
  const resolve = (): Output => ({
    _ret: undefined,
    n: _n.get(),
    sx: _sx.getAll(),
    incx: _incx.get(),
    sy: _sy.getAll(),
    incy: _incy.get(),
    sparam: _sparam.getAll(),
  });

  // Local variables
  const sflag: I = new Integer();
  const sh11: S = new Single();
  const sh12: S = new Single();
  const sh21: S = new Single();
  const sh22: S = new Single();
  const w: S = new Single();
  const z: S = new Single();
  const i: I = new Integer();
  const kx: I = new Integer();
  const ky: I = new Integer();
  const nsteps: I = new Integer();

  // Process
  sflag.set(_sparam.get(1));
  if (_n.le(0) || sflag.get() + 2 === 0) {
    return resolve();
  }
  if (_incx.eq(_incy) && _incx.gt(0)) {
    nsteps.set(_n.get() * _incx.get());
    if (sflag.lt(0)) {
      sh11.set(_sparam.get(2));
      sh12.set(_sparam.get(4));
      sh21.set(_sparam.get(3));
      sh22.set(_sparam.get(5));
      for (i.set(1); i.le(nsteps); i.add(_incx)) {
        w.set(_sx.get(i));
        z.set(_sy.get(i));
        _sx.set(i, w.get() * sh11.get() + z.get() * sh12.get());
        _sy.set(i, w.get() * sh21.get() + z.get() * sh22.get());
      }
    } else if (sflag.eq(0)) {
      sh12.set(_sparam.get(4));
      sh21.set(_sparam.get(3));
      for (i.set(1); i.le(nsteps); i.add(_incx)) {
        w.set(_sx.get(i));
        z.set(_sy.get(i));
        _sx.set(i, w.get() + z.get() * sh12.get());
        _sy.set(i, w.get() * sh21.get() + z.get());
      }
    } else {
      sh11.set(_sparam.get(2));
      sh22.set(_sparam.get(5));
      for (i.set(1); i.le(nsteps); i.add(_incx)) {
        w.set(_sx.get(i));
        z.set(_sy.get(i));
        _sx.set(i, w.get() * sh11.get() + z.get());
        _sy.set(i, -w.get() + z.get() * sh22.get());
      }
    }
  } else {
    kx.set(1);
    ky.set(1);
    if (sflag.lt(0)) {
      sh11.set(_sparam.get(2));
      sh12.set(_sparam.get(4));
      sh21.set(_sparam.get(3));
      sh22.set(_sparam.get(5));
      for (i.set(1); i.le(_n); i.add(1)) {
        w.set(_sx.get(kx));
        z.set(_sy.get(ky));
        _sx.set(kx, w.get() * sh11.get() + z.get() * sh12.get());
        _sy.set(ky, w.get() * sh21.get() + z.get() * sh22.get());
        kx.add(_incx);
        ky.add(_incy);
      }
    } else if (sflag.eq(0)) {
      sh12.set(_sparam.get(4));
      sh21.set(_sparam.get(3));
      for (i.set(1); i.le(_n); i.add(1)) {
        w.set(_sx.get(kx));
        z.set(_sy.get(ky));
        _sx.set(kx, w.get() + z.get() * sh12.get());
        _sy.set(ky, w.get() * sh21.get() + z.get());
        kx.add(_incx);
        ky.add(_incy);
      }
    } else {
      sh11.set(_sparam.get(2));
      sh22.set(_sparam.get(5));
      for (i.set(1); i.le(_n); i.add(1)) {
        w.set(_sx.get(kx));
        z.set(_sy.get(ky));
        _sx.set(kx, w.get() * sh11.get() + z.get());
        _sy.set(ky, -w.get() + z.get() * sh22.get());
        kx.add(_incx);
        ky.add(_incy);
      }
    }
  }

  // Output
  return resolve();
};

// Export
export default srotm;
