// Import
import { isClose, isEqual, isPerf, isUndefined } from '../../testers';
import blas from '../../../src/index';
import perf from '../../../utils/performance';

// Routine snippet
const { daxpy } = blas;

// Define test variables
let n: number;
let da: number;
let dx: number[];
let incx: number;
let dy: number[];
let incy: number;

// DAXPY routine test
describe('DAXPY routine test', () => {
  it('Case 1: n{10},da{23},dx[10],incx{1},dy[10],incy{1}', () => {
    // Input
    n = 10;
    da = 23;
    dx = [
      1.2629542848807933098,
      -0.3262333607056494,
      1.3297992629225006134,
      1.2724293214294046805,
      0.4146414344564082199,
      -1.5399500419037095433,
      -0.9285670347135380753,
      -0.2947204467905601977,
      -0.0057671727475369552,
      2.4046533888579508798,
    ];
    incx = 1;
    dy = [
      -0.560475646552212603,
      -0.230177489483279957,
      1.55870831414912403,
      0.070508391424576003,
      0.129287735160946243,
      1.715064986883281017,
      0.460916205989202299,
      -1.265061234606533969,
      -0.686852851893526073,
      -0.44566197009995806,
    ];
    incy = 1;

    // Apply routine
    const { result, time } = perf(daxpy, { n, da, dx, incx, dy, incy });

    // Output
    isUndefined(result._ret);
    isEqual(result.n, 10);
    isEqual(result.da, 23);
    isClose(result.dx, [
      1.2629542848807933098,
      -0.3262333607056494,
      1.3297992629225006134,
      1.2724293214294046805,
      0.4146414344564082199,
      -1.5399500419037095433,
      -0.9285670347135380753,
      -0.2947204467905601977,
      -0.0057671727475369552,
      2.4046533888579508798,
    ]);
    isEqual(result.incx, 1);
    isClose(result.dy, [
      28.487472905706035,
      -7.7335447857132165,
      32.14409136136664,
      29.33638278430088,
      9.666040727658336,
      -33.70378597690203,
      -20.896125592422173,
      -8.04363151078942,
      -0.8194978250868761,
      54.861365973632914,
    ]);
    isEqual(result.incy, 1);
    isPerf(time);
  });

  it('Case 2: n{3},da{23},dx[3],incx{1},dy[3],incy{1}', () => {
    // Input
    n = 3;
    da = 23;
    dx = [
      1.2629542848807933098,
      -0.3262333607056494,
      1.3297992629225006134,
    ];
    incx = 1;
    dy = [
      -0.560475646552212603,
      -0.230177489483279957,
      1.55870831414912403,
    ];
    incy = 1;

    // Apply routine
    const { result, time } = perf(daxpy, { n, da, dx, incx, dy, incy });

    // Output
    isUndefined(result._ret);
    isEqual(result.n, 3);
    isEqual(result.da, 23);
    isClose(result.dx, [
      1.2629542848807933098,
      -0.3262333607056494,
      1.3297992629225006134,
    ]);
    isEqual(result.incx, 1);
    isClose(result.dy, [
      28.487472905706035,
      -7.7335447857132165,
      32.14409136136664,
    ]);
    isEqual(result.incy, 1);
    isPerf(time);
  });

  it('Case 3: n{8},da{23},dx[8],incx{1},dy[8],incy{1}', () => {
    // Input
    n = 8;
    da = 23;
    dx = [
      1.2629542848807933098,
      -0.3262333607056494,
      1.3297992629225006134,
      1.2724293214294046805,
      0.4146414344564082199,
      -1.5399500419037095433,
      -0.9285670347135380753,
      -0.2947204467905601977,
    ];
    incx = 1;
    dy = [
      -0.560475646552212603,
      -0.230177489483279957,
      1.55870831414912403,
      0.070508391424576003,
      0.129287735160946243,
      1.715064986883281017,
      0.460916205989202299,
      -1.265061234606533969,
    ];
    incy = 1;

    // Apply routine
    const { result, time } = perf(daxpy, { n, da, dx, incx, dy, incy });

    // Output
    isUndefined(result._ret);
    isEqual(result.n, 8);
    isEqual(result.da, 23);
    isClose(result.dx, [
      1.2629542848807933098,
      -0.3262333607056494,
      1.3297992629225006134,
      1.2724293214294046805,
      0.4146414344564082199,
      -1.5399500419037095433,
      -0.9285670347135380753,
      -0.2947204467905601977,
    ]);
    isEqual(result.incx, 1);
    isClose(result.dy, [
      28.487472905706035,
      -7.7335447857132165,
      32.14409136136664,
      29.33638278430088,
      9.666040727658336,
      -33.70378597690203,
      -20.896125592422173,
      -8.04363151078942,
    ]);
    isEqual(result.incy, 1);
    isPerf(time);
  });

  it('Case 4: n{5},da{23},dx[10],incx{2},dy[10],incy{2}', () => {
    // Input
    n = 5;
    da = 23;
    dx = [
      1.2629542848807933098,
      -0.3262333607056494,
      1.3297992629225006134,
      1.2724293214294046805,
      0.4146414344564082199,
      -1.5399500419037095433,
      -0.9285670347135380753,
      -0.2947204467905601977,
      -0.0057671727475369552,
      2.4046533888579508798,
    ];
    incx = 2;
    dy = [
      -0.560475646552212603,
      -0.230177489483279957,
      1.55870831414912403,
      0.070508391424576003,
      0.129287735160946243,
      1.715064986883281017,
      0.460916205989202299,
      -1.265061234606533969,
      -0.686852851893526073,
      -0.44566197009995806,
    ];
    incy = 2;

    // Apply routine
    const { result, time } = perf(daxpy, { n, da, dx, incx, dy, incy });

    // Output
    isUndefined(result._ret);
    isEqual(result.n, 5);
    isEqual(result.da, 23);
    isClose(result.dx, [
      1.2629542848807933098,
      -0.3262333607056494,
      1.3297992629225006134,
      1.2724293214294046805,
      0.4146414344564082199,
      -1.5399500419037095433,
      -0.9285670347135380753,
      -0.2947204467905601977,
      -0.0057671727475369552,
      2.4046533888579508798,
    ]);
    isEqual(result.incx, 2);
    isClose(result.dy, [
      28.487472905706035,
      -0.23017748948327996,
      32.14409136136664,
      0.070508391424576,
      9.666040727658336,
      1.715064986883281,
      -20.896125592422173,
      -1.265061234606534,
      -0.8194978250868761,
      -0.44566197009995806,
    ]);
    isEqual(result.incy, 2);
    isPerf(time);
  });

  it('Case 5: n{10},da{0},dx[10],incx{1},dy[10],incy{1}', () => {
    // Input
    n = 10;
    da = 0;
    dx = [
      1.2629542848807933098,
      -0.3262333607056494,
      1.3297992629225006134,
      1.2724293214294046805,
      0.4146414344564082199,
      -1.5399500419037095433,
      -0.9285670347135380753,
      -0.2947204467905601977,
      -0.0057671727475369552,
      2.4046533888579508798,
    ];
    incx = 1;
    dy = [
      -0.560475646552212603,
      -0.230177489483279957,
      1.55870831414912403,
      0.070508391424576003,
      0.129287735160946243,
      1.715064986883281017,
      0.460916205989202299,
      -1.265061234606533969,
      -0.686852851893526073,
      -0.44566197009995806,
    ];
    incy = 1;

    // Apply routine
    const { result, time } = perf(daxpy, { n, da, dx, incx, dy, incy });

    // Output
    isUndefined(result._ret);
    isEqual(result.n, 10);
    isEqual(result.da, 0);
    isClose(result.dx, [
      1.2629542848807933098,
      -0.3262333607056494,
      1.3297992629225006134,
      1.2724293214294046805,
      0.4146414344564082199,
      -1.5399500419037095433,
      -0.9285670347135380753,
      -0.2947204467905601977,
      -0.0057671727475369552,
      2.4046533888579508798,
    ]);
    isEqual(result.incx, 1);
    isClose(result.dy, [
      -0.560475646552212603,
      -0.230177489483279957,
      1.55870831414912403,
      0.070508391424576003,
      0.129287735160946243,
      1.715064986883281017,
      0.460916205989202299,
      -1.265061234606533969,
      -0.686852851893526073,
      -0.44566197009995806,
    ]);
    isEqual(result.incy, 1);
    isPerf(time);
  });

  it('Case 6: n{0},da{23},dx[10],incx{1},dy[10],incy{1}', () => {
    // Input
    n = 0;
    da = 23;
    dx = [
      1.2629542848807933098,
      -0.3262333607056494,
      1.3297992629225006134,
      1.2724293214294046805,
      0.4146414344564082199,
      -1.5399500419037095433,
      -0.9285670347135380753,
      -0.2947204467905601977,
      -0.0057671727475369552,
      2.4046533888579508798,
    ];
    incx = 1;
    dy = [
      -0.560475646552212603,
      -0.230177489483279957,
      1.55870831414912403,
      0.070508391424576003,
      0.129287735160946243,
      1.715064986883281017,
      0.460916205989202299,
      -1.265061234606533969,
      -0.686852851893526073,
      -0.44566197009995806,
    ];
    incy = 1;

    // Apply routine
    const { result, time } = perf(daxpy, { n, da, dx, incx, dy, incy });

    // Output
    isUndefined(result._ret);
    isEqual(result.n, 0);
    isEqual(result.da, 23);
    isClose(result.dx, [
      1.2629542848807933098,
      -0.3262333607056494,
      1.3297992629225006134,
      1.2724293214294046805,
      0.4146414344564082199,
      -1.5399500419037095433,
      -0.9285670347135380753,
      -0.2947204467905601977,
      -0.0057671727475369552,
      2.4046533888579508798,
    ]);
    isEqual(result.incx, 1);
    isClose(result.dy, [
      -0.560475646552212603,
      -0.230177489483279957,
      1.55870831414912403,
      0.070508391424576003,
      0.129287735160946243,
      1.715064986883281017,
      0.460916205989202299,
      -1.265061234606533969,
      -0.686852851893526073,
      -0.44566197009995806,
    ]);
    isEqual(result.incy, 1);
    isPerf(time);
  });

  it('Case 7: n{5},da{23},dx[10],incx{-2},dy[10],incy{-2}', () => {
    // Input
    n = 5;
    da = 23;
    dx = [
      1.2629542848807933098,
      -0.3262333607056494,
      1.3297992629225006134,
      1.2724293214294046805,
      0.4146414344564082199,
      -1.5399500419037095433,
      -0.9285670347135380753,
      -0.2947204467905601977,
      -0.0057671727475369552,
      2.4046533888579508798,
    ];
    incx = -2;
    dy = [
      -0.560475646552212603,
      -0.230177489483279957,
      1.55870831414912403,
      0.070508391424576003,
      0.129287735160946243,
      1.715064986883281017,
      0.460916205989202299,
      -1.265061234606533969,
      -0.686852851893526073,
      -0.44566197009995806,
    ];
    incy = -2;

    // Apply routine
    const { result, time } = perf(daxpy, { n, da, dx, incx, dy, incy });

    // Output
    isUndefined(result._ret);
    isEqual(result.n, 5);
    isEqual(result.da, 23);
    isClose(result.dx, [
      1.2629542848807933098,
      -0.3262333607056494,
      1.3297992629225006134,
      1.2724293214294046805,
      0.4146414344564082199,
      -1.5399500419037095433,
      -0.9285670347135380753,
      -0.2947204467905601977,
      -0.0057671727475369552,
      2.4046533888579508798,
    ]);
    isEqual(result.incx, -2);
    isClose(result.dy, [
      28.487472905706035,
      -0.23017748948327996,
      32.14409136136664,
      0.070508391424576,
      9.666040727658336,
      1.715064986883281,
      -20.896125592422173,
      -1.265061234606534,
      -0.8194978250868761,
      -0.44566197009995806,
    ]);
    isEqual(result.incy, -2);
    isPerf(time);
  });
});
