// Import
import { Integer, I } from '../../types/integer';
import { Double, D } from '../../types/double';
import { DoubleComplexArray, ZA } from '../../types/doubleComplexArray';
import { cabs } from '../../mathlib';

// Input interface
interface Input extends FParameters {
  n: FInteger;
  zx: FComplexArray;
  incx: FInteger;
}

// Output interface
interface Output extends FParameters {
  _ret: FInteger;
  n: FInteger | FEmpty;
  zx: FComplexArray | FEmpty;
  incx: FInteger | FEmpty;
}

// IZAMAX routine
const izamax = ({ n, zx, incx }: Input): Output => {
  // Copyright (c) 1992-2013 The University of Tennessee and The University of Tennessee Research Foundation. All rights reserved.
  // Copyright (c) 2000-2013 The University of California Berkeley. All rights reserved.
  // Copyright (c) 2006-2013 The University of Colorado Denver. All rights reserved.
  // Copyright (c) 2023-2025 Nicholas Ng. All rights reserved.

  // Arguments
  const _n: I = new Integer(n);
  const _zx: ZA = new DoubleComplexArray(zx);
  const _incx: I = new Integer(incx);

  // Return value
  const _ret: I = new Integer();

  // Resolve function
  const resolve = (): Output => ({
    _ret: _ret.get(),
    n: _n.get(),
    zx: _zx.getAll(),
    incx: _incx.get(),
  });

  // Local variables
  const dmax: D = new Double();
  const i: I = new Integer();
  const ix: I = new Integer();

  // Process
  if (_n.lt(1) || _incx.le(0)) {
    return resolve();
  }
  _ret.set(1);
  if (_n.eq(1)) {
    return resolve();
  }
  if (_incx.eq(1)) {
    dmax.set(cabs(_zx.get(1)));
    for (i.set(2); i.le(_n); i.add(1)) {
      if (cabs(_zx.get(i)) > dmax.get()) {
        _ret.set(i);
        dmax.set(cabs(_zx.get(i)));
      }
    }
  } else {
    ix.set(1);
    dmax.set(cabs(_zx.get(1)));
    ix.add(_incx);
    for (i.set(2); i.le(_n); i.add(1)) {
      if (cabs(_zx.get(ix)) > dmax.get()) {
        _ret.set(i);
        dmax.set(cabs(_zx.get(ix)));
      }
      ix.add(_incx);
    }
  }

  // Output
  return resolve();
};

// Export
export default izamax;
