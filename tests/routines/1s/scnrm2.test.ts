// Import
import { isClose, isEqual, isFast, perf, report } from '../../testfn';
import blas from '../../../src/index';
import data from '../../data/1s/scnrm2.json';

// SCNRM2 routine test
describe('SCNRM2 routine test', () => {
  data.forEach((node, i) => {
    const n = node.input.n;
    const x = node.input.x;
    const incx = node.input.incx;

    const _ret = node.output._ret;

    const { result, time } = perf(blas.scnrm2, { n, x, incx });

    // Run test
    it(`Case ${++i}: n{${n}},x[${x.length}],incx{${incx}}`, () => {
      isClose(result._ret, _ret);
      isEqual(result.n, n);
      isClose(result.x, x);
      isEqual(result.incx, incx);
      isFast(time);
      report('SCNRM2', i, time);
    });
  });
});
