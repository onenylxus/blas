// Import
import blas from '../../../src/index';
import { isEqual, isUndefined } from '../../testers';
import _C from '../../../utils/complex';

// Routine snippet
const { zswap } = blas;

// Define test variables
let n: number;
let zx: Dual[];
let incx: number;
let zy: Dual[];
let incy: number;
let result: any;

// ZSWAP routine test
describe('ZSWAP routine test', () => {
  it('Case 1: n{6},zx[6],incx{1},zy[6],incy{1}', () => {
    // Input
    n = 6;
    zx = [_C(1, 7), _C(2, 8), _C(3, 9), _C(4, 10), _C(5, 11), _C(6, 12)];
    incx = 1;
    zy = [_C(13, 19), _C(14, 20), _C(15, 21), _C(16, 22), _C(17, 23), _C(18, 24)];
    incy = 1;

    // Apply routine
    result = zswap({ n, zx, incx, zy, incy });

    // Output
    isUndefined(result._ret);
    isEqual(result.n, 6);
    isEqual(result.zx, [_C(13, 19), _C(14, 20), _C(15, 21), _C(16, 22), _C(17, 23), _C(18, 24)]);
    isEqual(result.incx, 1);
    isEqual(result.zy, [_C(1, 7), _C(2, 8), _C(3, 9), _C(4, 10), _C(5, 11), _C(6, 12)]);
    isEqual(result.incy, 1);
  });
  it('Case 2: n{6},zx[6],incx{-1},zy[6],incy{1}', () => {
    // Input
    n = 6;
    zx = [_C(1, 7), _C(2, 8), _C(3, 9), _C(4, 10), _C(5, 11), _C(6, 12)];
    incx = -1;
    zy = [_C(13, 19), _C(14, 20), _C(15, 21), _C(16, 22), _C(17, 23), _C(18, 24)];
    incy = 1;

    // Apply routine
    result = zswap({ n, zx, incx, zy, incy });

    // Output
    isUndefined(result._ret);
    isEqual(result.n, 6);
    isEqual(result.zx, [_C(18, 24), _C(17, 23), _C(16, 22), _C(15, 21), _C(14, 20), _C(13, 19)]);
    isEqual(result.incx, -1);
    isEqual(result.zy, [_C(6, 12), _C(5, 11), _C(4, 10), _C(3, 9), _C(2, 8), _C(1, 7)]);
    isEqual(result.incy, 1);
  });
  it('Case 3: n{6},zx[6],incx{1},zy[6],incy{-1}', () => {
    // Input
    n = 6;
    zx = [_C(1, 7), _C(2, 8), _C(3, 9), _C(4, 10), _C(5, 11), _C(6, 12)];
    incx = 1;
    zy = [_C(13, 19), _C(14, 20), _C(15, 21), _C(16, 22), _C(17, 23), _C(18, 24)];
    incy = -1;

    // Apply routine
    result = zswap({ n, zx, incx, zy, incy });

    // Output
    isUndefined(result._ret);
    isEqual(result.n, 6);
    isEqual(result.zx, [_C(18, 24), _C(17, 23), _C(16, 22), _C(15, 21), _C(14, 20), _C(13, 19)]);
    isEqual(result.incx, 1);
    isEqual(result.zy, [_C(6, 12), _C(5, 11), _C(4, 10), _C(3, 9), _C(2, 8), _C(1, 7)]);
    isEqual(result.incy, -1);
  });
  it('Case 4: n{0},zx[6],incx{1},zy[6],incy{1}', () => {
    // Input
    n = 0;
    zx = [_C(1, 7), _C(2, 8), _C(3, 9), _C(4, 10), _C(5, 11), _C(6, 12)];
    incx = 1;
    zy = [_C(13, 19), _C(14, 20), _C(15, 21), _C(16, 22), _C(17, 23), _C(18, 24)];
    incy = 1;

    // Apply routine
    result = zswap({ n, zx, incx, zy, incy });

    // Output
    isUndefined(result._ret);
    isEqual(result.n, 0);
    isEqual(result.zx, [_C(1, 7), _C(2, 8), _C(3, 9), _C(4, 10), _C(5, 11), _C(6, 12)]);
    isEqual(result.incx, 1);
    isEqual(result.zy, [_C(13, 19), _C(14, 20), _C(15, 21), _C(16, 22), _C(17, 23), _C(18, 24)]);
    isEqual(result.incy, 1);
  });
});
