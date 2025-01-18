// Import
import { Integer, I } from '../types/integer';

// Index type
export type Index = number | I;

// Convert index to number
export function ireduce (value: Index): number {
  if (value instanceof Integer) {
    return value.get();
  }
  return value;
};