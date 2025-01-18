// Fortran type convention
export type L = Logical;

// Logical class
export class Logical {
  // Properties
  private store: boolean;

  // Constructor
  public constructor(value: boolean = true) {
    this.set(value);
  }

  // Set value to store
  public set(value: boolean): void {
    this.store = value;
  }

  // Get value from store
  public get(): boolean {
    return this.store;
  }
}
