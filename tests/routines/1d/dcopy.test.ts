// Import
import blas from '../../../src/index';
import compare from '../../../utils/compare';

// Routine snippet
const { dcopy } = blas;

// Define test variables
let n: number;
let dx: number[];
let incx: number;
let dy: number[];
let incy: number;
let result: any;

// DCOPY routine test
describe('DCOPY routine test', () => {
  it('Case 1: n{4},dx[4],incx{1},dy[4],incy{1}', () => {
    // Input
    n = 4;
    dx = [1, 2, 3, 4];
    incx = 1;
    dy = [0, 0, 0, 0];
    incy = 1;

    // Apply routine
    result = dcopy({ n, dx, incx, dy, incy });

    // Output
    expect(compare(result._ret, undefined)).toBeTruthy();
    expect(compare(result.n, 4)).toBeTruthy();
    expect(compare(result.dx, [1, 2, 3, 4])).toBeTruthy();
    expect(compare(result.incx, 1)).toBeTruthy();
    expect(compare(result.dy, [1, 2, 3, 4])).toBeTruthy();
    expect(compare(result.incy, 1)).toBeTruthy();
  });

  it('Case 2: n{10},dx[10],incx{1},dy[10],incy{1}', () => {
    // Input
    n = 10;
    dx = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    incx = 1;
    dy = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    incy = 1;

    // Apply routine
    result = dcopy({ n, dx, incx, dy, incy });

    // Output
    expect(compare(result._ret, undefined)).toBeTruthy();
    expect(compare(result.n, 10)).toBeTruthy();
    expect(compare(result.dx, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBeTruthy();
    expect(compare(result.incx, 1)).toBeTruthy();
    expect(compare(result.dy, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBeTruthy();
    expect(compare(result.incy, 1)).toBeTruthy();
  });

  it('Case 3: n{7},dx[7],incx{1},dy[7],incy{1}', () => {
    // Input
    n = 7;
    dx = [1, 2, 3, 4, 5, 6, 7];
    incx = 1;
    dy = [0, 0, 0, 0, 0, 0, 0];
    incy = 1;

    // Apply routine
    result = dcopy({ n, dx, incx, dy, incy });

    // Output
    expect(compare(result._ret, undefined)).toBeTruthy();
    expect(compare(result.n, 7)).toBeTruthy();
    expect(compare(result.dx, [1, 2, 3, 4, 5, 6, 7])).toBeTruthy();
    expect(compare(result.incx, 1)).toBeTruthy();
    expect(compare(result.dy, [1, 2, 3, 4, 5, 6, 7])).toBeTruthy();
    expect(compare(result.incy, 1)).toBeTruthy();
  });

  it('Case 4: n{5},dx[9],incx{2},dy[9],incy{2}', () => {
    // Input
    n = 5;
    dx = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    incx = 2;
    dy = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    incy = 2;

    // Apply routine
    result = dcopy({ n, dx, incx, dy, incy });

    // Output
    expect(compare(result._ret, undefined)).toBeTruthy();
    expect(compare(result.n, 5)).toBeTruthy();
    expect(compare(result.dx, [1, 2, 3, 4, 5, 6, 7, 8, 9])).toBeTruthy();
    expect(compare(result.incx, 2)).toBeTruthy();
    expect(compare(result.dy, [1, 0, 3, 0, 5, 0, 7, 0, 9])).toBeTruthy();
    expect(compare(result.incy, 2)).toBeTruthy();
  });

  it('Case 5: n{5},dx[9],incx{2},dy[9],incy{-1}', () => {
    // Input
    n = 5;
    dx = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    incx = 2;
    dy = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    incy = -1;

    // Apply routine
    result = dcopy({ n, dx, incx, dy, incy });

    // Output
    expect(compare(result._ret, undefined)).toBeTruthy();
    expect(compare(result.n, 5)).toBeTruthy();
    expect(compare(result.dx, [1, 2, 3, 4, 5, 6, 7, 8, 9])).toBeTruthy();
    expect(compare(result.incx, 2)).toBeTruthy();
    expect(compare(result.dy, [9, 7, 5, 3, 1, 0, 0, 0, 0])).toBeTruthy();
    expect(compare(result.incy, -1)).toBeTruthy();
  });

  it('Case 6: n{5},dx[9],incx{-2},dy[9],incy{1}', () => {
    // Input
    n = 5;
    dx = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    incx = -2;
    dy = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    incy = 1;

    // Apply routine
    result = dcopy({ n, dx, incx, dy, incy });

    // Output
    expect(compare(result._ret, undefined)).toBeTruthy();
    expect(compare(result.n, 5)).toBeTruthy();
    expect(compare(result.dx, [1, 2, 3, 4, 5, 6, 7, 8, 9])).toBeTruthy();
    expect(compare(result.incx, -2)).toBeTruthy();
    expect(compare(result.dy, [9, 7, 5, 3, 1, 0, 0, 0, 0])).toBeTruthy();
    expect(compare(result.incy, 1)).toBeTruthy();
  });

  it('Case 7: n{0},dx[4],incx{1},dy[4],incy{1}', () => {
    // Input
    n = 0;
    dx = [1, 2, 3, 4];
    incx = 1;
    dy = [0, 0, 0, 0];
    incy = 1;

    // Apply routine
    result = dcopy({ n, dx, incx, dy, incy });

    // Output
    expect(compare(result._ret, undefined)).toBeTruthy();
    expect(compare(result.n, 0)).toBeTruthy();
    expect(compare(result.dx, [1, 2, 3, 4])).toBeTruthy();
    expect(compare(result.incx, 1)).toBeTruthy();
    expect(compare(result.dy, [0, 0, 0, 0])).toBeTruthy();
    expect(compare(result.incy, 1)).toBeTruthy();
  });
});
