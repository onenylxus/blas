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
  dparam: FDoubleArray;
}

// Output interface
interface Output extends FParameters {
  _ret: FEmpty;
  n: FInteger | FEmpty;
  dx: FDoubleArray;
  incx: FInteger | FEmpty;
  dy: FDoubleArray;
  incy: FInteger | FEmpty;
  dparam: FDoubleArray | FEmpty;
}

// DROTM routine
const drotm = ({ n, dx, incx, dy, incy, dparam }: Input): Output => {
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
  const _dparam: DA = new DoubleArray(dparam, 5);

  // Resolve function
  const resolve = (): Output => ({
    _ret: undefined,
    n: _n.get(),
    dx: _dx.getAll(),
    incx: _incx.get(),
    dy: _dy.getAll(),
    incy: _incy.get(),
    dparam: _dparam.getAll(),
  });

  // Local variables
  const dflag: I = new Integer();
  const dh11: D = new Double();
  const dh12: D = new Double();
  const dh21: D = new Double();
  const dh22: D = new Double();
  const w: D = new Double();
  const z: D = new Double();
  const i: I = new Integer();
  const kx: I = new Integer();
  const ky: I = new Integer();
  const nsteps: I = new Integer();

  // Process
  dflag.set(_dparam.get(1));
  if (_n.le(0) || dflag.get() + 2 === 0) {
    return resolve();
  }
  if (_incx.eq(_incy.get()) && _incx.gt(0)) {
    nsteps.set(_n.get() * _incx.get());
    if (dflag.lt(0)) {
      dh11.set(_dparam.get(2));
      dh12.set(_dparam.get(4));
      dh21.set(_dparam.get(3));
      dh22.set(_dparam.get(5));
      for (i.set(1); i.le(nsteps.get()); i.add(_incx.get())) {
        w.set(_dx.get(i.get()));
        z.set(_dy.get(i.get()));
        _dx.set(i.get(), w.get() * dh11.get() + z.get() * dh12.get());
        _dy.set(i.get(), w.get() * dh21.get() + z.get() * dh22.get());
      }
    } else if (dflag.eq(0)) {
      dh12.set(_dparam.get(4));
      dh21.set(_dparam.get(3));
      for (i.set(1); i.le(nsteps.get()); i.add(_incx.get())) {
        w.set(_dx.get(i.get()));
        z.set(_dy.get(i.get()));
        _dx.set(i.get(), w.get() + z.get() * dh12.get());
        _dy.set(i.get(), w.get() * dh21.get() + z.get());
      }
    } else {
      dh11.set(_dparam.get(2));
      dh22.set(_dparam.get(5));
      for (i.set(1); i.le(nsteps.get()); i.add(_incx.get())) {
        w.set(_dx.get(i.get()));
        z.set(_dy.get(i.get()));
        _dx.set(i.get(), w.get() * dh11.get() + z.get());
        _dy.set(i.get(), -w.get() + z.get() * dh22.get());
      }
    }
  } else {
    kx.set(1);
    ky.set(1);
    if (dflag.lt(0)) {
      dh11.set(_dparam.get(2));
      dh12.set(_dparam.get(4));
      dh21.set(_dparam.get(3));
      dh22.set(_dparam.get(5));
      for (i.set(1); i.le(_n.get()); i.add(1)) {
        w.set(_dx.get(kx.get()));
        z.set(_dy.get(ky.get()));
        _dx.set(kx.get(), w.get() * dh11.get() + z.get() * dh12.get());
        _dy.set(ky.get(), w.get() * dh21.get() + z.get() * dh22.get());
        kx.add(_incx.get());
        ky.add(_incy.get());
      }
    } else if (dflag.eq(0)) {
      dh12.set(_dparam.get(4));
      dh21.set(_dparam.get(3));
      for (i.set(1); i.le(_n.get()); i.add(1)) {
        w.set(_dx.get(kx.get()));
        z.set(_dy.get(ky.get()));
        _dx.set(kx.get(), w.get() + z.get() * dh12.get());
        _dy.set(ky.get(), w.get() * dh21.get() + z.get());
        kx.add(_incx.get());
        ky.add(_incy.get());
      }
    } else {
      dh11.set(_dparam.get(2));
      dh22.set(_dparam.get(5));
      for (i.set(1); i.le(_n.get()); i.add(1)) {
        w.set(_dx.get(kx.get()));
        z.set(_dy.get(ky.get()));
        _dx.set(kx.get(), w.get() * dh11.get() + z.get());
        _dy.set(ky.get(), -w.get() + z.get() * dh22.get());
        kx.add(_incx.get());
        ky.add(_incy.get());
      }
    }
  }

  // Output
  return resolve();
};

// Export
export default drotm;
