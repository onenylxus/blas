// Import
import { Integer, I } from '../../types/integer';
import { Logical, L } from '../../types/logical';
import { Single, S } from '../../types/single';
import { SingleArray, SA } from '../../types/singleArray';
import { MAXN, SBIG, SSML, TBIG, TSML } from '../../mathlib';
import { abs, sqrt } from '../../mathlib';

// Input interface
interface Input extends FParameters {
  n: FInteger;
  x: FRealArray;
  incx: FInteger;
}

// Output interface
interface Output extends FParameters {
  _ret: FReal;
  n: FInteger | FEmpty;
  x: FRealArray | FEmpty;
  incx: FInteger | FEmpty;
}

// SNRM2 routine
const snrm2 = ({ n, x, incx }: Input): Output => {
  // Copyright (c) 1992-2013 The University of Tennessee and The University of Tennessee Research Foundation. All rights reserved.
  // Copyright (c) 2000-2013 The University of California Berkeley. All rights reserved.
  // Copyright (c) 2006-2013 The University of Colorado Denver. All rights reserved.
  // Copyright (c) 2023      Nicholas Ng. All rights reserved.

  // Arguments
  const _n: I = new Integer(n);
  const _x: SA = new SingleArray(x, 1 + (n - 1) * abs(incx));
  const _incx: I = new Integer(incx);

  // Return value
  const _ret: S = new Single();

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
  const abig: S = new Single();
  const amed: S = new Single();
  const asml: S = new Single();
  const ax: S = new Single();
  const scl: S = new Single();
  const sumsq: S = new Single();
  const ymax: S = new Single();
  const ymin: S = new Single();

  // Process
  ix.set(1);
  if (_incx.lt(0)) {
    ix.set((-_n.get() + 1) * _incx.get() + 1);
  }
  for (i.set(1); i.le(_n.get()); i.add(1)) {
    ax.set(abs(_x.get(ix.get())));
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
export default snrm2;
