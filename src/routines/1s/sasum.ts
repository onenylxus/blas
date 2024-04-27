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
  _ret: FReal;
  n: FInteger | FEmpty;
  sx: FRealArray | FEmpty;
  incx: FInteger | FEmpty;
}

// SASUM routine
const sasum = ({ n, sx, incx }: Input): Output => {
  // Copyright (c) 1992-2013 The University of Tennessee and The University of Tennessee Research Foundation. All rights reserved.
  // Copyright (c) 2000-2013 The University of California Berkeley. All rights reserved.
  // Copyright (c) 2006-2013 The University of Colorado Denver. All rights reserved.
  // Copyright (c) 2023-2024 Nicholas Ng. All rights reserved.

  // Arguments
  const _n: I = new Integer(n);
  const _sx: SA = new SingleArray(sx);
  const _incx: I = new Integer(incx);

  // Return value
  const _ret: S = new Single();

  // Resolve function
  const resolve = (): Output => ({
    _ret: _ret.get(),
    n: _n.get(),
    sx: _sx.getAll(),
    incx: _incx.get(),
  });

  // Local variables
  const stemp: S = new Single();
  const i: I = new Integer();
  const m: I = new Integer();
  const mp1: I = new Integer();
  const nincx: I = new Integer();

  // Process
  if (_n.le(0) || _incx.le(0)) {
    return resolve();
  }
  if (_incx.eq(1)) {
    m.set(_n.get() % 6);
    if (m.ne(0)) {
      for (i.set(1); i.le(m); i.add(1)) {
        stemp.add(abs(_sx.get(i)));
      }
      if (_n.lt(6)) {
        _ret.set(stemp);
        return resolve();
      }
    }
    mp1.set(m.get() + 1);
    for (i.set(mp1); i.le(_n); i.add(6)) {
      stemp.add(abs(_sx.get(i)) + abs(_sx.get(i.get() + 1)) + abs(_sx.get(i.get() + 2)) + abs(_sx.get(i.get() + 3)) + abs(_sx.get(i.get() + 4)) + abs(_sx.get(i.get() + 5)));
    }
  } else {
    nincx.set(_n.get() * _incx.get());
    for (i.set(1); i.le(nincx); i.add(_incx)) {
      stemp.add(abs(_sx.get(i)));
    }
  }
  _ret.set(stemp);

  // Output
  return resolve();
};

// Export
export default sasum;
