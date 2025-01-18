// Import
import { toDual } from '../../utils/complex';
import { Complex } from './complex';
import { Simple } from './simple';

// Dynamic type
export type Dynamic = number | Dual | Simple | Complex<any>;

// Convert dynamic to number
export function sreduce(value: Dynamic): number {
  let result: Dynamic = value;
  if (result instanceof Simple || result instanceof Complex) {
    result = result.get();
  }
  if (typeof result == 'object') {
    result = result.r;
  }
  return result;
}

// Convert dynamic to dual
export function dreduce(value: Dynamic): Dual {
  let result: Dynamic = value;
  if (result instanceof Simple || result instanceof Complex) {
    result = result.get();
  }
  if (typeof result === 'number') {
    result = toDual(result, 0);
  }
  return result;
}
