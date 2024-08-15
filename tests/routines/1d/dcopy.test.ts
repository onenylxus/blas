// Import
import { isEqual, isPerf, isUndefined } from '../../testfn';
import blas from '../../../src/index';
import data from '../../data/1d/dcopy.json';
import perf from '../../../utils/performance';
import report from '../../../utils/report';

// DCOPY routine test
describe('DCOPY routine test', () => {
  data.forEach((node, i) => {
    const n = node.input.n;
    const dx = node.input.dx;
    const incx = node.input.incx;
    const dy = node.input.dy;
    const incy = node.input.incy;

    const _dy = node.output.dy;

    const { result, time } = perf(blas.dcopy, { n, dx, incx, dy, incy });

    // Run test
    it(`Case ${++i}: n{${n}},dx[${dx.length}],incx{${incx}},dy[${dy.length}],incy{${incy}}`, () => {
      isUndefined(result._ret);
      isEqual(result.n, n);
      isEqual(result.dx, dx);
      isEqual(result.incx, incx);
      isEqual(result.dy, _dy);
      isEqual(result.incy, incy);
      isPerf(time);
      report('DCOPY', i, time);
    });
  });
});
