// Import
import { isEqual, isFast, perf, report } from '../../testfn';
import blas from '../../../src/index';
import data from '../../data/1d/dnrm2.json';

// DNRM2 routine test
describe('DNRM2 routine test', () => {
  data.forEach((node, i) => {
    const n = node.input.n;
    const x = node.input.x;
    const incx = node.input.incx;

    const _ret = node.output._ret;

    const { result, time } = perf(blas.dnrm2, { n, x, incx });

    // Run test
    it(`Case ${++i}: n{${n}},x[${x.length}],incx{${incx}}`, () => {
      isEqual(result._ret, _ret);
      isEqual(result.n, n);
      isEqual(result.x, x);
      isEqual(result.incx, incx);
      isFast(time);
      report('DNRM2', i, time);
    });
  });
});
