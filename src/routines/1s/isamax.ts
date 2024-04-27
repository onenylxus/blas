// Import
import { Integer, I } from '../../types/integer';
import { Single, S } from '../../types/single';
import { SingleArray, SA } from '../../types/singleArray';
import { abs } from '../../mathlib';

// Input interface
interface Input extends FParameters {
  n: FInteger;
  sx: FRealArray;
  incx: FInteger;
}

// Output interface
interface Output extends FParameters {
  _ret: FInteger;
  n: FInteger | FEmpty;
  sx: FRealArray | FEmpty;
  incx: FInteger | FEmpty;
}

// ISAMAX routine
const isamax = ({ n, sx, incx }: Input): Output => {
  // Copyright (c) 1992-2013 The University of Tennessee and The University of Tennessee Research Foundation. All rights reserved.
  // Copyright (c) 2000-2013 The University of California Berkeley. All rights reserved.
  // Copyright (c) 2006-2013 The University of Colorado Denver. All rights reserved.
  // Copyright (c) 2023-2024 Nicholas Ng. All rights reserved.

  // Arguments
  const _n: I = new Integer(n);
  const _sx: SA = new SingleArray(sx);
  const _incx: I = new Integer(incx);

  // Return value
  const _ret: I = new Integer();

  // Resolve function
  const resolve = (): Output => ({
    _ret: _ret.get(),
    n: _n.get(),
    sx: _sx.getAll(),
    incx: _incx.get(),
  });

  // Local variables
  const smax: S = new Single();
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
    smax.set(abs(_sx.get(1)));
    for (i.set(2); i.le(_n); i.add(1)) {
      if (abs(_sx.get(i)) > smax.get()) {
        _ret.set(i);
        smax.set(abs(_sx.get(i)));
      }
    }
  } else {
    ix.set(1);
    smax.set(abs(_sx.get(1)));
    ix.add(_incx);
    for (i.set(2); i.le(_n); i.add(1)) {
      if (abs(_sx.get(ix)) > smax.get()) {
        _ret.set(i);
        smax.set(abs(_sx.get(ix)));
      }
      ix.add(_incx);
    }
  }

  // Output
  return resolve();
};

// Export
export default isamax;
