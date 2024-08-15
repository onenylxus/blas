// Import
import { isEqual, isPerf } from '../../testfn';
import blas from '../../../src/index';
import data from '../../data/1d/dsdot.json';
import perf from '../../../utils/performance';
import report from '../../../utils/report';

// DSDOT routine test
describe('DSDOT routine test', () => {
  data.forEach((node, i) => {
    const n = node.input.n;
    const sx = node.input.sx;
    const incx = node.input.incx;
    const sy = node.input.sy;
    const incy = node.input.incy;

    const _ret = node.output._ret;

    const { result, time } = perf(blas.dsdot, { n, sx, incx, sy, incy });

    // Run test
    it(`Case ${++i}: n{${n}},sx[${sx.length}],incx{${incx}},sy[${sy.length}],incy{${incy}}`, () => {
      isEqual(result._ret, _ret);
      isEqual(result.n, n);
      isEqual(result.sx, sx);
      isEqual(result.incx, incx);
      isEqual(result.sy, sy);
      isEqual(result.incy, incy);
      isPerf(time);
      report('DSDOT', i, time);
    });
  });
});
