// Import
import { _pC } from '../../../utils/complex';
import { isClose, isEqual, isPerf, isUndefined } from '../../testfn';
import blas from '../../../src';
import data from '../../data/1c/caxpy.json';
import perf from '../../../utils/performance';
import report from '../../../utils/report';

// CAXPY routine test
describe('CAXPY routine test', () => {
  data.forEach((node, i) => {
    const n = node.input.n;
    const ca = node.input.ca;
    const cx = node.input.cx;
    const incx = node.input.incx;
    const cy = node.input.cy;
    const incy = node.input.incy;

    const _cy = node.output.cy;

    const { result, time } = perf(blas.caxpy, { n, ca, cx, incx, cy, incy });

    // Run test
    it(`Case ${++i}: n{${n}},ca{${_pC(ca)}},cx[${cx.length}],incx{${incx}},cy[${cy.length}],incy{${incy}}`, () => {
      isUndefined(result._ret);
      isEqual(result.n, n);
      isClose(result.ca, ca);
      isClose(result.cx, cx);
      isEqual(result.incx, incx);
      isClose(result.cy, _cy);
      isEqual(result.incy, incy);
      isPerf(time);
      report('CAXPY', i, time);
    });
  });
});
