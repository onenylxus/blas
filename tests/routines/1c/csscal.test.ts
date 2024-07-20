// Import
import { isClose, isEqual, isPerf, isUndefined } from '../../testfn';
import blas from '../../../src';
import data from '../../data/1c/csscal.json';
import perf from '../../../utils/performance';

// CSSCAL routine test
describe('CSSCAL routine test', () => {
  data.forEach((node, i) => {
    const n = node.input.n;
    const sa = node.input.sa;
    const cx = node.input.cx;
    const incx = node.input.incx;

    const _cx = node.output.cx;

    const { result, time } = perf(blas.csscal, { n, sa, cx, incx });

    // Run test
    it(`Case ${++i}: n{${n}},sa{${sa}},cx[${cx.length}],incx{${incx}}`, () => {
      isUndefined(result._ret);
      isEqual(result.n, n);
      isClose(result.sa, sa);
      isClose(result.cx, _cx);
      isEqual(result.incx, incx);
      isPerf(time);
    });
  });
});
