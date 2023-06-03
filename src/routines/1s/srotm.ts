// Import
import { Integer, I } from '../../types/integer';
import { Single, S } from '../../types/single';
import { SingleArray, SA } from '../../types/singleArray';

// Math library snippets
const { abs } = Math;

// SROTM routine
const srotm = (n: FInteger, sx: FRealArray, incx: FInteger, sy: FRealArray, incy: FInteger, sparam: FRealArray): FVoid => {
  // Copyright (c) 1992-2013 The University of Tennessee and The University of Tennessee Research Foundation. All rights reserved.
  // Copyright (c) 2000-2013 The University of California Berkeley. All rights reserved.
  // Copyright (c) 2006-2013 The University of Colorado Denver. All rights reserved.
  // Copyright (c) 2023      Nicholas Ng. All rights reserved.

  // Input
  const _n: I = new Integer(n);
  const _sx: SA = new SingleArray(sx, 1 + (n - 1) * abs(incx));
  const _incx: I = new Integer(incx);
  const _sy: SA = new SingleArray(sy, 1 + (n - 1) * abs(incy));
  const _incy: I = new Integer(incy);
  const _sparam: SA = new SingleArray(sparam, 5);

  // Local variables
  const sflag: I = new Integer();
  const sh11: S = new Single();
  const sh12: S = new Single();
  const sh21: S = new Single();
  const sh22: S = new Single();
  const w: S = new Single();
  const z: S = new Single();
  const kx: I = new Integer();
  const ky: I = new Integer();
  const nsteps: I = new Integer();

  // Return control
  const resolve = (): void => {
    n = _n.get();
    sx = _sx.getAll();
    incx = _incx.get();
    sy = _sy.getAll();
    incy = _incy.get();
    sparam = _sparam.getAll();
  };

  // Process
  sflag.set(_sparam.get(0)!);
  if (_n.get() <= 0 || sflag.get() === -2) {
    return resolve();
  }
  if (_incx.get() === _incy.get() && _incx.get() > 0) {
    nsteps.set(_n.get() * _incx.get());
    if (sflag.get() < 0) {
      sh11.set(_sparam.get(1)!);
      sh12.set(_sparam.get(3)!);
      sh21.set(_sparam.get(2)!);
      sh22.set(_sparam.get(4)!);
      for (let i = 0; i < nsteps.get(); i += _incx.get()) {
        w.set(_sx.get(i)!);
        z.set(_sy.get(i)!);
        _sx.set(i, w.get() * sh11.get() + z.get() * sh12.get());
        _sy.set(i, w.get() * sh21.get() + z.get() * sh22.get());
      }
    } else if (sflag.get() === 0) {
      sh12.set(_sparam.get(3)!);
      sh21.set(_sparam.get(2)!);
      for (let i = 0; i < nsteps.get(); i += _incx.get()) {
        w.set(_sx.get(i)!);
        z.set(_sy.get(i)!);
        _sx.set(i, w.get() + z.get() * sh12.get());
        _sy.set(i, w.get() * sh21.get() + z.get());
      }
    } else {
      sh11.set(_sparam.get(1)!);
      sh22.set(_sparam.get(4)!);
      for (let i = 0; i < nsteps.get(); i += _incx.get()) {
        w.set(_sx.get(i)!);
        z.set(_sy.get(i)!);
        _sx.set(i, w.get() * sh11.get() + z.get());
        _sy.set(i, -w.get() + z.get() * sh22.get());
      }
    }
  } else {
    if (_incx.get() < 0) {
      kx.set((1 - _n.get()) * _incx.get());
    }
    if (_incy.get() < 0) {
      ky.set((1 - _n.get()) * _incy.get());
    }
    if (sflag.get() < 0) {
      sh11.set(_sparam.get(1)!);
      sh12.set(_sparam.get(3)!);
      sh21.set(_sparam.get(2)!);
      sh22.set(_sparam.get(4)!);
      for (let i = 0; i < n; ++i) {
        w.set(_sx.get(kx.get())!);
        z.set(_sy.get(ky.get())!);
        _sx.set(kx.get(), w.get() * sh11.get() + z.get() * sh12.get());
        _sy.set(ky.get(), w.get() * sh21.get() + z.get() * sh22.get());
        kx.set(kx.get() + _incx.get());
        ky.set(ky.get() + _incy.get());
      }
    } else if (sflag.get() === 0) {
      sh12.set(_sparam.get(3)!);
      sh21.set(_sparam.get(2)!);
      for (let i = 0; i < n; ++i) {
        w.set(_sx.get(kx.get())!);
        z.set(_sy.get(ky.get())!);
        _sx.set(kx.get(), w.get() + z.get() * sh12.get());
        _sy.set(ky.get(), w.get() * sh21.get() + z.get());
        kx.set(kx.get() + _incx.get());
        ky.set(ky.get() + _incy.get());
      }
    } else {
      sh11.set(_sparam.get(1)!);
      sh22.set(_sparam.get(4)!);
      for (let i = 0; i < n; ++i) {
        w.set(_sx.get(kx.get())!);
        z.set(_sy.get(ky.get())!);
        _sx.set(kx.get(), w.get() * sh11.get() + z.get());
        _sy.set(ky.get(), -w.get() + z.get() * sh22.get());
        kx.set(kx.get() + _incx.get());
        ky.set(ky.get() + _incy.get());
      }
    }
  }

  // Output
  resolve();
};

// Export
export default srotm;
