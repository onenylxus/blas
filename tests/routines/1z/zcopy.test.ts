// Import
import { isEqual, isPerf, isUndefined } from '../../testers';
import blas from '../../../src/index';
import perf from '../../../utils/performance';
import _C from '../../../utils/complex';

// Routine snippet
const { zcopy } = blas;

// Define test variables
let n: number;
let zx: Dual[];
let incx: number;
let zy: Dual[];
let incy: number;

// ZCOPY routine test
describe('ZCOPY routine test', () => {
  it('Case 1: n{4},zx[4],incx{1},zy[4],incy{1}', () => {
    // Input
    n = 4;
    zx = [_C(1, 5), _C(2, 6), _C(3, 7), _C(4, 8)];
    incx = 1;
    zy = [_C(0, 0), _C(0, 0), _C(0, 0), _C(0, 0)];
    incy = 1;

    // Apply routine
    const { result, time } = perf(zcopy, { n, zx, incx, zy, incy });

    // Output
    isUndefined(result._ret);
    isEqual(result.n, 4);
    isEqual(result.zx, [_C(1, 5), _C(2, 6), _C(3, 7), _C(4, 8)]);
    isEqual(result.incx, 1);
    isEqual(result.zy, [_C(1, 5), _C(2, 6), _C(3, 7), _C(4, 8)]);
    isEqual(result.incy, 1);
    isPerf(time);
  });

  it('Case 2: n{4},zx[4],incx{-1},zy[4],incy{-1}', () => {
    // Input
    n = 4;
    zx = [_C(1, 5), _C(2, 6), _C(3, 7), _C(4, 8)];
    incx = -1;
    zy = [_C(0, 0), _C(0, 0), _C(0, 0), _C(0, 0)];
    incy = -1;

    // Apply routine
    const { result, time } = perf(zcopy, { n, zx, incx, zy, incy });

    // Output
    isUndefined(result._ret);
    isEqual(result.n, 4);
    isEqual(result.zx, [_C(1, 5), _C(2, 6), _C(3, 7), _C(4, 8)]);
    isEqual(result.incx, -1);
    isEqual(result.zy, [_C(1, 5), _C(2, 6), _C(3, 7), _C(4, 8)]);
    isEqual(result.incy, -1);
    isPerf(time);
  });

  it('Case 3: n{0},zx[4],incx{1},zy[4],incy{1}', () => {
    // Input
    n = 0;
    zx = [_C(1, 5), _C(2, 6), _C(3, 7), _C(4, 8)];
    incx = 1;
    zy = [_C(0, 0), _C(0, 0), _C(0, 0), _C(0, 0)];
    incy = 1;

    // Apply routine
    const { result, time } = perf(zcopy, { n, zx, incx, zy, incy });

    // Output
    isUndefined(result._ret);
    isEqual(result.n, 0);
    isEqual(result.zx, [_C(1, 5), _C(2, 6), _C(3, 7), _C(4, 8)]);
    isEqual(result.incx, 1);
    isEqual(result.zy, [_C(0, 0), _C(0, 0), _C(0, 0), _C(0, 0)]);
    isEqual(result.incy, 1);
    isPerf(time);
  });
});
