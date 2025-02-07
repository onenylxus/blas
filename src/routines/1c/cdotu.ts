import { Integer, I } from '../../types/integer';
import { SingleComplex, C } from '../../types/singleComplex';
import { SingleComplexArray, CA } from '../../types/singleComplexArray';
import { mul } from '../../mathlib';
import { vsize } from '../../macro';

// Input interface
interface Input extends FParameters {
  n: FInteger;
  cx: FComplexArray;
  incx: FInteger;
  cy: FComplexArray;
  incy: FInteger;
}

// Output interface
interface Output extends FParameters {
  _ret: FComplex;
  n: FInteger | FEmpty;
  cx: FComplexArray | FEmpty;
  incx: FInteger | FEmpty;
  cy: FComplexArray | FEmpty;
  incy: FInteger | FEmpty;
}

// CDOTU routine
const cdotu = ({ n, cx, incx, cy, incy }: Input): Output => {
  // Copyright (c) 1992-2013 The University of Tennessee and The University of Tennessee Research Foundation. All rights reserved.
  // Copyright (c) 2000-2013 The University of California Berkeley. All rights reserved.
  // Copyright (c) 2006-2013 The University of Colorado Denver. All rights reserved.
  // Copyright (c) 2023-2025 Nicholas Ng. All rights reserved.

  // Arguments
  const _n: I = new Integer(n);
  const _cx: CA = new SingleComplexArray(cx);
  const _incx: I = new Integer(incx);
  const _cy: CA = new SingleComplexArray(cy);
  const _incy: I = new Integer(incy);

  // Return value
  const _ret: C = new SingleComplex();

  // Resolve function
  const resolve = (): Output => ({
    _ret: _ret.get(),
    n: _n.get(),
    cx: _cx.getAll(),
    incx: _incx.get(),
    cy: _cy.getAll(),
    incy: _incy.get(),
  });

  // Local variables
  const ctemp: C = new SingleComplex();
  const i: I = new Integer();
  const ix: I = new Integer();
  const iy: I = new Integer();

  // Process
  if (_n.le(0)) {
    return resolve();
  }
  if (_incx.eq(1) && _incy.eq(1)) {
    for (i.set(1); i.le(_n); i.add(1)) {
      ctemp.add(mul(_cx.get(i), _cy.get(i)));
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
      ctemp.add(mul(_cx.get(ix), _cy.get(iy)));
      ix.add(_incx);
      iy.add(_incy);
    }
  }
  _ret.set(ctemp);

  // Output
  return resolve();
};

// Export
export default cdotu;
