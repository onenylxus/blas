// Import
import { isClose, isEqual, isPerf, isUndefined } from '../../testers';
import blas from '../../../src/index';
import data from '../../data/1c/ccopy.json';
import perf from '../../../utils/performance';

// CCOPY routine test
describe('CCOPY routine test', () => {
  data.forEach((node, i) => {
    const n = node.input.n;
    const cx = node.input.cx;
    const incx = node.input.incx;
    const cy = node.input.cy;
    const incy = node.input.incy;

    const _cy = node.output.cy;

    const { result, time } = perf(blas.ccopy, { n, cx, incx, cy, incy });

    // Run test
    it(`Case ${++i}: n{${n}},cx[${cx.length}],incx{${incx}},cy[${cy.length}],incy{${incy}}`, () => {
      isUndefined(result._ret);
      isEqual(result.n, n);
      isClose(result.cx, cx);
      isEqual(result.incx, incx);
      isClose(result.cy, _cy);
      isEqual(result.incy, incy);
      isPerf(time);
    });
  });
});
