// BLAS argument and result types
type FCharacter = string;
type FComplex = Complex;
type FComplexArray = FComplex[];
type FDouble = number;
type FDoubleArray = FDouble[];
type FDoubleComplex = Complex;
type FDoubleComplexArray = FDoubleComplex[];
type FEmpty = undefined;
type FInteger = number;
type FLogical = boolean;
type FReal = number;
type FRealArray = FReal[];

type FDataType =
  | FCharacter
  | FComplex
  | FComplexArray
  | FDouble
  | FDoubleArray
  | FDoubleComplex
  | FDoubleComplexArray
  | FEmpty
  | FInteger
  | FLogical
  | FReal
  | FRealArray;

// Parameters interface
interface FParameters {
  [prop: string]: FDataType;
}

// Routine type
type Routine = (obj: FParameters) => FParameters;

// Package interface
interface Package {
  [prop: string]: Routine;
}
