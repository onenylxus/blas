// Import
import { isClose, isEqual, isPerf } from '../../testers';
import blas from '../../../src/index';
import perf from '../../../utils/performance';
import data from '../../data/1s/sdot.json';

// SDOT routine test
describe('SDOT routine test', () => {
  let count = 1;

  data.forEach((node) => {
    const n = node.input.n;
    const sx = node.input.sx;
    const incx = node.input.incx;
    const sy = node.input.sy;
    const incy = node.input.incy;

    const _ret = node.output._ret;

    const { result, time } = perf(blas.sdot, { n, sx, incx, sy, incy });

    // Run test
    it(`Case ${count++}: n{${n}},sx[${sx.length}],incx{${incx}},sy[${sy.length}],incy{${incy}}`, () => {
      isClose(result._ret, _ret);
      isEqual(result.n, n);
      isClose(result.sx, sx);
      isEqual(result.incx, incx);
      isClose(result.sy, sy);
      isEqual(result.incy, incy);
      isPerf(time);
    });
  });
});
