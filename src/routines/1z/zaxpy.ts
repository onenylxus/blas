// Import
import { DoubleComplex, Z } from '../../types/doubleComplex';
import { DoubleComplexArray, ZA } from '../../types/doubleComplexArray';
import { Integer, I } from '../../types/integer';
import { add, cabs, mul } from '../../mathlib';
import { vsize } from '../../macro';

// Input interface
interface Input extends FParameters {
  n: FInteger;
  za: FComplex;
  zx: FComplexArray;
  incx: FInteger;
  zy: FComplexArray;
  incy: FInteger;
}

// Output interface
interface Output extends FParameters {
  _ret: FEmpty;
  n: FInteger | FEmpty;
  za: FComplex | FEmpty;
  zx: FComplexArray | FEmpty;
  incx: FInteger | FEmpty;
  zy: FComplexArray;
  incy: FInteger | FEmpty;
}

// ZAXPY routine
const zaxpy = ({ n, za, zx, incx, zy, incy }: Input): Output => {
  // Copyright (c) 1992-2013 The University of Tennessee and The University of Tennessee Research Foundation. All rights reserved.
  // Copyright (c) 2000-2013 The University of California Berkeley. All rights reserved.
  // Copyright (c) 2006-2013 The University of Colorado Denver. All rights reserved.
  // Copyright (c) 2023-2024 Nicholas Ng. All rights reserved.

  // Arguments
  const _n: I = new Integer(n);
  const _za: Z = new DoubleComplex(za);
  const _zx: ZA = new DoubleComplexArray(zx);
  const _incx: I = new Integer(incx);
  const _zy: ZA = new DoubleComplexArray(zy);
  const _incy: I = new Integer(incy);

  // Resolve function
  const resolve = (): Output => ({
    _ret: undefined,
    n: _n.get(),
    za: _za.get(),
    zx: _zx.getAll(),
    incx: _incx.get(),
    zy: _zy.getAll(),
    incy: _incy.get(),
  });

  // Local variables
  const i: I = new Integer();
  const ix: I = new Integer();
  const iy: I = new Integer();

  // Process
  if (_n.le(0)) {
    return resolve();
  }
  if (cabs(_za) == 0) {
    return resolve();
  }
  if (_incx.eq(1) && _incy.eq(1)) {
    for (i.set(1); i.le(_n); i.add(1)) {
      _zy.set(i, add(_zy.get(i), mul(_za, _zx.get(i))));
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
      _zy.set(iy, add(_zy.get(iy), mul(_za, _zx.get(ix))));
      ix.add(_incx);
      iy.add(_incy);
    }
  }

  // Output
  return resolve();
};

// Export
export default zaxpy;
