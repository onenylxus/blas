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

  describe('Level 2 - Double', () => {
    beforeAll(() => {
      level = 2;
      type = 'd';
    });

    it('should contain correct DGEMV routine', () => {
      expectRoutine('dgemv');
    });

    it('should contain correct DGBMV routine', () => {
      expectRoutine('dgbmv');
    });

    it('should contain correct DSYMV routine', () => {
      expectRoutine('dsymv');
    });

    it('should contain correct DSBMV routine', () => {
      expectRoutine('dsbmv');
    });

    it('should contain correct DSPMV routine', () => {
      expectRoutine('dspmv');
    });

    it('should contain correct DTRMV routine', () => {
      expectRoutine('dtrmv');
    });

    it('should contain correct DTBMV routine', () => {
      expectRoutine('dtbmv');
    });

    it('should contain correct DTPMV routine', () => {
      expectRoutine('dtpmv');
    });

    it('should contain correct DTRSV routine', () => {
      expectRoutine('dtrsv');
    });

    it('should contain correct DTBSV routine', () => {
      expectRoutine('dtbsv');
    });

    it('should contain correct DTPSV routine', () => {
      expectRoutine('dtpsv');
    });

    it('should contain correct DGER routine', () => {
      expectRoutine('dger');
    });

    it('should contain correct DSYR routine', () => {
      expectRoutine('dsyr');
    });

    it('should contain correct DSPR routine', () => {
      expectRoutine('dspr');
    });

    it('should contain correct DSYR2 routine', () => {
      expectRoutine('dsyr2');
    });

    it('should contain correct DSPR2 routine', () => {
      expectRoutine('dspr2');
    });
  });

  describe('Level 2 - Complex', () => {
    beforeAll(() => {
      level = 2;
      type = 'c';
    });

    it('should contain correct CGEMV routine', () => {
      expectRoutine('cgemv');
    });

    it('should contain correct CGBMV routine', () => {
      expectRoutine('cgbmv');
    });

    it('should contain correct CHEMV routine', () => {
      expectRoutine('chemv');
    });

    it('should contain correct CHBMV routine', () => {
      expectRoutine('chbmv');
    });

    it('should contain correct CHPMV routine', () => {
      expectRoutine('chpmv');
    });

    it('should contain correct CTRMV routine', () => {
      expectRoutine('ctrmv');
    });

    it('should contain correct CTBMV routine', () => {
      expectRoutine('ctbmv');
    });

    it('should contain correct CTPMV routine', () => {
      expectRoutine('ctpmv');
    });

    it('should contain correct CTRSV routine', () => {
      expectRoutine('ctrsv');
    });

    it('should contain correct CTBSV routine', () => {
      expectRoutine('ctbsv');
    });

    it('should contain correct CTPSV routine', () => {
      expectRoutine('ctpsv');
    });

    it('should contain correct CGERU routine', () => {
      expectRoutine('cgeru');
    });

    it('should contain correct CGERC routine', () => {
      expectRoutine('cgerc');
    });

    it('should contain correct CHER routine', () => {
      expectRoutine('cher');
    });

    it('should contain correct CHPR routine', () => {
      expectRoutine('chpr');
    });

    it('should contain correct CHER2 routine', () => {
      expectRoutine('cher2');
    });

    it('should contain correct CHPR2 routine', () => {
      expectRoutine('chpr2');
    });
  });

  describe('Level 2 - Double Complex', () => {
    beforeAll(() => {
      level = 2;
      type = 'z';
    });

    it('should contain correct ZGEMV routine', () => {
      expectRoutine('zgemv');
    });

    it('should contain correct ZGBMV routine', () => {
      expectRoutine('zgbmv');
    });

    it('should contain correct ZHEMV routine', () => {
      expectRoutine('zhemv');
    });

    it('should contain correct ZHBMV routine', () => {
      expectRoutine('zhbmv');
    });

    it('should contain correct ZHPMV routine', () => {
      expectRoutine('zhpmv');
    });

    it('should contain correct ZTRMV routine', () => {
      expectRoutine('ztrmv');
    });

    it('should contain correct ZTBMV routine', () => {
      expectRoutine('ztbmv');
    });

    it('should contain correct ZTPMV routine', () => {
      expectRoutine('ztpmv');
    });

    it('should contain correct ZTRSV routine', () => {
      expectRoutine('ztrsv');
    });

    it('should contain correct ZTBSV routine', () => {
      expectRoutine('ztbsv');
    });

    it('should contain correct ZTPSV routine', () => {
      expectRoutine('ztpsv');
    });

    it('should contain correct ZGERU routine', () => {
      expectRoutine('zgeru');
    });

    it('should contain correct ZGERC routine', () => {
      expectRoutine('zgerc');
    });

    it('should contain correct ZHER routine', () => {
      expectRoutine('zher');
    });

    it('should contain correct ZHPR routine', () => {
      expectRoutine('zhpr');
    });

    it('should contain correct ZHER2 routine', () => {
      expectRoutine('zher2');
    });

    it('should contain correct ZHPR2 routine', () => {
      expectRoutine('zhpr2');
    });
  });

  describe('Level 3 - Single', () => {
    beforeAll(() => {
      level = 3;
      type = 's';
    });

    it('should contain correct SGEMM routine', () => {
      expectRoutine('sgemm');
    });

    it('should contain correct SSYMM routine', () => {
      expectRoutine('ssymm');
    });

    it('should contain correct SSYRK routine', () => {
      expectRoutine('ssyrk');
    });

    it('should contain correct SSYR2K routine', () => {
      expectRoutine('ssyr2k');
    });

    it('should conatin correct STRMM routine', () => {
      expectRoutine('strmm');
    });

    it('should contain correct STRSM routine', () => {
      expectRoutine('strsm');
    });
  });

  describe('Level 3 - Double', () => {
    beforeAll(() => {
      level = 3;
      type = 'd';
    });

    it('should contain correct DGEMM routine', () => {
      expectRoutine('dgemm');
    });

    it('should contain correct DSYMM routine', () => {
      expectRoutine('dsymm');
    });

    it('should contain correct DSYRK routine', () => {
      expectRoutine('dsyrk');
    });

    it('should contain correct DSYR2K routine', () => {
      expectRoutine('dsyr2k');
    });

    it('should contain correct DTRMM routine', () => {
      expectRoutine('dtrmm');
    });

    it('should contain correct DTRSM routine', () => {
      expectRoutine('dtrsm');
    });
  });

  describe('Level 3 - Complex', () => {
    beforeAll(() => {
      level = 3;
      type = 'c';
    });

    it('should contain correct CGEMM routine', () => {
      expectRoutine('cgemm');
    });

    it('should contain correct CSYMM routine', () => {
      expectRoutine('csymm');
    });

    it('shoul contain correct CHEMM routine', () => {
      expectRoutine('chemm');
    });

    it('should contain correct CSYRK routine', () => {
      expectRoutine('csyrk');
    });

    it('should contain correct CHERK routine', () => {
      expectRoutine('cherk');
    });

    it('should contain correct CSYR2K routine', () => {
      expectRoutine('csyr2k');
    });

    it('should contain correct CHER2K routine', () => {
      expectRoutine('cher2k');
    });

    it('should contain correct CTRMM routine', () => {
      expectRoutine('ctrmm');
    });

    it('should contain correct CTRSM routine', () => {
      expectRoutine('ctrsm');
    });
  });

  describe('Level 3 - Double Complex', () => {
    beforeAll(() => {
      level = 3;
      type = 'z';
    });

    it('should contain correct ZGEMM routine', () => {
      expectRoutine('zgemm');
    });

    it('should contain correct ZSYMM routine', () => {
      expectRoutine('zsymm');
    });

    it('should contain correct ZHEMM routine', () => {
      expectRoutine('zhemm');
    });

    it('should contain correct ZSYRK routine', () => {
      expectRoutine('zsyrk');
    });

    it('should contain correct ZHERK routine', () => {
      expectRoutine('zherk');
    });

    it('should contain correct ZSYR2K routine', () => {
      expectRoutine('zsyr2k');
    });

    it('should contain correct ZHER2K routine', () => {
      expectRoutine('zher2k');
    });

    it('should contain correct ZTRMM routine', () => {
      expectRoutine('ztrmm');
    });

    it('should contain correct ZTRSM routine', () => {
      expectRoutine('ztrsm');
    });
  });
});
