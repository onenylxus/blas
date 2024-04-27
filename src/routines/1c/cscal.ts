// Import
import { Integer, I } from '../../types/integer';
import { SingleComplex, C } from '../../types/singleComplex';
import { SingleComplexArray, CA } from '../../types/singleComplexArray';
import { mul } from '../../mathlib';

// Input interface
interface Input extends FParameters {
  n: FInteger;
  ca: FComplex;
  cx: FComplexArray;
  incx: FInteger;
}

// Output interface
interface Output extends FParameters {
  _ret: FEmpty;
  n: FInteger | FEmpty;
  ca: FComplex | FEmpty;
  cx: FComplexArray;
  incx: FInteger | FEmpty;
}

// CSCAL routine
const cscal = ({ n, ca, cx, incx }: Input): Output => {
  // Copyright (c) 1992-2013 The University of Tennessee and The University of Tennessee Research Foundation. All rights reserved.
  // Copyright (c) 2000-2013 The University of California Berkeley. All rights reserved.
  // Copyright (c) 2006-2013 The University of Colorado Denver. All rights reserved.
  // Copyright (c) 2023-2024 Nicholas Ng. All rights reserved.

  // Arguments
  const _n: I = new Integer(n);
  const _ca: C = new SingleComplex(ca);
  const _cx: CA = new SingleComplexArray(cx);
  const _incx: I = new Integer(incx);

  // Resolve function
  const resolve = (): Output => ({
    _ret: undefined,
    n: _n.get(),
    ca: _ca.get(),
    cx: _cx.getAll(),
    incx: _incx.get(),
  });

  // Local variables
  const i: I = new Integer();
  const nincx: I = new Integer();

  // Process
  if (_n.le(0) || _incx.le(0) || _ca.eq(1)) {
    return resolve();
  }
  if (_incx.eq(1)) {
    for (i.set(1); i.le(_n); i.add(1)) {
      _cx.set(i, mul(_ca.get(), _cx.get(i)));
    }
  } else {
    nincx.set(_n.get() * _incx.get());
    for (i.set(1); i.le(nincx); i.add(_incx)) {
      _cx.set(i, mul(_ca.get(), _cx.get(i)));
    }
  }

  // Output
  return resolve();
};

// Export
export default cscal;
