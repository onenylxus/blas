// Import
import { isEqual, isPerf, isUndefined } from '../../testers';
import blas from '../../../src/index';
import data from '../../data/1z/zcopy.json';
import perf from '../../../utils/performance';

// ZCOPY routine test
describe('ZCOPY routine test', () => {
  data.forEach((node, i) => {
    const n = node.input.n;
    const zx = node.input.zx;
    const incx = node.input.incx;
    const zy = node.input.zy;
    const incy = node.input.incy;

    const _zy = node.output.zy;

    const { result, time } = perf(blas.zcopy, { n, zx, incx, zy, incy });

    // Run test
    it(`Case ${++i}: n{${n}},zx[${zx.length}],incx{${incx}},zy[${zy.length}],incy{${incy}}`, () => {
      isUndefined(result._ret);
      isEqual(result.n, n);
      isEqual(result.zx, zx);
      isEqual(result.incx, incx);
      isEqual(result.zy, _zy);
      isEqual(result.incy, incy);
      isPerf(time);
    });
  });
});
