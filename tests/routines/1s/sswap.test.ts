// Import
import {
  isClose,
  isEqual,
  isFast,
  isUndefined,
  perf,
  report,
} from '../../testfn';
import blas from '../../../src/index';
import data from '../../data/1s/sswap.json';

// SSWAP routine test
describe('SSWAP routine test', () => {
  data.forEach((node, i) => {
    const n = node.input.n;
    const sx = node.input.sx;
    const incx = node.input.incx;
    const sy = node.input.sy;
    const incy = node.input.incy;

    const _sx = node.output.sx;
    const _sy = node.output.sy;

    const { result, time } = perf(blas.sswap, { n, sx, incx, sy, incy });

    // Run test
    it(`Case ${++i}: n{${n}},sx[${sx.length}],incx{${incx}},sy[${sy.length}],incy{${incy}}`, () => {
      isUndefined(result._ret);
      isEqual(result.n, n);
      isClose(result.sx, _sx);
      isEqual(result.incx, incx);
      isClose(result.sy, _sy);
      isEqual(result.incy, incy);
      isFast(time);
      report('SSWAP', i, time);
    });
  });
});
