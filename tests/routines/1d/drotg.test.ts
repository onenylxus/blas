// Import
import { isEqual, isPerf, isUndefined } from '../../testfn';
import blas from '../../../src/index';
import data from '../../data/1d/drotg.json';
import perf from '../../../utils/performance';
import report from '../../../utils/report';

// DROTG routine test
describe('DROTG routine test', () => {
  data.forEach((node, i) => {
    const a = node.input.a;
    const b = node.input.b;

    const _a = node.output.a;
    const _b = node.output.b;
    const _c = node.output.c;
    const _s = node.output.s;

    const { result, time } = perf(blas.drotg, { a, b });

    // Run test
    it(`Case ${++i}: a{${a}},b{${b}}`, () => {
      isUndefined(result._ret);
      isEqual(result.a, _a);
      isEqual(result.b, _b);
      isEqual(result.c, _c);
      isEqual(result.s, _s);
      isPerf(time);
      report('DROTG', i, time);
    });
  });
});
