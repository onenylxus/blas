// Define type
type TLogical = InstanceType<typeof CLogical>;

// Logical class
class CLogical {
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

// Export
export { CLogical as Logical, TLogical as L };
