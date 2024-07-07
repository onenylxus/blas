// Import
import { isClose, isEqual, isPerf, isUndefined } from '../../testers';
import blas from '../../../src';
import perf from '../../../utils/performance';
import _C from '../../../utils/complex';

// Routine snippet
const { csscal } = blas;

// Define test variables
let n: number;
let sa: number;
let cx: Dual[];
let incx: number;

// CSSCAL routine test
describe('CSSCAL routine test', () => {
  it('Case 1: n{6},sa{2},cx[6],incx{1}', () => {
    // Input
    n = 6;
    sa = 2;
    cx = [
      _C(1, 7),
      _C(2, 8),
      _C(3, 9),
      _C(4, 10),
      _C(5, 11),
      _C(6, 12),
    ];
    incx = 1;

    // Apply routine
    const { result, time } = perf(csscal, { n, sa, cx, incx });

    // Output
    isUndefined(result._ret);
    isEqual(result.n, 6);
    isClose(result.sa, 2);
    isClose(result.cx, [
      _C(2, 14),
      _C(4, 16),
      _C(6, 18),
      _C(8, 20),
      _C(10, 22),
      _C(12, 24),
    ]);
    isEqual(result.incx, 1);
    isPerf(time);
  });

  it('Case 2: n{3},sa{2},cx[6],incx{2}', () => {
    // Input
    n = 3;
    sa = 2;
    cx = [
      _C(1, 7),
      _C(2, 8),
      _C(3, 9),
      _C(4, 10),
      _C(5, 11),
      _C(6, 12),
    ];
    incx = 2;

    // Apply routine
    const { result, time } = perf(csscal, { n, sa, cx, incx });

    // Output
    isUndefined(result._ret);
    isEqual(result.n, 3);
    isClose(result.sa, 2);
    isClose(result.cx, [
      _C(2, 14),
      _C(2, 8),
      _C(6, 18),
      _C(4, 10),
      _C(10, 22),
      _C(6, 12),
    ]);
    isEqual(result.incx, 2);
    isPerf(time);
  });

  it('Case 3: n{6},sa{2},cx[6],incx{-1}', () => {
    // Input
    n = 6;
    sa = 2;
    cx = [
      _C(1, 7),
      _C(2, 8),
      _C(3, 9),
      _C(4, 10),
      _C(5, 11),
      _C(6, 12),
    ];
    incx = -1;

    // Apply routine
    const { result, time } = perf(csscal, { n, sa, cx, incx });

    // Output
    isUndefined(result._ret);
    isEqual(result.n, 6);
    isClose(result.sa, 2);
    isClose(result.cx, [
      _C(1, 7),
      _C(2, 8),
      _C(3, 9),
      _C(4, 10),
      _C(5, 11),
      _C(6, 12),
    ]);
    isEqual(result.incx, -1);
    isPerf(time);
  });

  it('Case 4: n{0},sa{2},cx[6],incx{1}', () => {
    // Input
    n = 0;
    sa = 2;
    cx = [
      _C(1, 7),
      _C(2, 8),
      _C(3, 9),
      _C(4, 10),
      _C(5, 11),
      _C(6, 12),
    ];
    incx = 1;

    // Apply routine
    const { result, time } = perf(csscal, { n, sa, cx, incx });

    // Output
    isUndefined(result._ret);
    isEqual(result.n, 0);
    isClose(result.sa, 2);
    isClose(result.cx, [
      _C(1, 7),
      _C(2, 8),
      _C(3, 9),
      _C(4, 10),
      _C(5, 11),
      _C(6, 12),
    ]);
    isEqual(result.incx, 1);
    isPerf(time);
  });

  it('Case 5: n{6},sa{0},cx[6],incx{1}', () => {
    // Input
    n = 6;
    sa = 0;
    cx = [
      _C(1, 7),
      _C(2, 8),
      _C(3, 9),
      _C(4, 10),
      _C(5, 11),
      _C(6, 12),
    ];
    incx = 1;

    // Apply routine
    const { result, time } = perf(csscal, { n, sa, cx, incx });

    // Output
    isUndefined(result._ret);
    isEqual(result.n, 6);
    isClose(result.sa, 0);
    isClose(result.cx, [
      _C(0, 0),
      _C(0, 0),
      _C(0, 0),
      _C(0, 0),
      _C(0, 0),
      _C(0, 0),
    ]);
    isEqual(result.incx, 1);
    isPerf(time);
  });
});
