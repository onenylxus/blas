// Import
import { Double, D } from '../../types/double';
import { DoubleArray, DA } from '../../types/doubleArray';
import { Integer, I } from '../../types/integer';
import { GAM, GAMSQ, RGAMSQ, abs } from '../../mathlib';

// Input interface
interface Input extends FParameters {
  dd1: FDouble;
  dd2: FDouble;
  dx1: FDouble;
  dy1: FDouble;
  dparam: FDoubleArray | FEmpty;
}

// Output interface
interface Output extends FParameters {
  _ret: FEmpty;
  dd1: FDouble;
  dd2: FDouble;
  dx1: FDouble;
  dy1: FDouble | FEmpty;
  dparam: FDoubleArray;
}

// DROTMG routine
const drotmg = ({ dd1, dd2, dx1, dy1, dparam }: Input): Output => {
  // Copyright (c) 1992-2013 The University of Tennessee and The University of Tennessee Research Foundation. All rights reserved.
  // Copyright (c) 2000-2013 The University of California Berkeley. All rights reserved.
  // Copyright (c) 2006-2013 The University of Colorado Denver. All rights reserved.
  // Copyright (c) 2023      Nicholas Ng. All rights reserved.

  // Arguments
  const _dd1: D = new Double(dd1);
  const _dd2: D = new Double(dd2);
  const _dx1: D = new Double(dx1);
  const _dy1: D = new Double(dy1);
  const _dparam: DA = new DoubleArray(dparam, 5);

  // Resolve function
  const resolve = (): Output => ({
    _ret: undefined,
    dd1: _dd1.get(),
    dd2: _dd2.get(),
    dx1: _dx1.get(),
    dy1: _dy1.get(),
    dparam: _dparam.getAll(),
  });

  // Local variables
  const dflag: I = new Integer();
  const dh11: D = new Double();
  const dh12: D = new Double();
  const dh21: D = new Double();
  const dh22: D = new Double();
  const dp1: D = new Double();
  const dp2: D = new Double();
  const dq1: D = new Double();
  const dq2: D = new Double();
  const dtemp: D = new Double();
  const du: D = new Double();

  // Process
  if (_dd1.lt(0)) {
    dflag.set(-1);
    dh11.set(0);
    dh12.set(0);
    dh21.set(0);
    dh22.set(0);
    _dd1.set(0);
    _dd2.set(0);
    _dx1.set(0);
  }
  else {
    dp2.set(_dd2.get() * _dy1.get());
    if (dp2.eq(0)) {
      dflag.set(-2);
      _dparam.set(1, dflag.get());
      return resolve();
    }
    dp1.set(_dd1.get() * _dx1.get());
    dq2.set(dp2.get() * _dy1.get());
    dq1.set(dp1.get() * _dx1.get());
    if (abs(dq1.get()) > abs(dq2.get())) {
      dh21.set(-_dy1.get() / _dx1.get());
      dh12.set(dp2.get() / dp1.get());
      du.set(1 - dh12.get() / dh21.get());
      if (du.gt(0)) {
        dflag.set(0);
        _dd1.div(du.get());
        _dd2.div(du.get());
        _dx1.mul(du.get());
      } else {
        dflag.set(-1);
        dh11.set(0);
        dh12.set(0);
        dh21.set(0);
        dh22.set(0);
        _dd1.set(0);
        _dd2.set(0);
        _dx1.set(0);
      }
    } else {
      if (dq2.lt(0)) {
        dflag.set(-1);
        dh11.set(0);
        dh12.set(0);
        dh21.set(0);
        dh22.set(0);
        _dd1.set(0);
        _dd2.set(0);
        _dx1.set(0);
      } else {
        dflag.set(1);
        dh11.set(dp1.get() / dp2.get());
        dh22.set(_dx1.get() / _dy1.get());
        du.set(1 + dh11.get() * dh22.get());
        dtemp.set(_dd2.get() / du.get());
        _dd2.set(_dd1.get() / du.get());
        _dd1.set(dtemp.get());
        _dx1.set(_dy1.get() * du.get());
      }
    }
    if (_dd1.ne(0)) {
      while (_dd1.le(RGAMSQ) || _dd1.ge(GAMSQ)) {
        if (dflag.eq(0)) {
          dh11.set(1);
          dh22.set(1);
          dflag.set(-1);
        } else {
          dh21.set(-1);
          dh12.set(1);
          dflag.set(-1);
        }
        if (_dd1.le(RGAMSQ)) {
          _dd1.mul(GAMSQ);
          _dx1.div(GAM);
          dh11.div(GAM);
          dh12.div(GAM);
        } else {
          _dd1.div(GAMSQ);
          _dx1.mul(GAM);
          dh11.mul(GAM);
          dh12.mul(GAM);
        }
      }
    }
    if (_dd2.get() !== 0) {
      while (abs(_dd2.get()) <= RGAMSQ || abs(_dd2.get()) >= GAMSQ) {
        if (dflag.eq(0)) {
          dh11.set(1);
          dh22.set(1);
          dflag.set(-1);
        } else {
          dh21.set(-1);
          dh12.set(1);
          dflag.set(-1);
        }
        if (abs(_dd2.get()) <= RGAMSQ) {
          _dd2.mul(GAMSQ);
          dh21.div(GAM);
          dh22.div(GAM);
        } else {
          _dd2.div(GAMSQ);
          dh21.mul(GAM);
          dh22.mul(GAM);
        }
      }
    }
  }
  if (dflag.lt(0)) {
    _dparam.set(2, dh11.get());
    _dparam.set(3, dh21.get());
    _dparam.set(4, dh12.get());
    _dparam.set(5, dh22.get());
  } else if (dflag.eq(0)) {
    _dparam.set(3, dh21.get());
    _dparam.set(4, dh12.get());
  } else {
    _dparam.set(2, dh11.get());
    _dparam.set(5, dh22.get());
  }
  _dparam.set(1, dflag.get());

  // Output
  return resolve();
};

// Export
export default drotmg;
