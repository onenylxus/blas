// Import
import { Integer, I } from '../../types/integer';
import { Single, S } from '../../types/single';
import { SingleArray, SA } from '../../types/singleArray';
import { GAM, GAMSQ, RGAMSQ, abs } from '../../mathlib';

// Input interface
interface Input extends FParameters {
  sd1: FReal;
  sd2: FReal;
  sx1: FReal;
  sy1: FReal;
  sparam: FRealArray | FEmpty;
}

// Output interface
interface Output extends FParameters {
  _ret: FEmpty;
  sd1: FReal;
  sd2: FReal;
  sx1: FReal;
  sy1: FReal | FEmpty;
  sparam: FRealArray;
}

// SROTMG routine
const srotmg = ({ sd1, sd2, sx1, sy1, sparam }: Input): Output => {
  // Copyright (c) 1992-2013 The University of Tennessee and The University of Tennessee Research Foundation. All rights reserved.
  // Copyright (c) 2000-2013 The University of California Berkeley. All rights reserved.
  // Copyright (c) 2006-2013 The University of Colorado Denver. All rights reserved.
  // Copyright (c) 2023-2025 Nicholas Ng. All rights reserved.

  // Arguments
  const _sd1: S = new Single(sd1);
  const _sd2: S = new Single(sd2);
  const _sx1: S = new Single(sx1);
  const _sy1: S = new Single(sy1);
  const _sparam: SA = new SingleArray(sparam, 5);

  // Resolve function
  const resolve = (): Output => ({
    _ret: undefined,
    sd1: _sd1.get(),
    sd2: _sd2.get(),
    sx1: _sx1.get(),
    sy1: _sy1.get(),
    sparam: _sparam.getAll(),
  });

  // Local variables
  const sflag: I = new Integer();
  const sh11: S = new Single();
  const sh12: S = new Single();
  const sh21: S = new Single();
  const sh22: S = new Single();
  const sp1: S = new Single();
  const sp2: S = new Single();
  const sq1: S = new Single();
  const sq2: S = new Single();
  const stemp: S = new Single();
  const su: S = new Single();

  // Process
  if (_sd1.lt(0)) {
    sflag.set(-1);
    sh11.set(0);
    sh12.set(0);
    sh21.set(0);
    sh22.set(0);
    _sd1.set(0);
    _sd2.set(0);
    _sx1.set(0);
  } else {
    sp2.set(_sd2.get() * _sy1.get());
    if (sp2.eq(0)) {
      sflag.set(-2);
      _sparam.set(1, sflag);
      return resolve();
    }
    sp1.set(_sd1.get() * _sx1.get());
    sq2.set(sp2.get() * _sy1.get());
    sq1.set(sp1.get() * _sx1.get());
    if (abs(sq1.get()) > abs(sq2.get())) {
      sh21.set(-_sy1.get() / _sx1.get());
      sh12.set(sp2.get() / sp1.get());
      su.set(1 - sh12.get() / sh21.get());
      if (su.gt(0)) {
        sflag.set(0);
        _sd1.div(su);
        _sd2.div(su);
        _sx1.mul(su);
      } else {
        sflag.set(-1);
        sh11.set(0);
        sh12.set(0);
        sh21.set(0);
        sh22.set(0);
        _sd1.set(0);
        _sd2.set(0);
        _sx1.set(0);
      }
    } else {
      if (sq2.lt(0)) {
        sflag.set(-1);
        sh11.set(0);
        sh12.set(0);
        sh21.set(0);
        sh22.set(0);
        _sd1.set(0);
        _sd2.set(0);
        _sx1.set(0);
      } else {
        sflag.set(1);
        sh11.set(sp1.get() / sp2.get());
        sh22.set(_sx1.get() / _sy1.get());
        su.set(1 + sh11.get() * sh22.get());
        stemp.set(_sd2.get() / su.get());
        _sd2.set(_sd1.get() / su.get());
        _sd1.set(stemp);
        _sx1.set(_sy1.get() * su.get());
      }
    }
    if (_sd1.ne(0)) {
      while (_sd1.le(RGAMSQ) || _sd1.ge(GAMSQ)) {
        if (sflag.eq(0)) {
          sh11.set(1);
          sh22.set(1);
          sflag.set(-1);
        } else {
          sh21.set(-1);
          sh12.set(1);
          sflag.set(-1);
        }
        if (_sd1.le(RGAMSQ)) {
          _sd1.mul(GAMSQ);
          _sx1.div(GAM);
          sh11.div(GAM);
          sh12.div(GAM);
        } else {
          _sd1.div(GAMSQ);
          _sx1.mul(GAM);
          sh11.mul(GAM);
          sh12.mul(GAM);
        }
      }
    }
    if (_sd2.ne(0)) {
      while (abs(_sd2.get()) <= RGAMSQ || abs(_sd2.get()) >= GAMSQ) {
        if (sflag.eq(0)) {
          sh11.set(1);
          sh22.set(1);
          sflag.set(-1);
        } else {
          sh21.set(-1);
          sh12.set(1);
          sflag.set(-1);
        }
        if (abs(_sd2.get()) <= RGAMSQ) {
          _sd2.mul(GAMSQ);
          sh21.div(GAM);
          sh22.div(GAM);
        } else {
          _sd2.div(GAMSQ);
          sh21.mul(GAM);
          sh22.mul(GAM);
        }
      }
    }
  }
  if (sflag.lt(0)) {
    _sparam.set(2, sh11);
    _sparam.set(3, sh21);
    _sparam.set(4, sh12);
    _sparam.set(5, sh22);
  } else if (sflag.eq(0)) {
    _sparam.set(3, sh21);
    _sparam.set(4, sh12);
  } else {
    _sparam.set(2, sh11);
    _sparam.set(5, sh22);
  }
  _sparam.set(1, sflag);

  // Output
  return resolve();
};

// Export
export default srotmg;
