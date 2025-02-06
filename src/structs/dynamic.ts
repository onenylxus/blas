// Import
import { Complex } from './complex';
import { D } from '../types/double';
import { S } from '../types/single';
import { Simple } from './simple';
import { toDual } from '../../utils/complex';

// Dynamic type
export type Dynamic = number | Dual | Simple | Complex<S | D>;

// Convert dynamic to number or dual
export function reduce(value: Dynamic): number | Dual {
  return value instanceof Simple || value instanceof Complex ? value.get() : value;
}

// Convert dynamic to number
export function sreduce(value: Dynamic): number {
  const inter = reduce(value);
  return typeof inter === 'object' ? inter.r : inter;
}

// Convert dynamic to dual
export function dreduce(value: Dynamic): Dual {
  const inter = reduce(value);
  return typeof inter === 'number' ? toDual(inter, 0) : inter;
}
