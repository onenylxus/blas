// Import
import { isClose, isEqual, isPerf, isUndefined } from '../../testers';
import blas from '../../../src';
import data from '../../data/1c/cscal.json';
import perf from '../../../utils/performance';

// CSCAL routine test
describe('CSCAL routine test', () => {
  data.forEach((node, i) => {
    const n = node.input.n;
    const ca = node.input.ca;
    const cx = node.input.cx;
    const incx = node.input.incx;

    const _cx = node.output.cx;

    const { result, time } = perf(blas.cscal, { n, ca, cx, incx });

    // Run test
    it(`Case ${++i}: n{${n}},ca{(${ca.r},${ca.i})},cx[${cx.length}],incx{${incx}}`, () => {
      isUndefined(result._ret);
      isEqual(result.n, n);
      isClose(result.ca, ca);
      isClose(result.cx, _cx);
      isEqual(result.incx, incx);
      isPerf(time);
    });
  });
});
