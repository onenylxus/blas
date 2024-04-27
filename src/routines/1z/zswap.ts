// Import
import { Integer, I } from '../../types/integer';
import { DoubleComplex, Z } from '../../types/doubleComplex';
import { DoubleComplexArray, ZA } from '../../types/doubleComplexArray';

// Input interface
interface Input extends FParameters {
  n: FInteger;
  zx: FDoubleComplexArray;
  incx: FInteger;
  zy: FDoubleComplexArray;
  incy: FInteger;
}

// Output interface
interface Output extends FParameters {
  _ret: FEmpty;
  n: FInteger | FEmpty;
  zx: FDoubleComplexArray;
  incx: FInteger | FEmpty;
  zy: FDoubleComplexArray;
  incy: FInteger | FEmpty;
}

// ZSWAP routine
const zswap = ({ n, zx, incx, zy, incy }: Input): Output => {
  // Copyright (c) 1992-2013 The University of Tennessee and The University of Tennessee Research Foundation. All rights reserved.
  // Copyright (c) 2000-2013 The University of California Berkeley. All rights reserved.
  // Copyright (c) 2006-2013 The University of Colorado Denver. All rights reserved.
  // Copyright (c) 2023-2024 Nicholas Ng. All rights reserved.

  // Arguments
  const _n: I = new Integer(n);
  const _zx: ZA = new DoubleComplexArray(zx);
  const _incx: I = new Integer(incx);
  const _zy: ZA = new DoubleComplexArray(zy);
  const _incy: I = new Integer(incy);

  // Resolve function
  const resolve = (): Output => ({
    _ret: undefined,
    n: _n.get(),
    zx: _zx.getAll(),
    incx: _incx.get(),
    zy: _zy.getAll(),
    incy: _incy.get(),
  });

  // Local variables
  const ztemp: Z = new DoubleComplex();
  const i: I = new Integer();
  const ix: I = new Integer();
  const iy: I = new Integer();

  // Process
  if (_n.le(0)) {
    return resolve();
  }
  if (_incx.eq(1) && _incy.eq(1)) {
    for (i.set(1); i.le(_n); i.add(1)) {
      ztemp.set(_zx.get(i));
      _zx.set(i, _zy.get(i));
      _zy.set(i, ztemp);
    }
  } else {
    ix.set(1);
    iy.set(1);
    if (_incx.lt(0)) {
      ix.set((-_n.get() + 1) * _incx.get() + 1);
    }
    if (_incy.lt(0)) {
      iy.set((-_n.get() + 1) * _incy.get() + 1);
    }
    for (i.set(1); i.le(_n); i.add(1)) {
      ztemp.set(_zx.get(ix));
      _zx.set(ix, _zy.get(iy));
      _zy.set(iy, ztemp);
      ix.add(_incx);
      iy.add(_incy);
    }
  }

  // Output
  return resolve();
};

// Export
export default zswap;
