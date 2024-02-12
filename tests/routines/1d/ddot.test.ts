// Import
import blas from '../../../src/index';
import { isEqual } from '../../testers';

// Routine snippet
const { ddot } = blas;

// Define test variables
let n: number;
let dx: number[];
let incx: number;
let dy: number[];
let incy: number;
let result: any;

// DDOT routine test
describe('DDOT routine test', () => {
  it('Case 1: n{4},dx[4],incx{1},dy[4],incy{1}', () => {
    // Input
    n = 4;
    dx = [1, 2, 3, 4];
    incx = 1;
    dy = [5, 6, 7, 8];
    incy = 1;

    // Apply routine
    result = ddot({ n, dx, incx, dy, incy });

    // Output
    isEqual(result._ret, 70);
    isEqual(result.n, 4);
    isEqual(result.dx, [1, 2, 3, 4]);
    isEqual(result.incx, 1);
    isEqual(result.dy, [5, 6, 7, 8]);
    isEqual(result.incy, 1);
  });

  it('Case 2: n{7},dx[7],incx{1},dy[7],incy{1}', () => {
    // Input
    n = 7;
    dx = [1, 1, 2, 3, 5, 8, 13];
    incx = 1;
    dy = [7, 6, 5, 4, 3, 2, 1];
    incy = 1;

    // Apply routine
    result = ddot({ n, dx, incx, dy, incy });

    // Output
    isEqual(result._ret, 79);
    isEqual(result.n, 7);
    isEqual(result.dx, [1, 1, 2, 3, 5, 8, 13]);
    isEqual(result.incx, 1);
    isEqual(result.dy, [7, 6, 5, 4, 3, 2, 1]);
    isEqual(result.incy, 1);
  });

  it('Case 3: n{10},dx[10],incx{1},dy[10],incy{1}', () => {
    // Input
    n = 10;
    dx = [1, 2, 3, 4, 5, 5, 4, 3, 2, 1];
    incx = 1;
    dy = [1, -1, 1, -1, 1, 2, -2, 2, -2, 2];
    incy = 1;

    // Apply routine
    result = ddot({ n, dx, incx, dy, incy });

    // Output
    isEqual(result._ret, 9);
    isEqual(result.n, 10);
    isEqual(result.dx, [1, 2, 3, 4, 5, 5, 4, 3, 2, 1]);
    isEqual(result.incx, 1);
    isEqual(result.dy, [1, -1, 1, -1, 1, 2, -2, 2, -2, 2]);
    isEqual(result.incy, 1);
  });

  it('Case 4: n{0},dx[4],incx{1},dy[4],incy{1}', () => {
    // Input
    n = 0;
    dx = [1, 2, 3, 4];
    incx = 1;
    dy = [5, 6, 7, 8];
    incy = 1;

    // Apply routine
    result = ddot({ n, dx, incx, dy, incy });

    // Output
    isEqual(result._ret, 0);
    isEqual(result.n, 0);
    isEqual(result.dx, [1, 2, 3, 4]);
    isEqual(result.incx, 1);
    isEqual(result.dy, [5, 6, 7, 8]);
    isEqual(result.incy, 1);
  });

  it('Case 5: n{10},dx[10],incx{2},dy[10],incy{2}', () => {
    // Input
    n = 10;
    dx = [1, 2, 3, 4, 5, 5, 4, 3, 2, 1];
    incx = 2;
    dy = [1, -1, 1, -1, 1, 2, -2, 2, -2, 2];
    incy = 2;

    // Apply routine
    result = ddot({ n, dx, incx, dy, incy });

    // Output
    isEqual(result._ret, -3);
    isEqual(result.n, 10);
    isEqual(result.dx, [1, 2, 3, 4, 5, 5, 4, 3, 2, 1]);
    isEqual(result.incx, 2);
    isEqual(result.dy, [1, -1, 1, -1, 1, 2, -2, 2, -2, 2]);
    isEqual(result.incy, 2);
  });

  it('Case 6: n{10},dx[10],incx{-2},dy[10],incy{-2}', () => {
    // Input
    n = 10;
    dx = [1, 2, 3, 4, 5, 5, 4, 3, 2, 1];
    incx = -2;
    dy = [1, -1, 1, -1, 1, 2, -2, 2, -2, 2];
    incy = -2;

    // Apply routine
    result = ddot({ n, dx, incx, dy, incy });

    // Output
    isEqual(result._ret, -3);
    isEqual(result.n, 10);
    isEqual(result.dx, [1, 2, 3, 4, 5, 5, 4, 3, 2, 1]);
    isEqual(result.incx, -2);
    isEqual(result.dy, [1, -1, 1, -1, 1, 2, -2, 2, -2, 2]);
    isEqual(result.incy, -2);
  });
});
