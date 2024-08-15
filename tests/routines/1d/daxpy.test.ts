// Import
import { isEqual, isPerf, isUndefined } from '../../testfn';
import blas from '../../../src/index';
import data from '../../data/1d/daxpy.json';
import perf from '../../../utils/performance';
import report from '../../../utils/report';

// DAXPY routine test
describe('DAXPY routine test', () => {
  data.forEach((node, i) => {
    const n = node.input.n;
    const da = node.input.da;
    const dx = node.input.dx;
    const incx = node.input.incx;
    const dy = node.input.dy;
    const incy = node.input.incy;

    const _dy = node.output.dy;

    const { result, time } = perf(blas.daxpy, { n, da, dx, incx, dy, incy });

    // Run test
    it(`Case ${++i}: n{${n}},da{${da}},dx[${dx.length}],incx{${incx}},dy[${dy.length}],incy{${incy}}`, () => {
      isUndefined(result._ret);
      isEqual(result.n, n);
      isEqual(result.da, da);
      isEqual(result.dx, dx);
      isEqual(result.incx, incx);
      isEqual(result.dy, _dy);
      isEqual(result.incy, incy);
      isPerf(time);
      report('DAXPY', i, time);
    });
  });
});
