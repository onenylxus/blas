// Import
import { isEqual, isFast, perf, report } from '../../testfn';
import blas from '../../../src/index';
import data from '../../data/1d/dasum.json';

// DASUM routine test
describe('DASUM routine test', () => {
  data.forEach((node, i) => {
    const n = node.input.n;
    const dx = node.input.dx;
    const incx = node.input.incx;

    const _ret = node.output._ret;

    const { result, time } = perf(blas.dasum, { n, dx, incx });

    // Run test
    it(`Case ${++i}: n{${n}},dx[${dx.length}],incx{${incx}}`, () => {
      isEqual(result._ret, _ret);
      isEqual(result.n, n);
      isEqual(result.dx, dx);
      isEqual(result.incx, incx);
      isFast(time);
      report('DASUM', i, time);
    });
  });
});
