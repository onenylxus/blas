// Import
import { isClose, isEqual, isPerf, isUndefined } from '../../testers';
import blas from '../../../src/index';
import perf from '../../../utils/performance';

// Routine snippet
const { srotg } = blas;

// Define test variables
let a: number;
let b: number;

// SROTG routine test
describe('SROTG routine test', () => {
  it('Case 1: a{0},b{0}', () => {
    // Input
    a = 0;
    b = 0;

    // Apply routine
    const { result, time } = perf(srotg, { a, b });

    // Output
    isUndefined(result._ret);
    isEqual(result.a, 0);
    isEqual(result.b, 0);
    isEqual(result.c, 1);
    isEqual(result.s, 0);
    isPerf(time);
  });

  it('Case 2: a{4},b{2}', () => {
    // Input
    a = 4;
    b = 2;

    // Apply routine
    const { result, time } = perf(srotg, { a, b });

    // Output
    isUndefined(result._ret);
    isClose(result.a, 4.47213595499958);
    isClose(result.b, 0.4472135954999579);
    isClose(result.c, 0.8944271909999159);
    isClose(result.s, 0.4472135954999579);
    isPerf
  });

  it('Case 3: a{-2},b{-4}', () => {
    // Input
    a = -2;
    b = -4;

    // Apply routine
    const { result, time } = perf(srotg, { a, b });

    // Output
    isUndefined(result._ret);
    isClose(result.a, -4.47213595499958);
    isClose(result.b, 2.2360679774997898);
    isClose(result.c, 0.4472135954999579);
    isClose(result.s, 0.8944271909999159);
    isPerf
  });
});
