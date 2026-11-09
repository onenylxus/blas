import type { Complex } from '@f';

// Print complex value
export function printComplex(c: Complex): string {
  const r = c.r != 0 || c.i == 0 ? `${c.r}` : '';
  const i =
    c.i != 0
      ? `${c.i > 0 && c.r != 0 ? '+' : ''}${c.i == 1 ? '' : c.i == -1 ? '-' : c.i}i`
      : '';
  return `${r}${i}`;
}
