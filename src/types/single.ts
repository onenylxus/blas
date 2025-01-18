// Import
import { Simple } from '../structs/simple';
import { add, div, mul, pow, sub } from '../mathlib';
import { Dynamic, sreduce } from '../structs/dynamic';

// Fortran type convention
export type S = Single;

// Single class
export class Single extends Simple {
  // Constructor
  public constructor(value: Dynamic = 0) {
    super(value);
  }

  // Set value to store
  public set(value: Dynamic): void {
    this.store = Math.fround(sreduce(value));
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

  // Local exponentation
  public pow(value: Dynamic): void {
    this.set(pow(this, sreduce(value)));
  }

  // Local equal to
  public eq(value: Dynamic): boolean {
    return Single.eq(this, value);
  }

  // Local not equal to
  public ne(value: Dynamic): boolean {
    return Single.ne(this, value);
  }

  // Local greater than
  public gt(value: Dynamic): boolean {
    return Single.gt(this, value);
  }

  // Local less than
  public lt(value: Dynamic): boolean {
    return Single.lt(this, value);
  }

  // Local greater than or equal to
  public ge(value: Dynamic): boolean {
    return Single.ge(this, value);
  }

  // Local less than or equal to
  public le(value: Dynamic): boolean {
    return Single.le(this, value);
  }

  // Global addition
  public static add(left: Dynamic, right: Dynamic): Single {
    return new Single(add(left, right));
  }

  // Global subtraction
  public static sub(left: Dynamic, right: Dynamic): Single {
    return new Single(sub(left, right));
  }

  // Global multiplication
  public static mul(left: Dynamic, right: Dynamic): Single {
    return new Single(mul(left, right));
  }

  // Global division
  public static div(left: Dynamic, right: Dynamic): Single {
    return new Single(div(left, right));
  }

  // Global exponentation
  public static pow(left: Dynamic, right: Dynamic): Single {
    return new Single(pow(sreduce(left), sreduce(right)));
  }

  // Global equal to
  public static eq(left: Dynamic, right: Dynamic): boolean {
    const l: number = new Single(left).get();
    const r: number = new Single(right).get();
    return l === r;
  }

  // Global not equal to
  public static ne(left: Dynamic, right: Dynamic): boolean {
    const l: number = new Single(left).get();
    const r: number = new Single(right).get();
    return l !== r;
  }

  // Global greater than
  public static gt(left: Dynamic, right: Dynamic): boolean {
    const l: number = new Single(left).get();
    const r: number = new Single(right).get();
    return l > r;
  }

  // Global less than
  public static lt(left: Dynamic, right: Dynamic): boolean {
    const l: number = new Single(left).get();
    const r: number = new Single(right).get();
    return l < r;
  }

  // Global greater than or equal to
  public static ge(left: Dynamic, right: Dynamic): boolean {
    const l: number = new Single(left).get();
    const r: number = new Single(right).get();
    return l >= r;
  }

  // Global less than or equal to
  public static le(left: Dynamic, right: Dynamic): boolean {
    const l: number = new Single(left).get();
    const r: number = new Single(right).get();
    return l <= r;
  }
}
