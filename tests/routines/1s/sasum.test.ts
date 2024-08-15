// Import
import { isClose, isEqual, isPerf } from '../../testfn';
import blas from '../../../src/index';
import data from '../../data/1s/sasum.json';
import perf from '../../../utils/performance';
import report from '../../../utils/report';

// SASUM routine test
describe('SASUM routine test', () => {
  data.forEach((node, i) => {
    const n = node.input.n;
    const sx = node.input.sx;
    const incx = node.input.incx;

    const _ret = node.output._ret;

    const { result, time } = perf(blas.sasum, { n, sx, incx });

    // Run test
    it(`Case ${++i}: n{${n}},sx[${sx.length}],incx{${incx}}`, () => {
      isClose(result._ret, _ret);
      isEqual(result.n, n);
      isClose(result.sx, sx);
      isEqual(result.incx, incx);
      isPerf(time);
      report('SASUM', i, time);
    });
  });
});
