// Import
import { isClose, isEqual, isPerf, isUndefined } from '../../testers';
import blas from '../../../src/index';
import perf from '../../../utils/performance';
import _C from '../../../utils/complex';

// Routine snippet
const { ccopy } = blas;

// Define test variables
let n: number;
let cx: Dual[];
let incx: number;
let cy: Dual[];
let incy: number;

// CCOPY routine test
describe('CCOPY routine test', () => {
  it('Case 1: n{4},cx[4],incx{1},cy[4],incy{1}', () => {
    // Input
    n = 4;
    cx = [_C(1, 5), _C(2, 6), _C(3, 7), _C(4, 8)];
    incx = 1;
    cy = [_C(0, 0), _C(0, 0), _C(0, 0), _C(0, 0)];
    incy = 1;

    // Apply routine
    const { result, time } = perf(ccopy, { n, cx, incx, cy, incy });

    // Output
    isUndefined(result._ret);
    isEqual(result.n, 4);
    isClose(result.cx, [_C(1, 5), _C(2, 6), _C(3, 7), _C(4, 8)]);
    isEqual(result.incx, 1);
    isClose(result.cy, [_C(1, 5), _C(2, 6), _C(3, 7), _C(4, 8)]);
    isEqual(result.incy, 1);
    isPerf(time);
  });

  it('Case 2: n{4},cx[4],incx{-1},cy[4],incy{-1}', () => {
    // Input
    n = 4;
    cx = [_C(1, 5), _C(2, 6), _C(3, 7), _C(4, 8)];
    incx = -1;
    cy = [_C(0, 0), _C(0, 0), _C(0, 0), _C(0, 0)];
    incy = -1;

    // Apply routine
    const { result, time } = perf(ccopy, { n, cx, incx, cy, incy });

    // Output
    isUndefined(result._ret);
    isEqual(result.n, 4);
    isClose(result.cx, [_C(1, 5), _C(2, 6), _C(3, 7), _C(4, 8)]);
    isEqual(result.incx, -1);
    isClose(result.cy, [_C(1, 5), _C(2, 6), _C(3, 7), _C(4, 8)]);
    isEqual(result.incy, -1);
    isPerf(time);
  });

  it('Case 3: n{0},cx[4],incx{1},cy[4],incy{1}', () => {
    // Input
    n = 0;
    cx = [_C(1, 5), _C(2, 6), _C(3, 7), _C(4, 8)];
    incx = 1;
    cy = [_C(0, 0), _C(0, 0), _C(0, 0), _C(0, 0)];
    incy = 1;

    // Apply routine
    const { result, time } = perf(ccopy, { n, cx, incx, cy, incy });

    // Output
    isUndefined(result._ret);
    isEqual(result.n, 0);
    isClose(result.cx, [_C(1, 5), _C(2, 6), _C(3, 7), _C(4, 8)]);
    isEqual(result.incx, 1);
    isClose(result.cy, [_C(0, 0), _C(0, 0), _C(0, 0), _C(0, 0)]);
    isEqual(result.incy, 1);
    isPerf(time);
  });
});
