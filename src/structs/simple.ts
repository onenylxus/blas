// Simple class
class Simple {
  // Properties
  protected store: number;

  // Constructor
  public constructor(value: number = 0) {
    this.store = 0;
    this.set(value);
  }

  // Set value to store
  public set(value: number): void {

  }

  // Get value from store
  public get(): number {
    return this.store;
  }

  // Clear value in store
  public clear(): void {
    this.set(0);
  }

  // Addition
  public add(value: number): void {
    this.set(this.get() + value);
  }

  // Subtraction
  public sub(value: number): void {
    this.set(this.get() - value);
  }

  // Multiplication
  public mul(value: number): void {
    this.set(this.get() * value);
  }

  // Division
  public div(value: number): void {
    this.set(this.get() / value);
  }

  // Exponentiation
  public exp(value: number): void {
    this.set(this.get() ** value);
  }

  // Equal to
  public eq(value: number): boolean {
    return this.get() === value;
  }

  // Not equal to
  public ne(value: number): boolean {
    return this.get() !== value;
  }

  // Greater than
  public gt(value: number): boolean {
    return this.get() > value;
  }

  // Less than
  public lt(value: number): boolean {
    return this.get() < value;
  }

  // Greater than or equal to
  public ge(value: number): boolean {
    return this.get() >= value;
  }

  // Less than or equal to
  public le(value: number): boolean {
    return this.get() <= value;
  }
}

// Export
export default Simple;
