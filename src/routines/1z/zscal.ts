// import
import { Integer, I } from '../../types/integer';
import { DoubleComplex, Z } from '../../types/doubleComplex';
import { DoubleComplexArray, ZA } from '../../types/doubleComplexArray';
import { mul } from '../../mathlib';

// Input interface
interface Input extends FParameters {
  n: FInteger;
  za: FDoubleComplex;
  zx: FDoubleComplexArray;
  incx: FInteger;
}

// Output interface
interface Output extends FParameters {
  _ret: FEmpty;
  n: FInteger | FEmpty;
  za: FDoubleComplex | FEmpty;
  zx: FDoubleComplexArray;
  incx: FInteger | FEmpty;
}

// ZSCAL routine
const zscal = ({ n, za, zx, incx }: Input): Output => {
  // Copyright (c) 1992-2013 The University of Tennessee and The University of Tennessee Research Foundation. All rights reserved.
  // Copyright (c) 2000-2013 The University of California Berkeley. All rights reserved.
  // Copyright (c) 2006-2013 The University of Colorado Denver. All rights reserved.
  // Copyright (c) 2023-2024 Nicholas Ng. All rights reserved.

  // Arguments
  const _n: I = new Integer(n);
  const _za: Z = new DoubleComplex(za);
  const _zx: ZA = new DoubleComplexArray(zx);
  const _incx: I = new Integer(incx);

  // Resolve function
  const resolve = (): Output => ({
    _ret: undefined,
    n: _n.get(),
    za: _za.get(),
    zx: _zx.getAll(),
    incx: _incx.get(),
  });

  // Local variables
  const i: I = new Integer();
  const nincx: I = new Integer();

  // Process
  if (_n.le(0) || _incx.le(0) || _za.eq(1)) {
    return resolve();
  }
  if (_incx.eq(1)) {
    for (i.set(1); i.le(_n); i.add(1)) {
      _zx.set(i, mul(_za.get(), _zx.get(i)));
    }
  } else {
    nincx.set(_n.get() * _incx.get());
    for (i.set(1); i.le(nincx); i.add(_incx)) {
      _zx.set(i, mul(_za.get(), _zx.get(i)));
    }
  }

  // Output
  return resolve();
};

// Export
export default zscal;
