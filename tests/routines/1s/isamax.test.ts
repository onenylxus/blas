// Import
import { isClose, isEqual, isPerf } from '../../testers';
import blas from '../../../src/index';
import data from '../../data/1s/isamax.json';
import perf from '../../../utils/performance';

// ISAMAX routine test
describe('ISAMAX routine test', () => {
  data.forEach((node, i) => {
    const n = node.input.n;
    const sx = node.input.sx;
    const incx = node.input.incx;

    const _ret = node.output._ret;

    const { result, time } = perf(blas.isamax, { n, sx, incx });

    // Run test
    it(`Case ${++i}: n{${n}},sx[${sx.length}],incx{${incx}}`, () => {
      isClose(result._ret, _ret);
      isEqual(result.n, n);
      isClose(result.sx, sx);
      isEqual(result.incx, incx);
      isPerf(time);
    });
  });
});
