// Import
import { isEqual, isFast, isUndefined, perf, report } from '../../testfn';
import { printDual } from '../../../utils/complex';
import blas from '../../../src';
import data from '../../data/1z/zscal.json';

// ZSCAL routine test
describe('ZSCAL routine test', () => {
  data.forEach((node, i) => {
    const n = node.input.n;
    const za = node.input.za;
    const zx = node.input.zx;
    const incx = node.input.incx;

    const _zx = node.output.zx;

    const { result, time } = perf(blas.zscal, { n, za, zx, incx });

    // Run test
    it(`Case ${++i}: n{${n}},za{${printDual(za)}},zx[${zx.length}],incx{${incx}}`, () => {
      isUndefined(result._ret);
      isEqual(result.n, n);
      isEqual(result.za, za);
      isEqual(result.zx, _zx);
      isEqual(result.incx, incx);
      isFast(time);
      report('ZSCAL', i, time);
    });
  });
});
