// Input interface
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface Input extends FParameters {}

// Output interface
interface Output extends FParameters {
  _ret: FEmpty;
}

// DTRMV routine
const dtrmv = ({}: Input): Output => {
  // Copyright (c) 1992-2013 The University of Tennessee and The University of Tennessee Research Foundation. All rights reserved.
  // Copyright (c) 2000-2013 The University of California Berkeley. All rights reserved.
  // Copyright (c) 2006-2013 The University of Colorado Denver. All rights reserved.
  // Copyright (c) 2023-2025 Nicholas Ng. All rights reserved.

  // Resolve function
  const resolve = (): Output => ({
    _ret: undefined,
  });

  // Output
  return resolve();
};

// Export
export default dtrmv;
