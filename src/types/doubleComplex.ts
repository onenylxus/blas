// Import
import { Complex } from '../structs/complex';
import { add, div, mul, sub } from '../mathlib';
import { dreduce, Dynamic } from '../structs/dynamic';
import { toDual } from '../../utils/complex';
import { Double, D } from './double';

// Fortran type convention
export type Z = DoubleComplex;

// Double complex class
export class DoubleComplex extends Complex<D> {
  // Constructor
  public constructor(value: Dynamic = toDual(0, 0)) {
    super();
    const v: Dual = dreduce(value);
    this.rstore = new Double(v.r);
    this.istore = new Double(v.i);
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
    return DoubleComplex.eq(this, value);
  }

  // Local not equal to
  public ne(value: Dynamic): boolean {
    return DoubleComplex.ne(this, value);
  }

  // Global addition
  public static add(left: Dynamic, right: Dynamic): DoubleComplex {
    return new DoubleComplex(add(left, right));
  }

  // Global subtraction
  public static sub(left: Dynamic, right: Dynamic): DoubleComplex {
    return new DoubleComplex(sub(left, right));
  }

  // Global multiplication
  public static mul(left: Dynamic, right: Dynamic): DoubleComplex {
    return new DoubleComplex(mul(left, right));
  }

  // Global division
  public static div(left: Dynamic, right: Dynamic): DoubleComplex {
    return new DoubleComplex(div(left, right));
  }

  // Global equal to
  public static eq(left: Dynamic, right: Dynamic): boolean {
    const l: Dual = new DoubleComplex(left).get();
    const r: Dual = new DoubleComplex(right).get();
    return l.r === r.r && l.i === r.i;
  }

  // Global not equal to
  public static ne(left: Dynamic, right: Dynamic): boolean {
    const l: Dual = new DoubleComplex(left).get();
    const r: Dual = new DoubleComplex(right).get();
    return l.r !== r.r || l.i !== r.i;
  }
}
