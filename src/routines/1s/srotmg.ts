// Import
import { Single, S } from '../../types/single';
import { SingleArray, SA } from '../../types/singleArray';
import { Integer, I } from '../../types/integer';

// Math library snippets
const { abs } = Math;

// SROTMG routine
const srotmg = (sd1: FReal, sd2: FReal, sx1: FReal, sy1: FReal, sparam: FRealArray | FEmpty): FVoid => {
  // Copyright (c) 1992-2013 The University of Tennessee and The University of Tennessee Research Foundation. All rights reserved.
  // Copyright (c) 2000-2013 The University of California Berkeley. All rights reserved.
  // Copyright (c) 2006-2013 The University of Colorado Denver. All rights reserved.
  // Copyright (c) 2023      Nicholas Ng. All rights reserved.

  // Input
  const _sd1: S = new Single(sd1);
  const _sd2: S = new Single(sd2);
  const _sx1: S = new Single(sx1);
  const _sy1: S = new Single(sy1);
  const _sparam: SA = new SingleArray(sparam, 5);

  // Local variables
  const gam: S = new Single(4096);
  const gamsq: S = new Single(4096 ** 2);
  const rgamsq: S = new Single(1 / (4096 ** 2));
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

  // Return control
  const resolve = (): void => {
    sd1 = _sd1.get();
    sd2 = _sd2.get();
    sx1 = _sx1.get();
    sy1 = _sy1.get();
    sparam = _sparam.getAll();
  };

  // Process
  if (_sd1.get() < 0) {
    sflag.set(-1);
    sh11.set(0);
    sh12.set(0);
    sh21.set(0);
    sh22.set(0);
    _sd1.set(0);
    _sd2.set(0);
    _sx1.set(0);
  }
  else {
    sp2.set(_sd2.get() * _sy1.get());
    if (sp2.get() === 0) {
      sflag.set(-2);
      _sparam.set(0, sflag.get());
      return resolve();
    }
    sp1.set(_sd1.get() * _sx1.get());
    sq2.set(sp2.get() * _sy1.get());
    sq1.set(sp1.get() * _sx1.get());
    if (abs(sq1.get()) > abs(sq2.get())) {
      sh21.set(-_sy1.get() / _sx1.get());
      sh12.set(sp2.get() / sp1.get());
      su.set(1 - sh12.get() / sh21.get());
      if (su.get() > 0) {
        sflag.set(0);
        _sd1.set(_sd1.get() / su.get());
        _sd2.set(_sd2.get() / su.get());
        _sx1.set(_sx1.get() * su.get());
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
      if (sq2.get() < 0) {
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
        _sd1.set(stemp.get());
        _sx1.set(_sy1.get() * su.get());
      }
    }
    if (_sd1.get() !== 0) {
      while (_sd1.get() <= rgamsq.get() || _sd1.get() >= gamsq.get()) {
        if (sflag.get() === 0) {
          sh11.set(1);
          sh22.set(1);
          sflag.set(-1);
        } else {
          sh21.set(-1);
          sh12.set(1);
          sflag.set(-1);
        }
        if (_sd1.get() <= rgamsq.get()) {
          _sd1.set(_sd1.get() * gam.get() ** 2);
          _sx1.set(_sx1.get() / gam.get());
          sh11.set(sh11.get() / gam.get());
          sh12.set(sh12.get() / gam.get());
        } else {
          _sd1.set(_sd1.get() / gam.get() ** 2);
          _sx1.set(_sx1.get() * gam.get());
          sh11.set(sh11.get() * gam.get());
          sh12.set(sh12.get() * gam.get());
        }
      }
    }
    if (_sd2.get() !== 0) {
      while (abs(_sd2.get()) <= rgamsq.get() || abs(_sd2.get()) >= gamsq.get()) {
        if (sflag.get() === 0) {
          sh11.set(1);
          sh22.set(1);
          sflag.set(-1);
        } else {
          sh21.set(-1);
          sh12.set(1);
          sflag.set(-1);
        }
        if (abs(_sd2.get()) <= rgamsq.get()) {
          _sd2.set(_sd2.get() * gam.get() ** 2);
          sh21.set(sh21.get() / gam.get());
          sh22.set(sh22.get() / gam.get());
        } else {
          _sd2.set(_sd2.get() / gam.get() ** 2);
          sh21.set(sh21.get() * gam.get());
          sh22.set(sh22.get() * gam.get());
        }
      }
    }
  }
  if (sflag.get() < 0) {
    _sparam.set(1, sh11.get());
    _sparam.set(2, sh21.get());
    _sparam.set(3, sh12.get());
    _sparam.set(4, sh22.get());
  } else if (sflag.get() === 0) {
    _sparam.set(2, sh21.get());
    _sparam.set(3, sh12.get());
  } else {
    _sparam.set(1, sh11.get());
    _sparam.set(4, sh22.get());
  }
  _sparam.set(0, sflag.get());

  // Output
  resolve();
};

// Export
export default srotmg;
