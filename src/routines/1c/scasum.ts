// Import
import { Integer, I } from '../../types/integer';
import { Single, S } from '../../types/single';
import { SingleComplexArray, CA } from '../../types/singleComplexArray';
import { cabs, mul } from '../../mathlib';

// Input interface
interface Input extends FParameters {
  n: FInteger;
  cx: FComplexArray;
  incx: FInteger;
}

// Output interface
interface Output extends FParameters {
  _ret: FReal;
  n: FInteger | FEmpty;
  cx: FComplexArray | FEmpty;
  incx: FInteger | FEmpty;
}

// SCASUM routine
const scasum = ({ n, cx, incx }: Input): Output => {
  // Copyright (c) 1992-2013 The University of Tennessee and The University of Tennessee Research Foundation. All rights reserved.
  // Copyright (c) 2000-2013 The University of California Berkeley. All rights reserved.
  // Copyright (c) 2006-2013 The University of Colorado Denver. All rights reserved.
  // Copyright (c) 2023-2024 Nicholas Ng. All rights reserved.

  // Arguments
  const _n: I = new Integer(n);
  const _cx: CA = new SingleComplexArray(cx);
  const _incx: I = new Integer(incx);

  // Return value
  const _ret: S = new Single();

  // Resolve function
  const resolve = (): Output => ({
    _ret: _ret.get(),
    n: _n.get(),
    cx: _cx.getAll(),
    incx: _incx.get(),
  });

  // Local variables
  const stemp: S = new Single();
  const i: I = new Integer();
  const nincx: I = new Integer();

  // Process
  if (_n.le(0) || _incx.le(0)) {
    return resolve();
  }
  if (_incx.eq(1)) {
    for (i.set(1); i.le(n); i.add(1)) {
      stemp.add(cabs(_cx.get(i)));
    }
  } else {
    nincx.set(mul(_n, _incx));
    for (i.set(1); i.le(nincx); i.add(_incx)) {
      stemp.add(cabs(_cx.get(i)));
    }
  }
  _ret.set(stemp);

  // Output
  return resolve();
};

// Export
export default scasum;
