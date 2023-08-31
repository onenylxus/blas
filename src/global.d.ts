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
type FLogical = boolean;
type FReal = number;
type FRealArray = FReal[];
type FVoid = void;

type FInCharacter = Readonly<FCharacter>;
type FInComplex = Readonly<FComplex>;
type FInComplexArray = Readonly<FComplexArray>;
type FInDouble = Readonly<FDouble>;
type FInDoubleArray = Readonly<FDoubleArray>;
type FInDoubleComplex = Readonly<FDoubleComplex>;
type FInDoubleComplexArray = Readonly<FDoubleComplexArray>;
type FInEmpty = Readonly<FEmpty>;
type FInInteger = Readonly<FInteger>;
type FInLogical = Readonly<FLogical>;
type FInReal = Readonly<FReal>;
type FInRealArray = Readonly<FRealArray>;

type FOutCharacter = FCharacter | FEmpty;
type FOutComplex = FComplex | FEmpty;
type FOutComplexArray = FComplexArray | FEmpty;
type FOutDouble = FDouble | FEmpty;
type FOutDoubleArray = FDoubleArray | FEmpty;
type FOutDoubleComplex = FDoubleComplex | FEmpty;
type FOutDoubleComplexArray = FDoubleComplexArray | FEmpty;
type FOutEmpty = FEmpty | FEmpty;
type FOutInteger = FInteger | FEmpty;
type FOutLogical = FLogical | FEmpty;
type FOutReal = FReal | FEmpty;
type FOutRealArray = FRealArray | FEmpty;

type FInOutCharacter = FCharacter;
type FInOutComplex = FComplex;
type FInOutComplexArray = FComplexArray;
type FInOutDouble = FDouble;
type FInOutDoubleArray = FDoubleArray;
type FInOutDoubleComplex = FDoubleComplex;
type FInOutDoubleComplexArray = FDoubleComplexArray;
type FInOutEmpty = FEmpty;
type FInOutInteger = FInteger;
type FInOutLogical = FLogical;
type FInOutReal = FReal;
type FInOutRealArray = FRealArray;

type FDataType =
  | FInCharacter
  | FInComplex
  | FInComplexArray
  | FInDouble
  | FInDoubleArray
  | FInDoubleComplex
  | FInDoubleComplexArray
  | FInEmpty
  | FInInteger
  | FInLogical
  | FInReal
  | FInRealArray
  | FOutCharacter
  | FOutComplex
  | FOutComplexArray
  | FOutDouble
  | FOutDoubleArray
  | FOutDoubleComplex
  | FOutDoubleComplexArray
  | FOutEmpty
  | FOutInteger
  | FOutLogical
  | FOutReal
  | FOutRealArray
  | FInOutCharacter
  | FInOutComplex
  | FInOutComplexArray
  | FInOutDouble
  | FInOutDoubleArray
  | FInOutDoubleComplex
  | FInOutDoubleComplexArray
  | FInOutEmpty
  | FInOutInteger
  | FInOutLogical
  | FInOutReal
  | FInOutRealArray

// Routine interface
interface Routine {
  level: 1 | 2 | 3;
  type: 's' | 'd' | 'c' | 'z';
  function: (...args: FDataType[]) => FDataType | FVoid;
}

// Package interface
interface Package {
  [prop: string]: Routine;
}
