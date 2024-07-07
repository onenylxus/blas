// Import
import { Integer, I } from '../../types/integer';
import { Double, D } from '../../types/double';
import { DoubleComplexArray, ZA } from '../../types/doubleComplexArray';
import _C from '../../../utils/complex';

// Input interface
interface Input extends FParameters {
  n: FInteger;
  da: FReal;
  zx: FComplexArray;
  incx: FInteger;
}

// Output interface
interface Output extends FParameters {
  _ret: FEmpty;
  n: FInteger | FEmpty;
  da: FReal | FEmpty;
  zx: FComplexArray;
  incx: FInteger | FEmpty;
}

// ZDSCAL routine
const zdscal = ({ n, da, zx, incx }: Input): Output => {
  // Copyright (c) 1992-2013 The University of Tennessee and The University of Tennessee Research Foundation. All rights reserved.
  // Copyright (c) 2000-2013 The University of California Berkeley. All rights reserved.
  // Copyright (c) 2006-2013 The University of Colorado Denver. All rights reserved.
  // Copyright (c) 2023-2024 Nicholas Ng. All rights reserved.

  // Arguments
  const _n: I = new Integer(n);
  const _da: D = new Double(da);
  const _zx: ZA = new DoubleComplexArray(zx);
  const _incx: I = new Integer(incx);

  // Resolve function
  const resolve = (): Output => ({
    _ret: undefined,
    n: _n.get(),
    da: _da.get(),
    zx: _zx.getAll(),
    incx: _incx.get(),
  });

  // Local variables
  const i: I = new Integer();
  const nincx: I = new Integer();

  // Process
  if (_n.le(0) || _incx.le(0) || _da.eq(1)) {
    return resolve();
  }
  if (_incx.eq(1)) {
    for (i.set(1); i.le(n); i.add(1)) {
      _zx.set(i, _C(_da.get() * _zx.get(i).r, _da.get() * _zx.get(i).i));
    }
  } else {
    nincx.set(_n.get() * _incx.get());
    for (i.set(1); i.le(nincx); i.add(_incx)) {
      _zx.set(i, _C(_da.get() * _zx.get(i).r, _da.get() * _zx.get(i).i));
    }
  }

  // Output
  return resolve();
};

// Export
export default zdscal;
