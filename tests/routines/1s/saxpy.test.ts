// Import
import { isClose, isEqual, isPerf, isUndefined } from '../../testfn';
import blas from '../../../src/index';
import data from '../../data/1s/saxpy.json';
import perf from '../../../utils/performance';
import report from '../../../utils/report';

// SAXPY routine test
describe('SAXPY routine test', () => {
  data.forEach((node, i) => {
    const n = node.input.n;
    const sa = node.input.sa;
    const sx = node.input.sx;
    const incx = node.input.incx;
    const sy = node.input.sy;
    const incy = node.input.incy;

    const _sy = node.output.sy;

    const { result, time } = perf(blas.saxpy, { n, sa, sx, incx, sy, incy });

    // Run test
    it(`Case ${++i}: n{${n}},sa{${sa}},sx[${sx.length}],incx{${incx}},sy[${sy.length}],incy{${incy}}`, () => {
      isUndefined(result._ret);
      isEqual(result.n, n);
      isClose(result.sa, sa);
      isClose(result.sx, sx);
      isEqual(result.incx, incx);
      isClose(result.sy, _sy);
      isEqual(result.incy, incy);
      isPerf(time);
      report('SAXPY', i, time);
    });
  });
});
