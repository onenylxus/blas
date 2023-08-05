// Import
import { Integer, I } from '../../types/integer';
import { Single, S } from '../../types/single';
import { SingleArray, SA } from '../../types/singleArray';

// Math library snippets
const { abs } = Math;

// ISAMAX routine
const isamax = (n: FInteger, sx: FRealArray, incx: FInteger): FInteger => {
  // Copyright (c) 1992-2013 The University of Tennessee and The University of Tennessee Research Foundation. All rights reserved.
  // Copyright (c) 2000-2013 The University of California Berkeley. All rights reserved.
  // Copyright (c) 2006-2013 The University of Colorado Denver. All rights reserved.
  // Copyright (c) 2023      Nicholas Ng. All rights reserved.

  // Arguments
  const _n: I = new Integer(n);
  const _sx: SA = new SingleArray(sx, 1 + (n - 1) * abs(incx));
  const _incx: I = new Integer(incx);

  // Return value
  const _ret: I = new Integer();

  // Resolve function
  const resolve = (): FInteger => {
    n = _n.get();
    sx = _sx.getAll();
    incx = _incx.get();
    return _ret.get();
  };

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
    for (i.set(2); i.le(_n.get()); i.add(1)) {
      if (abs(_sx.get(i.get())) > smax.get()) {
        _ret.set(i.get());
        smax.set(abs(_sx.get(i.get())));
      }
    }
  } else {
    ix.set(1);
    smax.set(abs(_sx.get(1)));
    ix.add(_incx.get());
    for (i.set(2); i.le(_n.get()); i.add(1)) {
      if (abs(_sx.get(ix.get())) > smax.get()) {
        _ret.set(i.get());
        smax.set(abs(_sx.get(ix.get())));
      }
      ix.add(_incx.get());
    }
  }

  // Output
  return resolve();
};

// Export
export default isamax;
