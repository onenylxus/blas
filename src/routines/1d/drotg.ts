// Import
import { Double, D } from '../../types/double';

// DROTG routine
const drotg = (a: FDouble, b: FDouble, c: FDouble | FEmpty, s: FDouble | FEmpty): FVoid => {
  // Copyright (c) 1992-2013 The University of Tennessee and The University of Tennessee Research Foundation. All rights reserved.
  // Copyright (c) 2000-2013 The University of California Berkeley. All rights reserved.
  // Copyright (c) 2006-2013 The University of Colorado Denver. All rights reserved.
  // Copyright (c) 2023      Nicholas Ng. All rights reserved.

  // Input
  const _a: D = new Double(a);
  const _b: D = new Double(b);
  const _c: D = new Double(c);
  const _s: D = new Double(s);

  // Output
  a = _a.get();
  b = _b.get();
  c = _c.get();
  s = _s.get();
};

// Export
export default drotg;
