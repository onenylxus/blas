// Import
import { isEqual, isPerf, isUndefined } from '../../testfn';
import blas from '../../../src';
import data from '../../data/1z/zdscal.json';
import perf from '../../../utils/performance';
import report from '../../../utils/report';

// ZDSCAL routine test
describe('ZDSCAL routine test', () => {
  data.forEach((node, i) => {
    const n = node.input.n;
    const da = node.input.da;
    const zx = node.input.zx;
    const incx = node.input.incx;

    const _zx = node.output.zx;

    const { result, time } = perf(blas.zdscal, { n, da, zx, incx });

    // Run test
    it(`Case ${++i}: n{${n}},da{${da}},zx[${zx.length}],incx{${incx}}`, () => {
      isUndefined(result._ret);
      isEqual(result.n, n);
      isEqual(result.da, da);
      isEqual(result.zx, _zx);
      isEqual(result.incx, incx);
      isPerf(time);
      report('ZDSCAL', i, time);
    });
  });
});
