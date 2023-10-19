// Import
import { Double, D } from '../../types/double';
import { DoubleArray, DA } from '../../types/doubleArray';
import { Integer, I } from '../../types/integer';
import { abs } from '../../mathlib';

// Input interface
interface Input extends FParameters {
  n: FInteger;
  dx: FDoubleArray;
  incx: FInteger;
}

// Output interface
interface Output extends FParameters {
  _ret: FInteger;
  n: FInteger | FEmpty;
  dx: FDoubleArray | FEmpty;
  incx: FInteger | FEmpty;
}

// IDAMAX routine
const idamax = ({ n, dx, incx }: Input): Output => {
  // Copyright (c) 1992-2013 The University of Tennessee and The University of Tennessee Research Foundation. All rights reserved.
  // Copyright (c) 2000-2013 The University of California Berkeley. All rights reserved.
  // Copyright (c) 2006-2013 The University of Colorado Denver. All rights reserved.
  // Copyright (c) 2023      Nicholas Ng. All rights reserved.

  // Arguments
  const _n: I = new Integer(n);
  const _dx: DA = new DoubleArray(dx);
  const _incx: I = new Integer(incx);

  // Return value
  const _ret: I = new Integer();

  // Resolve function
  const resolve = (): Output => ({
    _ret: _ret.get(),
    n: _n.get(),
    dx: _dx.getAll(),
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
    dmax.set(abs(_dx.get(1)));
    for (i.set(2); i.le(_n.get()); i.add(1)) {
      if (abs(_dx.get(i.get())) > dmax.get()) {
        _ret.set(i.get());
        dmax.set(abs(_dx.get(i.get())));
      }
    }
  } else {
    ix.set(1);
    dmax.set(abs(_dx.get(1)));
    ix.add(_incx.get());
    for (i.set(2); i.le(_n.get()); i.add(1)) {
      if (abs(_dx.get(ix.get())) > dmax.get()) {
        _ret.set(i.get());
        dmax.set(abs(_dx.get(ix.get())));
      }
      ix.add(_incx.get());
    }
  }

  // Output
  return resolve();
};

// Export
export default idamax;
