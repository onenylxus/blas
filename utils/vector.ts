import {
  CMPLX,
  REAL,
  type Complex,
  type ComplexKind,
  type FComplexArray,
  type FRealArray,
  type RealKind,
} from '@f';

export function fortranRealVector(
  values: number[],
  n: number,
  increment: number,
  kind: RealKind = 8,
): FRealArray {
  const required = n > 0 ? (n - 1) * Math.abs(increment) + 1 : 0;
  const size = Math.max(1, values.length, required);
  const padded = [...values, ...Array<number>(size - values.length).fill(0)];
  return REAL(padded, kind);
}

export function fortranComplexVector(
  values: Complex[],
  n: number,
  increment: number,
  kind: ComplexKind,
): FComplexArray {
  const required = n > 0 ? (n - 1) * Math.abs(increment) + 1 : 0;
  const size = Math.max(1, values.length, required);
  const padded = [
    ...values.map(({ r, i }) => ({ r, i })),
    ...Array.from({ length: size - values.length }, () => ({ r: 0, i: 0 })),
  ];
  return CMPLX(padded, kind);
}
