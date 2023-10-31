// Import
import blas from '../../../src/index';
import { isEqual, isUndefined } from '../../testers';

// Routine snippet
const { zcopy } = blas;

// Define test variables
let n: number;
let zx: Dual[];
let incx: number;
let zy: Dual[];
let incy: number;
let result: any;

// ZCOPY routine test
describe('ZCOPY routine test', () => {
  it('Case 1: n{4},zx[4],incx{1},zy[4],incy{1}', () => {
    // Input
    n = 4;
    zx = [{ r: 1, i: 5 }, { r: 2, i: 6 }, { r: 3, i: 7 }, { r: 4, i: 8 }],
    incx = 1;
    zy = [{ r: 0, i: 0 }, { r: 0, i: 0 }, { r: 0, i: 0 }, { r: 0, i: 0 }],
    incy = 1;

    // Apply routine
    result = zcopy({ n, zx, incx, zy, incy });

    // Output
    isUndefined(result._ret);
    isEqual(result.n, 4);
    isEqual(result.zx, [{ r: 1, i: 5 }, { r: 2, i: 6 }, { r: 3, i: 7 }, { r: 4, i: 8 }]);
    isEqual(result.incx, 1);
    isEqual(result.zy, [{ r: 1, i: 5 }, { r: 2, i: 6 }, { r: 3, i: 7 }, { r: 4, i: 8 }]);
    isEqual(result.incy, 1);
  });

  it('Case 2: n{4},zx[4],incx{-1},zy[4],incy{-1}', () => {
    // Input
    n = 4;
    zx = [{ r: 1, i: 5 }, { r: 2, i: 6 }, { r: 3, i: 7 }, { r: 4, i: 8 }],
    incx = -1;
    zy = [{ r: 0, i: 0 }, { r: 0, i: 0 }, { r: 0, i: 0 }, { r: 0, i: 0 }],
    incy = -1;

    // Apply routine
    result = zcopy({ n, zx, incx, zy, incy });

    // Output
    isUndefined(result._ret);
    isEqual(result.n, 4);
    isEqual(result.zx, [{ r: 1, i: 5 }, { r: 2, i: 6 }, { r: 3, i: 7 }, { r: 4, i: 8 }]);
    isEqual(result.incx, -1);
    isEqual(result.zy, [{ r: 1, i: 5 }, { r: 2, i: 6 }, { r: 3, i: 7 }, { r: 4, i: 8 }]);
    isEqual(result.incy, -1);
  });

  it('Case 3: n{0},zx[4],incx{1},zy[4],incy{1}', () => {
    // Input
    n = 0;
    zx = [{ r: 1, i: 5 }, { r: 2, i: 6 }, { r: 3, i: 7 }, { r: 4, i: 8 }],
    incx = 1;
    zy = [{ r: 0, i: 0 }, { r: 0, i: 0 }, { r: 0, i: 0 }, { r: 0, i: 0 }],
    incy = 1;

    // Apply routine
    result = zcopy({ n, zx, incx, zy, incy });

    // Output
    isUndefined(result._ret);
    isEqual(result.n, 0);
    isEqual(result.zx, [{ r: 1, i: 5 }, { r: 2, i: 6 }, { r: 3, i: 7 }, { r: 4, i: 8 }]);
    isEqual(result.incx, 1);
    isEqual(result.zy, [{ r: 0, i: 0 }, { r: 0, i: 0 }, { r: 0, i: 0 }, { r: 0, i: 0 }]);
    isEqual(result.incy, 1);
  });
});
