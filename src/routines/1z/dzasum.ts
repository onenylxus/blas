// Import
import { Double, D } from '../../types/double';
import { DoubleComplexArray, ZA } from '../../types/doubleComplexArray';
import { Integer, I } from '../../types/integer';
import { cabs, mul } from '../../mathlib';

// Input interface
interface Input extends FParameters {
  n: FInteger;
  zx: FDoubleComplexArray;
  incx: FInteger;
}

// Output interface
interface Output extends FParameters {
  _ret: FDouble;
  n: FInteger | FEmpty;
  zx: FDoubleComplexArray | FEmpty;
  incx: FInteger | FEmpty;
}

// DZASUM routine
const dzasum = ({ n, zx, incx }: Input): Output => {
  // Copyright (c) 1992-2013 The University of Tennessee and The University of Tennessee Research Foundation. All rights reserved.
  // Copyright (c) 2000-2013 The University of California Berkeley. All rights reserved.
  // Copyright (c) 2006-2013 The University of Colorado Denver. All rights reserved.
  // Copyright (c) 2023-2025 Nicholas Ng. All rights reserved.

  // Arguments
  const _n: I = new Integer(n);
  const _zx: ZA = new DoubleComplexArray(zx);
  const _incx: I = new Integer(incx);

  // Return value
  const _ret: D = new Double();

  // Resolve function
  const resolve = (): Output => ({
    _ret: _ret.get(),
    n: _n.get(),
    zx: _zx.getAll(),
    incx: _incx.get(),
  });

  // Local variables
  const stemp: D = new Double();
  const i: I = new Integer();
  const nincx: I = new Integer();

  // Process
  if (_n.le(0) || _incx.le(0)) {
    return resolve();
  }
  if (_incx.eq(1)) {
    for (i.set(1); i.le(n); i.add(1)) {
      stemp.add(cabs(_zx.get(i)));
    }
  } else {
    nincx.set(mul(_n, _incx));
    for (i.set(1); i.le(nincx); i.add(_incx)) {
      stemp.add(cabs(_zx.get(i)));
    }
  }
  _ret.set(stemp);

  // Output
  return resolve();
};

// Export
export default dzasum;
