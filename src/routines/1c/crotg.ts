// Import
import { Single, S } from '../../types/single';
import { SingleComplex, C } from '../../types/singleComplex';

// CROTG routine
const crotg = (a: FComplex, b: FComplex, c: FReal | FEmpty, s: FComplex | FEmpty): FVoid => {
  // Copyright (c) 1992-2013 The University of Tennessee and The University of Tennessee Research Foundation. All rights reserved.
  // Copyright (c) 2000-2013 The University of California Berkeley. All rights reserved.
  // Copyright (c) 2006-2013 The University of Colorado Denver. All rights reserved.
  // Copyright (c) 2023      Nicholas Ng. All rights reserved.

  // Input
  const _a: C = new SingleComplex(a);
  const _b: C = new SingleComplex(b);
  const _c: S = new Single(c);
  const _s: C = new SingleComplex(s);

  // Output
  a = _a.get();
  b = _b.get();
  c = _c.get();
  s = _s.get();
};

// Export
export default crotg;
