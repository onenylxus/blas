// Dual number type
type Dual = { r: number, i: number };

// Fortran data types
type FCharacter = string;
type FComplex = Dual;
type FComplexArray = FComplex[];
type FDouble = number;
type FDoubleArray = FDouble[];
type FDoubleComplex = Dual;
type FDoubleComplexArray = FDoubleComplex[];
type FEmpty = undefined;
type FInteger = number;
type FReal = number;
type FRealArray = FReal[];
type FVoid = void;

type FDataType = FCharacter | FComplex | FComplexArray | FDouble | FDoubleArray | FDoubleComplex | FDoubleComplexArray | FEmpty | FInteger | FReal | FRealArray;
