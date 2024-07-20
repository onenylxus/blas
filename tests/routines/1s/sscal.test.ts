// Import
import { isClose, isEqual, isPerf, isUndefined } from '../../testfn';
import blas from '../../../src/index';
import data from '../../data/1s/sscal.json';
import perf from '../../../utils/performance';

// SSCAL routine test
describe('SSCAL routine test', () => {
  data.forEach((node, i) => {
    const n = node.input.n;
    const sa = node.input.sa;
    const sx = node.input.sx;
    const incx = node.input.incx;

    const _sx = node.output.sx;

    const { result, time } = perf(blas.sscal, { n, sa, sx, incx });

    // Run test
    it(`Case ${++i}: n{${n}},sa{${sa}},sx[${sx.length}],incx{${incx}}`, () => {
      isUndefined(result._ret);
      isEqual(result.n, n);
      isClose(result.sa, sa);
      isClose(result.sx, _sx);
      isEqual(result.incx, incx);
      isPerf(time);
    });
  });
});
