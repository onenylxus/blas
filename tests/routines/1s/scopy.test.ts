// Import
import blas from '../../../src/index';

// Routine snippet
const { scopy } = blas;

// Define test variables
let n: number;
let sx: number[];
let incx: number;
let sy: number[];
let incy: number;
let result: any;

// SCOPY routine test
describe('SCOPY routine test', () => {
  it('Case 1: n{4},sx[4],incx{1},sy[4],incy{1}', () => {
    // Input
    n = 4;
    sx = [1, 2, 3, 4];
    incx = 1;
    sy = [0, 0, 0, 0];
    incy = 1;

    // Apply routine
    result = scopy({ n, sx, incx, sy, incy });

    // Output
    expect(result._ret).toBeUndefined();
    expect(result.n).toStrictEqual(4);
    expect(result.sx).toStrictEqual([1, 2, 3, 4]);
    expect(result.incx).toStrictEqual(1);
    expect(result.sy).toStrictEqual([1, 2, 3, 4]);
    expect(result.incy).toStrictEqual(1);
  });

  it('Case 2: n{10},sx[10],incx{1},sy[10],incy{1}', () => {
    // Input
    n = 10;
    sx = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    incx = 1;
    sy = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    incy = 1;

    // Apply routine
    result = scopy({ n, sx, incx, sy, incy });

    // Output
    expect(result._ret).toBeUndefined();
    expect(result.n).toStrictEqual(10);
    expect(result.sx).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(result.incx).toStrictEqual(1);
    expect(result.sy).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(result.incy).toStrictEqual(1);
  });

  it('Case 3: n{7},sx[7],incx{1},sy[7],incy{1}', () => {
    // Input
    n = 7;
    sx = [1, 2, 3, 4, 5, 6, 7];
    incx = 1;
    sy = [0, 0, 0, 0, 0, 0, 0];
    incy = 1;

    // Apply routine
    result = scopy({ n, sx, incx, sy, incy });

    // Output
    expect(result._ret).toBeUndefined();
    expect(result.n).toStrictEqual(7);
    expect(result.sx).toStrictEqual([1, 2, 3, 4, 5, 6, 7]);
    expect(result.incx).toStrictEqual(1);
    expect(result.sy).toStrictEqual([1, 2, 3, 4, 5, 6, 7]);
    expect(result.incy).toStrictEqual(1);
  });

  it('Case 4: n{5},sx[9],incx{2},sy[9],incy{2}', () => {
    // Input
    n = 5;
    sx = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    incx = 2;
    sy = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    incy = 2;

    // Apply routine
    result = scopy({ n, sx, incx, sy, incy });

    // Output
    expect(result._ret).toBeUndefined();
    expect(result.n).toStrictEqual(5);
    expect(result.sx).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(result.incx).toStrictEqual(2);
    expect(result.sy).toStrictEqual([1, 0, 3, 0, 5, 0, 7, 0, 9]);
    expect(result.incy).toStrictEqual(2);
  });

  it('Case 5: n{5},sx[9],incx{2},sy[9],incy{-1}', () => {
    // Input
    n = 5;
    sx = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    incx = 2;
    sy = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    incy = -1;

    // Apply routine
    result = scopy({ n, sx, incx, sy, incy });

    // Output
    expect(result._ret).toBeUndefined();
    expect(result.n).toStrictEqual(5);
    expect(result.sx).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(result.incx).toStrictEqual(2);
    expect(result.sy).toStrictEqual([9, 7, 5, 3, 1, 0, 0, 0, 0]);
    expect(result.incy).toStrictEqual(-1);
  });

  it('Case 6: n{5},sx[9],incx{-2},sy[9],incy{1}', () => {
    // Input
    n = 5;
    sx = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    incx = -2;
    sy = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    incy = 1;

    // Apply routine
    result = scopy({ n, sx, incx, sy, incy });

    // Output
    expect(result._ret).toBeUndefined();
    expect(result.n).toStrictEqual(5);
    expect(result.sx).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(result.incx).toStrictEqual(-2);
    expect(result.sy).toStrictEqual([9, 7, 5, 3, 1, 0, 0, 0, 0]);
    expect(result.incy).toStrictEqual(1);
  });

  it('Case 7: n{0},sx[4],incx{1},sy[4],incy{1}', () => {
    // Input
    n = 0;
    sx = [1, 2, 3, 4];
    incx = 1;
    sy = [0, 0, 0, 0];
    incy = 1;

    // Apply routine
    result = scopy({ n, sx, incx, sy, incy });

    // Output
    expect(result._ret).toBeUndefined();
    expect(result.n).toStrictEqual(0);
    expect(result.sx).toStrictEqual([1, 2, 3, 4]);
    expect(result.incx).toStrictEqual(1);
    expect(result.sy).toStrictEqual([0, 0, 0, 0]);
    expect(result.incy).toStrictEqual(1);
  });
});
