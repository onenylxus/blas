// Define type
type TCharacter = InstanceType<typeof CCharacter>;

// Character class
class CCharacter {
  // Properties
  private store: string;

  // Constructor
  public constructor(value: string = '') {
    this.store = '';
    this.set(value);
  }

  // Set value to store
  public set(value: string): void {
    this.store = value.length > 0 ? value[0] : '';
  }

  // Get value from store
  public get(): string {
    return this.store;
  }

  // Clear value in store
  public clear(): void {
    this.set('');
  }

  // Equal to
  public eq(value: string): boolean {
    return this.get() === value;
  }

  // Not equal to
  public ne(value: string): boolean {
    return this.get() !== value;
  }
}

// Export
export { CCharacter as Character, TCharacter as H };
