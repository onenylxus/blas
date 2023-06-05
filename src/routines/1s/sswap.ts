// Import
import { Integer, I } from '../../types/integer';
import { Single, S } from '../../types/single';
import { SingleArray, SA } from '../../types/singleArray';

// Math library snippets
const { abs } = Math;

// SSWAP routine
const sswap = (n: FInteger, sx: FRealArray, incx: FInteger, sy: FRealArray, incy: FInteger): FVoid => {
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

  // Local variables
  const stemp: S = new Single();
  const ix: I = new Integer();
  const iy: I = new Integer();

  // Return control
  const resolve = (): void => {
    n = _n.get();
    sx = _sx.getAll();
    incx = _incx.get();
    sy = _sy.getAll();
    incy = _incy.get();
  };

  // Process
  if (_n.get() <= 0) {
    return resolve();
  }
  if (_incx.get() === 1 && _incy.get() === 1) {
    for (let i = 0; i < _n.get(); ++i) {
      stemp.set(_sx.get(i)!);
      _sx.set(i, _sy.get(i)!);
      _sy.set(i, stemp.get());
    }
  } else {
    if (_incx.get() < 0) {
      ix.set((-_n.get() + 1) * _incx.get());
      iy.set((-_n.get() + 1) * _incy.get());
      for (let i = 0; i < _n.get(); ++i) {
        stemp.set(_sx.get(ix.get())!);
        _sx.set(ix.get(), _sy.get(iy.get())!);
        _sy.set(iy.get(), stemp.get());
        ix.set(ix.get() + _incx.get());
        iy.set(iy.get() + _incy.get());
      }
    }
  }

  // Output
  resolve();
};

// Export
export default sswap;
