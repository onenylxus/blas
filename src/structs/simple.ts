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
}

// Export
export default Simple;
