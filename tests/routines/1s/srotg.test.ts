// Import
import blas from '../../../src/index';
import { isClose, isEqual, isUndefined } from '../../testers';

// Routine snippet
const { srotg } = blas;

// Define test variables
let a: number;
let b: number;
let result: any;

// SROTG routine test
describe('SROTG routine test', () => {
  it('Case 1: a{0},b{0}', () => {
    // Input
    a = 0;
    b = 0;

    // Apply routine
    result = srotg({ a, b });

    // Output
    isUndefined(result._ret);
    isEqual(result.a, 0);
    isEqual(result.b, 0);
    isEqual(result.c, 1);
    isEqual(result.s, 0);
  });

  it('Case 2: a{4},b{2}', () => {
    // Input
    a = 4;
    b = 2;

    // Apply routine
    result = srotg({ a, b });

    // Output
    isUndefined(result._ret);
    isClose(result.a, 4.47213595499958);
    isClose(result.b, 0.4472135954999579);
    isClose(result.c, 0.8944271909999159);
    isClose(result.s, 0.4472135954999579);
  });
});
