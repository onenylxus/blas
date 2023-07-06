// Import
import { D } from '../types/double';
import { S } from '../types/single';

// Complex class
class Complex<T extends S | D> {
  // Properties
  protected rstore: T | undefined;
  protected istore: T | undefined;

  // Set value to store
  public set(value: Dual): void {
    this.rstore!.set(value.r);
    this.istore!.set(value.i);
  }

  // Get value from store
  public get(): Dual {
    return {
      r: this.rstore!.get(),
      i: this.istore!.get(),
    };
  }

  // Clear value in store
  public clear(): void {
    this.rstore!.clear();
    this.istore!.clear();
  }

  // Addition
  public add(value: Dual): void {
    this.set({
      r: this.get().r + value.r,
      i: this.get().i + value.i,
    });
  }

  // Subtraction
  public sub(value: Dual): void {
    this.set({
      r: this.get().r - value.r,
      i: this.get().i - value.i,
    });
  }

  // Multiplication
  public mul(value: Dual): void {
    this.set({
      r: this.get().r * value.r - this.get().i * value.i,
      i: this.get().r * value.i + this.get().i * value.r,
    });
  }

  // Division
  public div(value: Dual): void {
    this.set({
      r: (this.get().r * value.r + this.get().i * value.i) / (value.r ** 2 + value.i ** 2),
      i: (this.get().i * value.r - this.get().r * value.i) / (value.r ** 2 + value.i ** 2),
    });
  }

  // Equal to
  public eq(value: Dual): boolean {
    return this.get().r === value.r && this.get().i === value.i;
  }

  // Not equal to
  public ne(value: Dual): boolean {
    return this.get().r !== value.r || this.get().i !== value.i;
  }
}

// Export
export default Complex;
