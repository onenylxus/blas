// Import
import { toDual } from '../../../utils/complex';
import { Integer, I } from '../../types/integer';
import { Single, S } from '../../types/single';
import { SingleComplexArray, CA } from '../../types/singleComplexArray';

// Input interface
interface Input extends FParameters {
  n: FInteger;
  sa: FReal;
  cx: FComplexArray;
  incx: FInteger;
}

// Output interface
interface Output extends FParameters {
  _ret: FEmpty;
  n: FInteger | FEmpty;
  sa: FReal | FEmpty;
  cx: FComplexArray;
  incx: FInteger | FEmpty;
}

// CSSCAL routine
const csscal = ({ n, sa, cx, incx }: Input): Output => {
  // Copyright (c) 1992-2013 The University of Tennessee and The University of Tennessee Research Foundation. All rights reserved.
  // Copyright (c) 2000-2013 The University of California Berkeley. All rights reserved.
  // Copyright (c) 2006-2013 The University of Colorado Denver. All rights reserved.
  // Copyright (c) 2023-2025 Nicholas Ng. All rights reserved.

  // Arguments
  const _n: I = new Integer(n);
  const _sa: S = new Single(sa);
  const _cx: CA = new SingleComplexArray(cx);
  const _incx: I = new Integer(incx);

  // Resolve function
  const resolve = (): Output => ({
    _ret: undefined,
    n: _n.get(),
    sa: _sa.get(),
    cx: _cx.getAll(),
    incx: _incx.get(),
  });

  // Local variables
  const i: I = new Integer();
  const nincx: I = new Integer();

  // Process
  if (_n.le(0) || _incx.le(0) || _sa.eq(1)) {
    return resolve();
  }
  if (_incx.eq(1)) {
    for (i.set(1); i.le(n); i.add(1)) {
      _cx.set(i, toDual(_sa.get() * _cx.get(i).r, _sa.get() * _cx.get(i).i));
    }
  } else {
    nincx.set(_n.get() * _incx.get());
    for (i.set(1); i.le(nincx); i.add(_incx)) {
      _cx.set(i, toDual(_sa.get() * _cx.get(i).r, _sa.get() * _cx.get(i).i));
    }
  }

  // Output
  return resolve();
};

// Export
export default csscal;
