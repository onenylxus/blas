// Import
import { isEqual, isFast, isUndefined, perf, report } from '../../testfn';
import { printDual } from '../../../utils/complex';
import blas from '../../../src';
import data from '../../data/1z/zaxpy.json';

// ZAXPY routine test
describe('ZAXPY routine test', () => {
  data.forEach((node, i) => {
    const n = node.input.n;
    const za = node.input.za;
    const zx = node.input.zx;
    const incx = node.input.incx;
    const zy = node.input.zy;
    const incy = node.input.incy;

    const _zy = node.output.zy;

    const { result, time } = perf(blas.zaxpy, { n, za, zx, incx, zy, incy });

    // Run test
    it(`Case ${++i}: n{${n}},za{${printDual(za)}},zx[${zx.length}],incx{${incx}},zy[${zy.length}],incy{${incy}}`, () => {
      isUndefined(result._ret);
      isEqual(result.n, n);
      isEqual(result.za, za);
      isEqual(result.zx, zx);
      isEqual(result.incx, incx);
      isEqual(result.zy, _zy);
      isEqual(result.incy, incy);
      isFast(time);
      report('ZAXPY', i, time);
    });
  });
});
