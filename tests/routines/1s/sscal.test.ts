// Import
import { isClose, isEqual, isPerf, isUndefined } from '../../testers';
import blas from '../../../src/index';
import perf from '../../../utils/performance';
import data from '../../data/1s/sscal.json';

// SSCAL routine test
describe('SSCAL routine test', () => {
  let count = 1;

  data.forEach((node) => {
    const n = node.input.n;
    const sa = node.input.sa;
    const sx = node.input.sx;
    const incx = node.input.incx;

    const _sx = node.output.sx;

    const { result, time } = perf(blas.sscal, { n, sa, sx, incx });

    // Run test
    it(`Case ${count++}: n{${n}},sa{${sa}},sx[${sx.length}],incx{${incx}}`, () => {
      isUndefined(result._ret);
      isEqual(result.n, n);
      isClose(result.sa, sa);
      isClose(result.sx, _sx);
      isEqual(result.incx, incx);
      isPerf(time);
    });
  });
});
