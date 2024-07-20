// Import
import { isClose, isPerf, isUndefined } from '../../testfn';
import blas from '../../../src/index';
import data from '../../data/1s/srotg.json';
import perf from '../../../utils/performance';

// SROTG routine test
describe('SROTG routine test', () => {
  data.forEach((node, i) => {
    const a = node.input.a;
    const b = node.input.b;

    const _a = node.output.a;
    const _b = node.output.b;
    const _c = node.output.c;
    const _s = node.output.s;

    const { result, time } = perf(blas.srotg, { a, b });

    // Run test
    it(`Case ${++i}: a{${a}},b{${b}}`, () => {
      isUndefined(result._ret);
      isClose(result.a, _a);
      isClose(result.b, _b);
      isClose(result.c, _c);
      isClose(result.s, _s);
      isPerf(time);
    });
  });
});
