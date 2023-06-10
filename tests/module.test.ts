// Import
import blas from '../src/index';

// Define test variables
let level: 1 | 2 | 3;
let type: 's' | 'd' | 'c' | 'z';

// Define routine expect function
const expectRoutine = (routine: string): void => {
  expect(blas.hasOwnProperty(routine)).toBeTruthy();
  expect(blas[routine].level).toStrictEqual(level);
  expect(blas[routine].type).toStrictEqual(type);
  expect(blas[routine].function.name).toStrictEqual(routine);
};

// Module test
describe('Module test', () => {
  describe('Level 1 - Single', () => {
    beforeAll(() => {
      level = 1;
      type = 's';
    });

    it('should contain correct SROTG routine', () => {
      expectRoutine('srotg');
    });

    it('should contain correct SROTMG routine', () => {
      expectRoutine('srotmg');
    });

    it('should contain correct SROT routine', () => {
      expectRoutine('srot');
    });

    it('should contain correct SROTM routine', () => {
      expectRoutine('srotm');
    });

    it('should contain correct SSWAP routine', () => {
      expectRoutine('sswap');
    });

    it('should contain correct SSCAL routine', () => {
      expectRoutine('sscal');
    });

    it('should contain correct SCOPY routine', () => {
      expectRoutine('scopy');
    });

    it('should contain correct SAXPY routine', () => {
      expectRoutine('saxpy');
    });

    it('should contain correct SDOT routine', () => {
      expectRoutine('sdot');
    });

    it('should contain correct SDSDOT routine', () => {
      expectRoutine('sdsdot');
    });

    it('should contain correct SNRM2 routine', () => {
      expectRoutine('snrm2');
    });

    it('should contain correct SCNRM2 routine', () => {
      expectRoutine('scnrm2');
    });

    it('should contain correct SASUM routine', () => {
      expectRoutine('sasum');
    });

    it('should contain correct ISAMAX routine', () => {
      expectRoutine('isamax');
    });
  });

  describe('Level 1 - Double', () => {
    beforeAll(() => {
      level = 1;
      type = 'd';
    });

    it('should contain correct DROTG routine', () => {
      expectRoutine('drotg');
    });

    it('should contain correct DROTMG routine', () => {
      expectRoutine('drotmg');
    });

    it('should contain correct DROT routine', () => {
      expectRoutine('drot');
    });

    it('should contain correct DROTM routine', () => {
      expectRoutine('drotm');
    });

    it('should contain correct DSWAP routine', () => {
      expectRoutine('dswap');
    });

    it('should contain correct DSCAL routine', () => {
      expectRoutine('dscal');
    });

    it('should contain correct DCOPY routine', () => {
      expectRoutine('dcopy');
    });

    it('should contain correct DAXPY routine', () => {
      expectRoutine('daxpy');
    });

    it('should contain correct DDOT routine', () => {
      expectRoutine('ddot');
    });

    it('should contain correct DSDOT routine', () => {
      expectRoutine('dsdot');
    });

    it('should contain correct DNRM2 routine', () => {
      expectRoutine('dnrm2');
    });

    it('should contain correct DZNRM2 routine', () => {
      expectRoutine('dznrm2');
    });

    it('should contain correct DASUM routine', () => {
      expectRoutine('dasum');
    });

    it('should contain correct IDAMAX routine', () => {
      expectRoutine('idamax');
    });
  });

  describe('Level 1 - Complex', () => {
    beforeAll(() => {
      level = 1;
      type = 'c';
    });

    it('should contain correct CROTG routine', () => {
      expectRoutine('crotg');
    });

    it('should contain correct CSROT routine', () => {
      expectRoutine('csrot');
    });

    it('should contain correct CSWAP routine', () => {
      expectRoutine('cswap');
    });

    it('should contain correct CSCAL routine', () => {
      expectRoutine('cscal');
    });

    it('should contain correct CCOPY routine', () => {
      expectRoutine('ccopy');
    });

    it('should contain correct CAXPY routine', () => {
      expectRoutine('caxpy');
    });

    it('should contain correct CDOTU routine', () => {
      expectRoutine('cdotu');
    });

    it('should contain correct CDOTC routine', () => {
      expectRoutine('cdotc');
    });

    it('should contain correct SCASUM routine', () => {
      expectRoutine('scasum');
    });

    it('should contain correct ICAMAX routine', () => {
      expectRoutine('icamax');
    });
  });

  describe('Level 1 - Double Complex', () => {
    beforeAll(() => {
      level = 1;
      type = 'z';
    });

    it('should contain correct ZROTG routine', () => {
      expectRoutine('zrotg');
    });

    it('should contain correct ZDROT routine', () => {
      expectRoutine('zdrot');
    });

    it('should contain correct ZSWAP routine', () => {
      expectRoutine('zswap');
    });

    it('should contain correct ZSCAL routine', () => {
      expectRoutine('zscal');
    });

    it('should contain correct ZDSCAL routine', () => {
      expectRoutine('zdscal');
    });

    it('should contain correct ZCOPY routine', () => {
      expectRoutine('zcopy');
    });

    it('should contain correct ZAXPY routine', () => {
      expectRoutine('zaxpy');
    });

    it('should contain correct ZDOTU routine', () => {
      expectRoutine('zdotu');
    });

    it('should contain correct ZDOTC routine', () => {
      expectRoutine('zdotc');
    });

    it('should contain correct DZASUM routine', () => {
      expectRoutine('dzasum');
    });

    it('should contain correct IZAMAX routine', () => {
      expectRoutine('izamax');
    });
  });

  describe('Level 2 - Single', () => {
    beforeAll(() => {
      level = 2;
      type = 's';
    });

    it('should contain correct SGEMV routine', () => {
      expectRoutine('sgemv');
    });

    it('should contain correct SGBMV routine', () => {
      expectRoutine('sgbmv');
    });

    it('should contain correct SSYMV routine', () => {
      expectRoutine('ssymv');
    });

    it('should contain correct SSBMV routine', () => {
      expectRoutine('ssbmv');
    });

    it('should contain correct SSPMV routine', () => {
      expectRoutine('sspmv');
    });

    it('should contain correct STRMV routine', () => {
      expectRoutine('strmv');
    });

    it('should contain correct STBMV routine', () => {
      expectRoutine('stbmv');
    });

    it('should contain correct STPMV routine', () => {
      expectRoutine('stpmv');
    });

    it('should contain correct STRSV routine', () => {
      expectRoutine('strsv');
    });

    it('should contain correct STBSV routine', () => {
      expectRoutine('stbsv');
    });

    it('should contain correct STPSV routine', () => {
      expectRoutine('stpsv');
    });

    it('should contain correct SGER routine', () => {
      expectRoutine('sger');
    });

    it('should contain correct SSYR routine', () => {
      expectRoutine('ssyr');
    });

    it('should contain correct SSPR routine', () => {
      expectRoutine('sspr');
    });

    it('should contain correct SSYR2 routine', () => {
      expectRoutine('ssyr2');
    });

    it('should contain correct SSPR2 routine', () => {
      expectRoutine('sspr2');
    });
  });
});
