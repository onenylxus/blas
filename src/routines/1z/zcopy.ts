// Import
import { Integer, I } from '../../types/integer';
import { DoubleComplexArray, ZA } from '../../types/doubleComplexArray';
import { abs } from '../../mathlib';

// ZCOPY routine
const zcopy = (
  n: FInInteger,
  cx: FInDoubleComplexArray,
  incx: FInInteger,
  cy: FOutDoubleComplexArray,
  incy: FInInteger,
): FVoid => {
  // Copyright (c) 1992-2013 The University of Tennessee and The University of Tennessee Research Foundation. All rights reserved.
  // Copyright (c) 2000-2013 The University of California Berkeley. All rights reserved.
  // Copyright (c) 2006-2013 The University of Colorado Denver. All rights reserved.
  // Copyright (c) 2023      Nicholas Ng. All rights reserved.

  // Arguments
  const _n: I = new Integer(n);
  const _cx: ZA = new DoubleComplexArray(cx, 1 + (n - 1) * abs(incx));
  const _incx: I = new Integer(incx);
  const _cy: ZA = new DoubleComplexArray(cy, 1 + (n - 1) * abs(incy));
  const _incy: I = new Integer(incy);

  // Resolve function
  const resolve = (): FVoid => {
    n = _n.get();
    cx = _cx.getAll();
    incx = _incx.get();
    cy = _cy.getAll();
    incy = _incy.get();
  };

  // Local variables
  const i: I = new Integer();
  const ix: I = new Integer();
  const iy: I = new Integer();

  // Process
  if (_n.le(0)) {
    return resolve();
  }
  if (_incx.eq(1) && _incy.eq(1)) {
    for (i.set(1); i.le(_n.get()); i.add(1)) {
      _cy.set(i.get(), _cx.get(i.get()));
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
    for (i.set(1); i.le(_n.get()); i.add(1)) {
      _cy.set(i.get(), _cx.get(i.get()));
      ix.add(_incx.get());
      iy.add(_incy.get());
    }
  }

  // Output
  return resolve();
};

// Export
export default zcopy;
