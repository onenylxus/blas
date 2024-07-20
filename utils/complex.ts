// Complex function
export const _C = (r: number, i: number): Dual => {
  return { r, i };
};

// Print complex value
export const _pC = (c: Dual): string => {
  const r = c.r != 0 || c.i == 0 ? `${c.r}` : '';
  const i = c.i != 0 ? `${c.i > 0 && c.r != 0 ? '+' : ''}${c.i == 1 ? '' : c.i == -1 ? '-' : c.i}i` : '';
  return `${r}${i}`;
};
