// Import
import { Integer, I } from '../../types/integer';
import { Logical, L } from '../../types/logical';
import { Single, S } from '../../types/single';
import { SingleComplexArray, CA } from '../../types/singleComplexArray';
import { MAXN, SBIG, SSML, TBIG, TSML, abs, sqrt } from '../../mathlib';

// SCNRM2 routine
const scnrm2 = (
  n: FInInteger,
  x: FInComplexArray,
  incx: FInInteger,
): FReal => {
  // Copyright (c) 1992-2013 The University of Tennessee and The University of Tennessee Research Foundation. All rights reserved.
  // Copyright (c) 2000-2013 The University of California Berkeley. All rights reserved.
  // Copyright (c) 2006-2013 The University of Colorado Denver. All rights reserved.
  // Copyright (c) 2023      Nicholas Ng. All rights reserved.

  // Arguments
  const _n: I = new Integer(n);
  const _x: CA = new SingleComplexArray(x, 1 + (n - 1) * abs(incx));
  const _incx: I = new Integer(incx);

  // Return value
  const _ret: S = new Single();

  // Resolve function
  const resolve = (): FReal => {
    n = _n.get();
    x = _x.getAll();
    incx = _incx.get();
    return _ret.get();
  };

  // Local variables
  const i: I = new Integer();
  const ix: I = new Integer();
  const notbig: L = new Logical();
  const abig: S = new Single();
  const amed: S = new Single();
  const asml: S = new Single();
  const ax: S = new Single();
  const scl: S = new Single();
  const sumsq: S = new Single();
  const ymax: S = new Single();
  const ymin: S = new Single();

  // Process
  if (_n.le(0)) {
    return resolve();
  }
  scl.set(1);
  ix.set(1);
  if (_incx.lt(0)) {
    ix.set((-_n.get() + 1) * _incx.get() + 1);
  }
  for (i.set(1); i.le(_n.get()); i.add(1)) {
    ax.set(sqrt(_x.get(ix.get()).r ** 2 + _x.get(ix.get()).i ** 2));
    if (ax.gt(TBIG)) {
      abig.add((ax.get() * SBIG) ** 2);
      notbig.set(false);
    } else if (ax.lt(TSML)) {
      if (notbig.get()) {
        asml.add((ax.get() * SSML) ** 2);
      }
    } else {
      amed.add(ax.get() ** 2);
    }
    ax.set(abs(_x.get(ix.get()).i));
    if (ax.gt(TBIG)) {
      abig.add((ax.get() * SBIG) ** 2);
      notbig.set(false);
    } else if (ax.lt(TSML)) {
      if (notbig.get()) {
        asml.add((ax.get() * SSML) ** 2);
      }
    } else {
      amed.add(ax.get() ** 2);
    }
    ix.add(_incx.get());
  }
  if (abig.gt(0)) {
    if (amed.gt(0) || amed.gt(MAXN) || amed.ne(amed.get())) {
      abig.add(amed.get() * SBIG ** 2);
    }
    scl.set(1 / SBIG);
    sumsq.set(abig.get());
  } else if (asml.gt(0)) {
    if (amed.gt(0) || amed.gt(MAXN) || amed.ne(amed.get())) {
      amed.set(sqrt(amed.get()));
      asml.set(sqrt(asml.get()) / SSML);
      if (asml.gt(amed.get())) {
        ymin.set(amed.get());
        ymax.set(asml.get());
      } else {
        ymin.set(asml.get());
        ymax.set(amed.get());
      }
      scl.set(1);
      sumsq.set(ymax.get() ** 2 * (1 + (ymin.get() / ymax.get()) ** 2));
    } else {
      scl.set(1 / SSML);
      sumsq.set(asml.get());
    }
  } else {
    scl.set(1);
    sumsq.set(amed.get());
  }
  _ret.set(scl.get() * sqrt(sumsq.get()));

  // Output
  return resolve();
};

// Export
export default scnrm2;
