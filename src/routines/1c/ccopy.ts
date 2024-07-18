// Import
import { Integer, I } from '../../types/integer';
import { SingleComplexArray, CA } from '../../types/singleComplexArray';
import { vsize } from '../../macro';

// Input interface
interface Input extends FParameters {
  n: FInteger;
  cx: FComplexArray;
  incx: FInteger;
  cy: FComplexArray | FEmpty;
  incy: FInteger;
}

// Output interface
interface Output extends FParameters {
  _ret: FEmpty;
  n: FInteger | FEmpty;
  cx: FComplexArray | FEmpty;
  incx: FInteger | FEmpty;
  cy: FComplexArray;
  incy: FInteger | FEmpty;
}

// CCOPY routine
const ccopy = ({ n, cx, incx, cy, incy }: Input): Output => {
  // Copyright (c) 1992-2013 The University of Tennessee and The University of Tennessee Research Foundation. All rights reserved.
  // Copyright (c) 2000-2013 The University of California Berkeley. All rights reserved.
  // Copyright (c) 2006-2013 The University of Colorado Denver. All rights reserved.
  // Copyright (c) 2023-2024 Nicholas Ng. All rights reserved.

  // Arguments
  const _n: I = new Integer(n);
  const _cx: CA = new SingleComplexArray(cx);
  const _incx: I = new Integer(incx);
  const _cy: CA = new SingleComplexArray(cy);
  const _incy: I = new Integer(incy);

  // Resolve function
  const resolve = (): Output => ({
    _ret: undefined,
    n: _n.get(),
    cx: _cx.getAll(),
    incx: _incx.get(),
    cy: _cy.getAll(),
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
  if (_incx.eq(1) && _incy.eq(1)) {
    for (i.set(1); i.le(_n); i.add(1)) {
      _cy.set(i, _cx.get(i));
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
      _cy.set(i, _cx.get(i));
      ix.add(_incx);
      iy.add(_incy);
    }
  }

  // Output
  return resolve();
};

// Export
export default ccopy;
