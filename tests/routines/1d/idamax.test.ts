// Import
import { isEqual, isFast, perf, report } from '../../testfn';
import blas from '../../../src/index';
import data from '../../data/1d/idamax.json';

// IDAMAX routine test
describe('IDAMAX routine test', () => {
  data.forEach((node, i) => {
    const n = node.input.n;
    const dx = node.input.dx;
    const incx = node.input.incx;

    const _ret = node.output._ret;

    const { result, time } = perf(blas.idamax, { n, dx, incx });

    // Run test
    it(`Case ${++i}: n{${n}},dx[${dx.length}],incx{${incx}}`, () => {
      isEqual(result._ret, _ret);
      isEqual(result.n, n);
      isEqual(result.dx, dx);
      isEqual(result.incx, incx);
      isFast(time);
      report('IDAMAX', i, time);
    });
  });
});
