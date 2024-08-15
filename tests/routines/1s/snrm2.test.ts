// Import
import { isClose, isEqual, isPerf } from '../../testfn';
import blas from '../../../src/index';
import data from '../../data/1s/snrm2.json';
import perf from '../../../utils/performance';
import report from '../../../utils/report';

// SNRM2 routine test
describe('SNRM2 routine test', () => {
  data.forEach((node, i) => {
    const n = node.input.n;
    const x = node.input.x;
    const incx = node.input.incx;

    const _ret = node.output._ret;

    const { result, time } = perf(blas.snrm2, { n, x, incx });

    // Run test
    it(`Case ${++i}: n{${n}},x[${x.length}],incx{${incx}}`, () => {
      isClose(result._ret, _ret);
      isEqual(result.n, n);
      isClose(result.x, x);
      isEqual(result.incx, incx);
      isPerf(time);
      report('SNRM2', i, time);
    });
  });
});
