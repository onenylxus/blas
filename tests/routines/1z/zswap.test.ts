// Import
import { isClose, isEqual, isPerf, isUndefined } from '../../testers';
import blas from '../../../src/index';
import data from '../../data/1z/zswap.json';
import perf from '../../../utils/performance';


// ZSWAP routine test
describe('ZSWAP routine test', () => {
  data.forEach((node, i) => {
    const n = node.input.n;
    const zx = node.input.zx;
    const incx = node.input.incx;
    const zy = node.input.zy;
    const incy = node.input.incy;

    const _zx = node.output.zx;
    const _zy = node.output.zy;

    const { result, time } = perf(blas.zswap, { n, zx, incx, zy, incy });

    // Run test
    it(`Case ${++i}: n{${n}},zx[${zx.length}],incx{${incx}},zy[${zy.length}],incy{${incy}}`, () => {
      isUndefined(result._ret);
      isEqual(result.n, n);
      isClose(result.zx, _zx);
      isEqual(result.incx, incx);
      isClose(result.zy, _zy);
      isEqual(result.incy, incy);
      isPerf(time);
    });
  });
});
