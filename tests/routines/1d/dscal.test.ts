// Import
import { isEqual, isFast, isUndefined, perf, report } from '../../testfn';
import blas from '../../../src/index';
import data from '../../data/1d/dscal.json';

// DSCAL routine test
describe('DSCAL routine test', () => {
  data.forEach((node, i) => {
    const n = node.input.n;
    const da = node.input.da;
    const dx = node.input.dx;
    const incx = node.input.incx;

    const _dx = node.output.dx;

    const { result, time } = perf(blas.dscal, { n, da, dx, incx });

    // Run test
    it(`Case ${++i}: n{${n}},da{${da}},dx[${dx.length}],incx{${incx}}`, () => {
      isUndefined(result._ret);
      isEqual(result.n, n);
      isEqual(result.da, da);
      isEqual(result.dx, _dx);
      isEqual(result.incx, incx);
      isFast(time);
      report('DSCAL', i, time);
    });
  });
});
