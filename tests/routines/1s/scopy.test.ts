// Import
import { isClose, isEqual, isPerf, isUndefined } from '../../testers';
import blas from '../../../src/index';
import data from '../../data/1s/scopy.json';
import perf from '../../../utils/performance';

// SCOPY routine test
describe('SCOPY routine test', () => {
  data.forEach((node, i) => {
    const n = node.input.n;
    const sx = node.input.sx;
    const incx = node.input.incx;
    const sy = node.input.sy;
    const incy = node.input.incy;

    const _sy = node.output.sy;

    const { result, time } = perf(blas.scopy, { n, sx, incx, sy, incy });

    // Run test
    it(`Case ${++i}: n{${n}},sx[${sx.length}],incx{${incx}},sy[${sy.length}],incy{${incy}}`, () => {
      isUndefined(result._ret);
      isEqual(result.n, n);
      isClose(result.sx, sx);
      isEqual(result.incx, incx);
      isClose(result.sy, _sy);
      isEqual(result.incy, incy);
      isPerf(time);
    });
  });
});
