// Import
import { isClose, isEqual, isPerf, isUndefined } from '../../testers';
import blas from '../../../src/index';
import perf from '../../../utils/performance';
import data from '../../data/1s/sswap.json';

// SSWAP routine test
describe('SSWAP routine test', () => {
  let count = 1;

  data.forEach((node) => {
    const n = node.input.n;
    const sx = node.input.sx;
    const incx = node.input.incx;
    const sy = node.input.sy;
    const incy = node.input.incy;

    const _sx = node.output.sx;
    const _sy = node.output.sy;

    const { result, time } = perf(blas.sswap, { n, sx, incx, sy, incy });

    // Run test
    it(`Case ${count++}: n{${n}},sx[${sx.length}],incx{${incx}},sy[${sy.length}],incy{${incy}}`, () => {
      isUndefined(result._ret);
      isEqual(result.n, n);
      isClose(result.sx, _sx);
      isEqual(result.incx, incx);
      isClose(result.sy, _sy);
      isEqual(result.incy, incy);
      isPerf(time);
    });
  });
});
