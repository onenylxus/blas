import { existsSync, writeFileSync } from 'fs';

// Compare function
function compare(left: any, right: any, precision: number): boolean {
  // Array iteration
  if (left instanceof Array && right instanceof Array) {
    return (
      left.length === right.length &&
      left.every((v, i) => compare(v, right[i], precision))
    );
  }

  // Dual check
  if (typeof left === 'object' && typeof right === 'object') {
    if (
      typeof left.r === 'number' &&
      typeof left.i === 'number' &&
      typeof right.r === 'number' &&
      typeof right.i === 'number'
    ) {
      return (
        compare(left.r, right.r, precision) &&
        compare(left.i, right.i, precision)
      );
    }
  }

  // Number check with precision
  if (typeof left === 'number' && typeof right === 'number') {
    return Math.abs((left - right) / (right !== 0 ? right : 1)) <= precision;
  }

  // Fallback to strict equal check
  return left === right;
}

// Performance wrapper function
export function perf(
  f: Routine,
  p: FParameters,
): { result: ReturnType<typeof f>; time: number } {
  const start = performance.now();
  const result = f(p);
  const end = performance.now();
  return { result, time: Math.round((end - start) * 1000) };
}

// Report function
export function report(routine: string, index: number, time: number): void {
  if (!existsSync('./tests/reports')) {
    return;
  }

  writeFileSync(
    './tests/reports/report.txt',
    `Routine ${routine} - case ${index}: ${time}ms\n`,
    { flag: 'a' },
  );
}

// Undefined test function
export function isUndefined(value: any): void {
  expect(value).toBeUndefined();
}

// True test function
export function isTrue(value: any): void {
  expect(value).toBeTruthy();
}

// False test function
export function isFalse(value: any): void {
  expect(value).toBeFalsy();
}

// Equal test function
export function isEqual(left: any, right: any): void {
  const test: boolean = compare(left, right, 0);
  test ? expect(test).toBeTruthy() : expect(left).toEqual(right);
}

// Strict equal test function
export function isStrictEqual(left: any, right: any): void {
  expect(left).toStrictEqual(right);
}

// Close test function
export function isClose(left: any, right: any, precision: number = 1e-5): void {
  const test: boolean = compare(left, right, precision);
  test ? expect(test).toBeTruthy() : expect(left).toEqual(right);
}

// Performance test function
export function isFast(time: number, limit: number = 1e4): void {
  const test: boolean = time <= limit;
  test ? expect(test).toBeTruthy() : expect(time).toBeLessThanOrEqual(limit);
}
