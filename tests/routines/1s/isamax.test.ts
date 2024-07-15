// Import
import { isClose, isEqual, isPerf } from '../../testers';
import blas from '../../../src/index';
import perf from '../../../utils/performance';
import data from '../../data/1s/isamax.json';

// ISAMAX routine test
describe('ISAMAX routine test', () => {
  let count = 1;

  data.forEach((node) => {
    const n = node.input.n;
    const sx = node.input.sx;
    const incx = node.input.incx;

    const _ret = node.output._ret;

    const { result, time } = perf(blas.isamax, { n, sx, incx });

    // Run test
    it(`Case ${count++}: n{${n}},sx[${sx.length}],incx{${incx}}`, () => {
      isClose(result._ret, _ret);
      isEqual(result.n, n);
      isClose(result.sx, sx);
      isEqual(result.incx, incx);
      isPerf(time);
    });
  });
});
