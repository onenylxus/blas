// Import
import { Double, D } from '../../types/double';
import { DoubleArray, DA } from '../../types/doubleArray';
import { Integer, I } from '../../types/integer';
import { Logical, L } from '../../types/logical';
import { MAXN, SBIG, SSML, TBIG, TSML, abs, sqrt } from '../../mathlib';

// Input interface
interface Input extends FParameters {
  n: FInteger;
  x: FDoubleArray;
  incx: FInteger;
}

// Output interface
interface Output extends FParameters {
  _ret: FDouble;
  n: FInteger | FEmpty;
  x: FDoubleArray | FEmpty;
  incx: FInteger | FEmpty;
}

// DNRM2 routine
const dnrm2 = ({ n, x, incx }: Input): Output => {
  // Copyright (c) 1992-2013 The University of Tennessee and The University of Tennessee Research Foundation. All rights reserved.
  // Copyright (c) 2000-2013 The University of California Berkeley. All rights reserved.
  // Copyright (c) 2006-2013 The University of Colorado Denver. All rights reserved.
  // Copyright (c) 2023-2024 Nicholas Ng. All rights reserved.

  // Arguments
  const _n: I = new Integer(n);
  const _x: DA = new DoubleArray(x);
  const _incx: I = new Integer(incx);

  // Return value
  const _ret: D = new Double();

  // Resolve function
  const resolve = (): Output => ({
    _ret: _ret.get(),
    n: _n.get(),
    x: _x.getAll(),
    incx: _incx.get(),
  });

  // Local variables
  const i: I = new Integer();
  const ix: I = new Integer();
  const notbig: L = new Logical();
  const abig: D = new Double();
  const amed: D = new Double();
  const asml: D = new Double();
  const ax: D = new Double();
  const scl: D = new Double();
  const sumsq: D = new Double();
  const ymax: D = new Double();
  const ymin: D = new Double();

  // Process
  if (_n.le(0)) {
    return resolve();
  }
  ix.set(1);
  if (_incx.lt(0)) {
    ix.set((-_n.get() + 1) * _incx.get() + 1);
  }
  for (i.set(1); i.le(_n); i.add(1)) {
    ax.set(abs(_x.get(ix)));
    if (ax.gt(TBIG)) {
      abig.add((ax.get() * SBIG) ** 2);
      notbig.set(false);
    } else if (ax.lt(TSML)) {
      if (notbig.get()) {
        asml.add((ax.get() ** SSML) ** 2);
      }
    } else {
      amed.add(ax.get() ** 2);
    }
    ix.add(_incx);
  }
  if (abig.gt(0)) {
    if (amed.gt(0) || amed.gt(MAXN) || amed.ne(amed)) {
      abig.add(amed.get() * SBIG ** 2);
    }
    scl.set(1 / SBIG);
    sumsq.set(abig);
  } else if (asml.gt(0)) {
    if (amed.gt(0) || amed.gt(MAXN) || amed.ne(amed)) {
      amed.set(sqrt(amed.get()));
      asml.set(sqrt(asml.get()) / SSML);
      if (asml.gt(amed)) {
        ymin.set(amed);
        ymax.set(asml);
      } else {
        ymin.set(asml);
        ymax.set(amed);
      }
      scl.set(1);
      sumsq.set(ymax.get() ** 2 * (1 + (ymin.get() / ymax.get()) ** 2));
    } else {
      scl.set(1 / SSML);
      sumsq.set(asml);
    }
  } else {
    scl.set(1);
    sumsq.set(amed);
  }
  _ret.set(scl.get() * sqrt(sumsq.get()));

  // Output
  return resolve();
};

// Export
export default dnrm2;
