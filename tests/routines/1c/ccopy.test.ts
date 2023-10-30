// Import
import blas from '../../../src/index';
import { isEqual, isUndefined } from '../../testers';

// Routine snippet
const { ccopy } = blas;

// Define test variables
let n: number;
let cx: Dual[];
let incx: number;
let cy: Dual[];
let incy: number;
let result: any;

// CCOPY routine test
describe('CCOPY routine test', () => {
  it('Case 1: n{4},cx[4],incx{1},cy[4],incy{1}', () => {
    // Input
    n = 4;
    cx = [{ r: 1, i: 5 }, { r: 2, i: 6 }, { r: 3, i: 7 }, { r: 4, i: 8 }],
    incx = 1;
    cy = [{ r: 0, i: 0 }, { r: 0, i: 0 }, { r: 0, i: 0 }, { r: 0, i: 0 }],
    incy = 1;

    // Apply routine
    result = ccopy({ n, cx, incx, cy, incy });

    // Output
    isUndefined(result._ret);
    isEqual(result.n, 4);
    isEqual(result.cx, [{ r: 1, i: 5 }, { r: 2, i: 6 }, { r: 3, i: 7 }, { r: 4, i: 8 }]);
    isEqual(result.incx, 1);
    isEqual(result.cy, [{ r: 1, i: 5 }, { r: 2, i: 6 }, { r: 3, i: 7 }, { r: 4, i: 8 }]);
    isEqual(result.incy, 1);
  });

  it('Case 2: n{4},cx[4],incx{-1},cy[4],incy{-1}', () => {
    // Input
    n = 4;
    cx = [{ r: 1, i: 5 }, { r: 2, i: 6 }, { r: 3, i: 7 }, { r: 4, i: 8 }],
    incx = -1;
    cy = [{ r: 0, i: 0 }, { r: 0, i: 0 }, { r: 0, i: 0 }, { r: 0, i: 0 }],
    incy = -1;

    // Apply routine
    result = ccopy({ n, cx, incx, cy, incy });

    // Output
    isUndefined(result._ret);
    isEqual(result.n, 4);
    isEqual(result.cx, [{ r: 1, i: 5 }, { r: 2, i: 6 }, { r: 3, i: 7 }, { r: 4, i: 8 }]);
    isEqual(result.incx, -1);
    isEqual(result.cy, [{ r: 1, i: 5 }, { r: 2, i: 6 }, { r: 3, i: 7 }, { r: 4, i: 8 }]);
    isEqual(result.incy, -1);
  });

  it('Case 3: n{0},cx[4],incx{1},cy[4],incy{1}', () => {
    // Input
    n = 0;
    cx = [{ r: 1, i: 5 }, { r: 2, i: 6 }, { r: 3, i: 7 }, { r: 4, i: 8 }],
    incx = 1;
    cy = [{ r: 0, i: 0 }, { r: 0, i: 0 }, { r: 0, i: 0 }, { r: 0, i: 0 }],
    incy = 1;

    // Apply routine
    result = ccopy({ n, cx, incx, cy, incy });

    // Output
    isUndefined(result._ret);
    isEqual(result.n, 0);
    isEqual(result.cx, [{ r: 1, i: 5 }, { r: 2, i: 6 }, { r: 3, i: 7 }, { r: 4, i: 8 }]);
    isEqual(result.incx, 1);
    isEqual(result.cy, [{ r: 0, i: 0 }, { r: 0, i: 0 }, { r: 0, i: 0 }, { r: 0, i: 0 }]);
    isEqual(result.incy, 1);
  });
});
