// Import
import { Integer, I } from '../../types/integer';
import { Single, S } from '../../types/single';
import { SingleArray, SA } from '../../types/singleArray';

// Input interface
interface Input extends FParameters {
  n: FInteger;
  sa: FReal;
  sx: FRealArray;
  incx: FInteger;
}

// Output interface
interface Output extends FParameters {
  _ret: FEmpty;
  n: FInteger | FEmpty;
  sa: FReal | FEmpty;
  sx: FRealArray;
  incx: FInteger | FEmpty;
}

// SSCAL routine
const sscal = ({ n, sa, sx, incx }: Input): Output => {
  // Copyright (c) 1992-2013 The University of Tennessee and The University of Tennessee Research Foundation. All rights reserved.
  // Copyright (c) 2000-2013 The University of California Berkeley. All rights reserved.
  // Copyright (c) 2006-2013 The University of Colorado Denver. All rights reserved.
  // Copyright (c) 2023-2025 Nicholas Ng. All rights reserved.

  // Arguments
  const _n: I = new Integer(n);
  const _sa: S = new Single(sa);
  const _sx: SA = new SingleArray(sx);
  const _incx: I = new Integer(incx);

  // Resolve function
  const resolve = (): Output => ({
    _ret: undefined,
    n: _n.get(),
    sa: _sa.get(),
    sx: _sx.getAll(),
    incx: _incx.get(),
  });

  // Local variables
  const i: I = new Integer();
  const m: I = new Integer();
  const mp1: I = new Integer();
  const nincx: I = new Integer();

  // Process
  if (_n.le(0) || _incx.le(0) || _sa.eq(1)) {
    return resolve();
  }
  if (_incx.eq(1)) {
    m.set(_n.get() % 5);
    if (m.ne(0)) {
      for (i.set(1); i.le(m); i.add(1)) {
        _sx.set(i, _sa.get() * _sx.get(i));
      }
      if (_n.lt(5)) {
        return resolve();
      }
    }
    mp1.set(m.get() + 1);
    for (i.set(mp1.get()); i.le(_n); i.add(5)) {
      _sx.set(i, _sa.get() * _sx.get(i));
      _sx.set(i.get() + 1, _sa.get() * _sx.get(i.get() + 1));
      _sx.set(i.get() + 2, _sa.get() * _sx.get(i.get() + 2));
      _sx.set(i.get() + 3, _sa.get() * _sx.get(i.get() + 3));
      _sx.set(i.get() + 4, _sa.get() * _sx.get(i.get() + 4));
    }
  } else {
    nincx.set(_n.get() * _incx.get());
    for (i.set(1); i.le(nincx); i.add(_incx)) {
      _sx.set(i, _sa.get() * _sx.get(i));
    }
  }

  // Output
  return resolve();
};

// Export
export default sscal;
