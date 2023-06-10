// Import
import { Integer, I } from '../../types/integer';
import { Single, S } from '../../types/single';
import { SingleArray, SA } from '../../types/singleArray';

// Math library snippets
const { abs } = Math;

// SSCAL routine
const sscal = (n: FInteger, sa: FReal, sx: FRealArray, incx: FInteger): FVoid => {
  // Copyright (c) 1992-2013 The University of Tennessee and The University of Tennessee Research Foundation. All rights reserved.
  // Copyright (c) 2000-2013 The University of California Berkeley. All rights reserved.
  // Copyright (c) 2006-2013 The University of Colorado Denver. All rights reserved.
  // Copyright (c) 2023      Nicholas Ng. All rights reserved.

  // Input
  const _n: I = new Integer(n);
  const _sa: S = new Single(sa);
  const _sx: SA = new SingleArray(sx, 1 + (n - 1) * abs(incx));
  const _incx: I = new Integer(incx);

  // Local variables
  const nincx: I = new Integer();

  // Return control
  const resolve = (): void => {
    n = _n.get();
    sa = _sa.get();
    sx = _sx.getAll();
    incx = _incx.get();
  };

  // Process
  if (_n.get() <= 0 || _incx.get() <= 0 || _sa.get() === 1) {
    return resolve();
  }
  if (_incx.get() === 1) {
    for (let i = 0; i < _n.get(); ++i) {
      _sx.set(i, _sa.get() * _sx.get(i)!);
    }
  } else {
    nincx.set(_n.get() * _incx.get());
    for (let i = 0; i < nincx.get(); ++i) {
      _sx.set(i, _sa.get() * _sx.get(i)!);
    }
  }

  // Output
  resolve();
};

// Export
export default sscal;
