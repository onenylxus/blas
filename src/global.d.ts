// Dual number type
type Dual = { r: number, i: number };

// Fortran number types
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

type FArguments = (FCharacter | FComplex | FComplexArray | FDouble | FDoubleArray | FDoubleComplex | FDoubleComplexArray | FEmpty | FInteger | FReal | FRealArray)[];
