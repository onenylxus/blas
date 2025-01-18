// Import
import { Complex } from '../structs/complex';
import { add, div, mul, sub } from '../mathlib';
import { dreduce, Dynamic } from '../structs/dynamic';
import { toDual } from '../../utils/complex';
import { Single, S } from './single';

// Fortran type convention
export type C = SingleComplex;

// Single complex class
export class SingleComplex extends Complex<S> {
  // Constructor
  public constructor(value: Dynamic = toDual(0, 0)) {
    super();
    const v: Dual = dreduce(value);
    this.rstore = new Single(v.r);
    this.istore = new Single(v.i);
  }

  // Set value to store
  public set(value: Dynamic): void {
    const v: Dual = dreduce(value);
    this.rstore.set(v.r);
    this.istore.set(v.i);
  }

  // Local addition
  public add(value: Dynamic): void {
    this.set(add(this, value));
  }

  // Local subtraction
  public sub(value: Dynamic): void {
    this.set(sub(this, value));
  }

  // Local multiplication
  public mul(value: Dynamic): void {
    this.set(mul(this, value));
  }

  // Local division
  public div(value: Dynamic): void {
    this.set(div(this, value));
  }

  // Local equal to
  public eq(value: Dynamic): boolean {
    return SingleComplex.eq(this, value);
  }

  // Local not equal to
  public ne(value: Dynamic): boolean {
    return SingleComplex.ne(this, value);
  }

  // Global addition
  public static add(left: Dynamic, right: Dynamic): SingleComplex {
    return new SingleComplex(add(left, right));
  }

  // Global subtraction
  public static sub(left: Dynamic, right: Dynamic): SingleComplex {
    return new SingleComplex(sub(left, right));
  }

  // Global multiplication
  public static mul(left: Dynamic, right: Dynamic): SingleComplex {
    return new SingleComplex(mul(left, right));
  }

  // Global division
  public static div(left: Dynamic, right: Dynamic): SingleComplex {
    return new SingleComplex(div(left, right));
  }

  // Global equal to
  public static eq(left: Dynamic, right: Dynamic): boolean {
    const l: Dual = new SingleComplex(left).get();
    const r: Dual = new SingleComplex(right).get();
    return l.r === r.r && l.i === r.i;
  }

  // Global not equal to
  public static ne(left: Dynamic, right: Dynamic): boolean {
    const l: Dual = new SingleComplex(left).get();
    const r: Dual = new SingleComplex(right).get();
    return l.r !== r.r || l.i !== r.i;
  }
}
