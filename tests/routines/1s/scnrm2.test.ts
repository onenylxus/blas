// Import
import { isClose, isEqual, isPerf } from '../../testers';
import blas from '../../../src/index';
import perf from '../../../utils/performance';
import data from '../../data/1s/scnrm2.json';

// SCNRM2 routine test
describe('SCNRM2 routine test', () => {
  let count = 1;

  data.forEach((node) => {
    const n = node.input.n;
    const x = node.input.x;
    const incx = node.input.incx;

    const _ret = node.output._ret;

    const { result, time } = perf(blas.scnrm2, { n, x, incx });

    // Run test
    it(`Case ${count++}: n{${n}},x[${x.length}],incx{${incx}}`, () => {
      isClose(result._ret, _ret);
      isEqual(result.n, n);
      isClose(result.x, x);
      isEqual(result.incx, incx);
      isPerf(time);
    });
  });
});
