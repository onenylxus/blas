// Import
import { isEqual, isPerf } from '../../testfn';
import blas from '../../../src/index';
import data from '../../data/1d/ddot.json';
import perf from '../../../utils/performance';

// DDOT routine test
describe('DDOT routine test', () => {
  data.forEach((node, i) => {
    const n = node.input.n;
    const dx = node.input.dx;
    const incx = node.input.incx;
    const dy = node.input.dy;
    const incy = node.input.incy;

    const _ret = node.output._ret;

    const { result, time } = perf(blas.ddot, { n, dx, incx, dy, incy });

    // Run test
    it(`Case ${++i}: n{${n}},dx[${dx.length}],incx{${incx}},dy[${dy.length}],incy{${incy}}`, () => {
      isEqual(result._ret, _ret);
      isEqual(result.n, n);
      isEqual(result.dx, dx);
      isEqual(result.incx, incx);
      isEqual(result.dy, dy);
      isEqual(result.incy, incy);
      isPerf(time);
    });
  });
});
