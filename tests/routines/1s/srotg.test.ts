// Import
import { isClose, isPerf, isUndefined } from '../../testers';
import blas from '../../../src/index';
import perf from '../../../utils/performance';
import data from '../../data/1s/srotg.json';

// SROTG routine test
describe('SROTG routine test', () => {
  let count = 1;

  data.forEach((node) => {
    const a = node.input.a;
    const b = node.input.b;

    const _a = node.output.a;
    const _b = node.output.b;
    const _c = node.output.c;
    const _s = node.output.s;

    const { result, time } = perf(blas.srotg, { a, b });

    // Run test
    it(`Case ${count++}: a{${a}},b{${b}}`, () => {
      isUndefined(result._ret);
      isClose(result.a, _a);
      isClose(result.b, _b);
      isClose(result.c, _c);
      isClose(result.s, _s);
    });
  });
});
