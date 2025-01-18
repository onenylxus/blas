// Import
import { isClose, isEqual, isFast, perf, report } from '../../testfn';
import blas from '../../../src/index';
import data from '../../data/1s/sdsdot.json';

// SDSDOT routine test
describe('SDSDOT routine test', () => {
  data.forEach((node, i) => {
    const n = node.input.n;
    const sb = node.input.sb;
    const sx = node.input.sx;
    const incx = node.input.incx;
    const sy = node.input.sy;
    const incy = node.input.incy;

    const _ret = node.output._ret;

    const { result, time } = perf(blas.sdsdot, { n, sb, sx, incx, sy, incy });

    // Run test
    it(`Case ${++i}: n{${n}},sb{${sb}},sx[${sx.length}],incx{${incx}},sy[${sy.length}],incy{${incy}}`, () => {
      isClose(result._ret, _ret);
      isEqual(result.n, n);
      isClose(result.sb, sb);
      isClose(result.sx, sx);
      isEqual(result.incx, incx);
      isClose(result.sy, sy);
      isEqual(result.incy, incy);
      isFast(time);
      report('SDSDOT', i, time);
    });
  });
});
