// Import
import { Single, S } from '../../types/single';
import { SingleArray, SA } from '../../types/singleArray';

// SROTMG routine
const srotmg = (sd1: FReal, sd2: FReal, sx1: FReal, sy1: FReal, sparam: FRealArray | FEmpty): FVoid => {
  // Copyright (c) 1992-2013 The University of Tennessee and The University of Tennessee Research Foundation. All rights reserved.
  // Copyright (c) 2000-2013 The University of California Berkeley. All rights reserved.
  // Copyright (c) 2006-2013 The University of Colorado Denver. All rights reserved.
  // Copyright (c) 2023      Nicholas Ng. All rights reserved.

  // Input
  const _sd1: S = new Single(sd1);
  const _sd2: S = new Single(sd2);
  const _sx1: S = new Single(sx1);
  const _sy1: S = new Single(sy1);
  const _sparam: SA = new SingleArray(sparam, 5);

  // Output
  sd1 = _sd1.get();
  sd2 = _sd2.get();
  sx1 = _sx1.get();
  sy1 = _sy1.get();
  sparam = _sparam.getAll();
};

// Export
export default srotmg;
