// Import
import { isEqual, isPerf } from '../../testfn';
import blas from '../../../src/index';
import data from '../../data/1z/izamax.json';
import perf from '../../../utils/performance';

// IZAMAX routine test
describe('IZAMAX routine test', () => {
  data.forEach((node, i) => {
    const n = node.input.n;
    const zx = node.input.zx;
    const incx = node.input.incx;

    const _ret = node.output._ret;

    const { result, time } = perf(blas.izamax, { n, zx, incx });

    // Run test
    it(`Case ${++i}: n{${n}},zx[${zx.length}],incx{${incx}}`, () => {
      isEqual(result._ret, _ret);
      isEqual(result.n, n);
      isEqual(result.zx, zx);
      isEqual(result.incx, incx);
      isPerf(time);
    });
  });
});
