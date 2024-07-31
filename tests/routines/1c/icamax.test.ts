// Import
import { isClose, isEqual, isPerf } from '../../testfn';
import blas from '../../../src/index';
import data from '../../data/1c/icamax.json';
import perf from '../../../utils/performance';

// ICAMAX routine test
describe('ICAMAX routine test', () => {
  data.forEach((node, i) => {
    const n = node.input.n;
    const cx = node.input.cx;
    const incx = node.input.incx;

    const _ret = node.output._ret;

    const { result, time } = perf(blas.icamax, { n, cx, incx });

    // Run test
    it(`Case ${++i}: n{${n}},cx[${cx.length}],incx{${incx}}`, () => {
      isEqual(result._ret, _ret);
      isEqual(result.n, n);
      isClose(result.cx, cx);
      isEqual(result.incx, incx);
      isPerf(time);
    });
  });
});
