// Import
import blas from '../src/index';

// Module test
describe('Module test', () => {
  describe('Level 1 - Single', () => {
    it('should contain correct SROTG routine', () => {
      expect(blas.hasOwnProperty('srotg')).toBeTruthy();
      expect(blas.srotg.name).toStrictEqual('srotg');
      expect(blas.srotg.level).toStrictEqual(1);
      expect(blas.srotg.type).toStrictEqual('s');
      expect(typeof blas.srotg.function).toStrictEqual('function');
    });

    it('should contain correct SROTMG routine', () => {
      expect(blas.hasOwnProperty('srotmg')).toBeTruthy();
      expect(blas.srotmg.name).toStrictEqual('srotmg');
      expect(blas.srotmg.level).toStrictEqual(1);
      expect(blas.srotmg.type).toStrictEqual('s');
      expect(typeof blas.srotmg.function).toStrictEqual('function');
    });

    it('should contain correct SROT routine', () => {
      expect(blas.hasOwnProperty('srot')).toBeTruthy();
      expect(blas.srot.name).toStrictEqual('srot');
      expect(blas.srot.level).toStrictEqual(1);
      expect(blas.srot.type).toStrictEqual('s');
      expect(typeof blas.srot.function).toStrictEqual('function');
    });

    it('should contain correct SROTM routine', () => {
      expect(blas.hasOwnProperty('srotm')).toBeTruthy();
      expect(blas.srotm.name).toStrictEqual('srotm');
      expect(blas.srotm.level).toStrictEqual(1);
      expect(blas.srotm.type).toStrictEqual('s');
      expect(typeof blas.srotm.function).toStrictEqual('function');
    });

    it('should contain correct SSWAP routine', () => {
      expect(blas.hasOwnProperty('sswap')).toBeTruthy();
      expect(blas.sswap.name).toStrictEqual('sswap');
      expect(blas.sswap.level).toStrictEqual(1);
      expect(blas.sswap.type).toStrictEqual('s');
      expect(typeof blas.sswap.function).toStrictEqual('function');
    });

    it('should contain correct SSCAL routine', () => {
      expect(blas.hasOwnProperty('sscal')).toBeTruthy();
      expect(blas.sscal.name).toStrictEqual('sscal');
      expect(blas.sscal.level).toStrictEqual(1);
      expect(blas.sscal.type).toStrictEqual('s');
      expect(typeof blas.sscal.function).toStrictEqual('function');
    });

    it('should contain correct SCOPY routine', () => {
      expect(blas.hasOwnProperty('scopy')).toBeTruthy();
      expect(blas.scopy.name).toStrictEqual('scopy');
      expect(blas.scopy.level).toStrictEqual(1);
      expect(blas.scopy.type).toStrictEqual('s');
      expect(typeof blas.scopy.function).toStrictEqual('function');
    });

    it('should contain correct SAXPY routine', () => {
      expect(blas.hasOwnProperty('saxpy')).toBeTruthy();
      expect(blas.saxpy.name).toStrictEqual('saxpy');
      expect(blas.saxpy.level).toStrictEqual(1);
      expect(blas.saxpy.type).toStrictEqual('s');
      expect(typeof blas.saxpy.function).toStrictEqual('function');
    });

    it('should contain correct SDOT routine', () => {
      expect(blas.hasOwnProperty('sdot')).toBeTruthy();
      expect(blas.sdot.name).toStrictEqual('sdot');
      expect(blas.sdot.level).toStrictEqual(1);
      expect(blas.sdot.type).toStrictEqual('s');
      expect(typeof blas.sdot.function).toStrictEqual('function');
    });

    it('should contain correct SDSDOT routine', () => {
      expect(blas.hasOwnProperty('sdsdot')).toBeTruthy();
      expect(blas.sdsdot.name).toStrictEqual('sdsdot');
      expect(blas.sdsdot.level).toStrictEqual(1);
      expect(blas.sdsdot.type).toStrictEqual('s');
      expect(typeof blas.sdsdot.function).toStrictEqual('function');
    });

    it('should contain correct SNRM2 routine', () => {
      expect(blas.hasOwnProperty('snrm2')).toBeTruthy();
      expect(blas.snrm2.name).toStrictEqual('snrm2');
      expect(blas.snrm2.level).toStrictEqual(1);
      expect(blas.snrm2.type).toStrictEqual('s');
      expect(typeof blas.snrm2.function).toStrictEqual('function');
    });

    it('should contain correct SCNRM2 routine', () => {
      expect(blas.hasOwnProperty('scnrm2')).toBeTruthy();
      expect(blas.scnrm2.name).toStrictEqual('scnrm2');
      expect(blas.scnrm2.level).toStrictEqual(1);
      expect(blas.scnrm2.type).toStrictEqual('s');
      expect(typeof blas.scnrm2.function).toStrictEqual('function');
    });

    it('should contain correct SASUM routine', () => {
      expect(blas.hasOwnProperty('sasum')).toBeTruthy();
      expect(blas.sasum.name).toStrictEqual('sasum');
      expect(blas.sasum.level).toStrictEqual(1);
      expect(blas.sasum.type).toStrictEqual('s');
      expect(typeof blas.sasum.function).toStrictEqual('function');
    });

    it('should contain correct ISAMAX routine', () => {
      expect(blas.hasOwnProperty('isamax')).toBeTruthy();
      expect(blas.isamax.name).toStrictEqual('isamax');
      expect(blas.isamax.level).toStrictEqual(1);
      expect(blas.isamax.type).toStrictEqual('s');
      expect(typeof blas.isamax.function).toStrictEqual('function');
    });
  });

  describe('Level 1 - Double', () => {
    it('should contain correct DROTG routine', () => {
      expect(blas.hasOwnProperty('drotg')).toBeTruthy();
      expect(blas.drotg.name).toStrictEqual('drotg');
      expect(blas.drotg.level).toStrictEqual(1);
      expect(blas.drotg.type).toStrictEqual('d');
      expect(typeof blas.drotg.function).toStrictEqual('function');
    });

    it('should contain correct DROTMG routine', () => {
      expect(blas.hasOwnProperty('drotmg')).toBeTruthy();
      expect(blas.drotmg.name).toStrictEqual('drotmg');
      expect(blas.drotmg.level).toStrictEqual(1);
      expect(blas.drotmg.type).toStrictEqual('d');
      expect(typeof blas.drotmg.function).toStrictEqual('function');
    });

    it('should contain correct DROT routine', () => {
      expect(blas.hasOwnProperty('drot')).toBeTruthy();
      expect(blas.drot.name).toStrictEqual('drot');
      expect(blas.drot.level).toStrictEqual(1);
      expect(blas.drot.type).toStrictEqual('d');
      expect(typeof blas.drot.function).toStrictEqual('function');
    });

    it('should contain correct DROTM routine', () => {
      expect(blas.hasOwnProperty('drotm')).toBeTruthy();
      expect(blas.drotm.name).toStrictEqual('drotm');
      expect(blas.drotm.level).toStrictEqual(1);
      expect(blas.drotm.type).toStrictEqual('d');
      expect(typeof blas.drotm.function).toStrictEqual('function');
    });

    it('should contain correct DSWAP routine', () => {
      expect(blas.hasOwnProperty('dswap')).toBeTruthy();
      expect(blas.dswap.name).toStrictEqual('dswap');
      expect(blas.dswap.level).toStrictEqual(1);
      expect(blas.dswap.type).toStrictEqual('d');
      expect(typeof blas.dswap.function).toStrictEqual('function');
    });

    it('should contain correct DSCAL routine', () => {
      expect(blas.hasOwnProperty('dscal')).toBeTruthy();
      expect(blas.dscal.name).toStrictEqual('dscal');
      expect(blas.dscal.level).toStrictEqual(1);
      expect(blas.dscal.type).toStrictEqual('d');
      expect(typeof blas.dscal.function).toStrictEqual('function');
    });

    it('should contain correct DCOPY routine', () => {
      expect(blas.hasOwnProperty('dcopy')).toBeTruthy();
      expect(blas.dcopy.name).toStrictEqual('dcopy');
      expect(blas.dcopy.level).toStrictEqual(1);
      expect(blas.dcopy.type).toStrictEqual('d');
      expect(typeof blas.dcopy.function).toStrictEqual('function');
    });

    it('should contain correct DAXPY routine', () => {
      expect(blas.hasOwnProperty('daxpy')).toBeTruthy();
      expect(blas.daxpy.name).toStrictEqual('daxpy');
      expect(blas.daxpy.level).toStrictEqual(1);
      expect(blas.daxpy.type).toStrictEqual('d');
      expect(typeof blas.daxpy.function).toStrictEqual('function');
    });

    it('should contain correct DDOT routine', () => {
      expect(blas.hasOwnProperty('ddot')).toBeTruthy();
      expect(blas.ddot.name).toStrictEqual('ddot');
      expect(blas.ddot.level).toStrictEqual(1);
      expect(blas.ddot.type).toStrictEqual('d');
      expect(typeof blas.ddot.function).toStrictEqual('function');
    });

    it('should contain correct DSDOT routine', () => {
      expect(blas.hasOwnProperty('dsdot')).toBeTruthy();
      expect(blas.dsdot.name).toStrictEqual('dsdot');
      expect(blas.dsdot.level).toStrictEqual(1);
      expect(blas.dsdot.type).toStrictEqual('d');
      expect(typeof blas.dsdot.function).toStrictEqual('function');
    });

    it('should contain correct DNRM2 routine', () => {
      expect(blas.hasOwnProperty('dnrm2')).toBeTruthy();
      expect(blas.dnrm2.name).toStrictEqual('dnrm2');
      expect(blas.dnrm2.level).toStrictEqual(1);
      expect(blas.dnrm2.type).toStrictEqual('d');
      expect(typeof blas.dnrm2.function).toStrictEqual('function');
    });

    it('should contain correct DZNRM2 routine', () => {
      expect(blas.hasOwnProperty('dznrm2')).toBeTruthy();
      expect(blas.dznrm2.name).toStrictEqual('dznrm2');
      expect(blas.dznrm2.level).toStrictEqual(1);
      expect(blas.dznrm2.type).toStrictEqual('d');
      expect(typeof blas.dznrm2.function).toStrictEqual('function');
    });

    it('should contain correct DASUM routine', () => {
      expect(blas.hasOwnProperty('dasum')).toBeTruthy();
      expect(blas.dasum.name).toStrictEqual('dasum');
      expect(blas.dasum.level).toStrictEqual(1);
      expect(blas.dasum.type).toStrictEqual('d');
      expect(typeof blas.dasum.function).toStrictEqual('function');
    });

    it('should contain correct IDAMAX routine', () => {
      expect(blas.hasOwnProperty('idamax')).toBeTruthy();
      expect(blas.idamax.name).toStrictEqual('idamax');
      expect(blas.idamax.level).toStrictEqual(1);
      expect(blas.idamax.type).toStrictEqual('d');
      expect(typeof blas.idamax.function).toStrictEqual('function');
    });
  });

  describe('Level 1 - Complex', () => {
    it('should contain correct CROTG routine', () => {
      expect(blas.hasOwnProperty('crotg')).toBeTruthy();
      expect(blas.crotg.name).toStrictEqual('crotg');
      expect(blas.crotg.level).toStrictEqual(1);
      expect(blas.crotg.type).toStrictEqual('c');
      expect(typeof blas.crotg.function).toStrictEqual('function');
    });

    it('should contain correct CSROT routine', () => {
      expect(blas.hasOwnProperty('csrot')).toBeTruthy();
      expect(blas.csrot.name).toStrictEqual('csrot');
      expect(blas.csrot.level).toStrictEqual(1);
      expect(blas.csrot.type).toStrictEqual('c');
      expect(typeof blas.csrot.function).toStrictEqual('function');
    });

    it('should contain correct CSWAP routine', () => {
      expect(blas.hasOwnProperty('cswap')).toBeTruthy();
      expect(blas.cswap.name).toStrictEqual('cswap');
      expect(blas.cswap.level).toStrictEqual(1);
      expect(blas.cswap.type).toStrictEqual('c');
      expect(typeof blas.cswap.function).toStrictEqual('function');
    });

    it('should contain correct CSCAL routine', () => {
      expect(blas.hasOwnProperty('cscal')).toBeTruthy();
      expect(blas.cscal.name).toStrictEqual('cscal');
      expect(blas.cscal.level).toStrictEqual(1);
      expect(blas.cscal.type).toStrictEqual('c');
      expect(typeof blas.cscal.function).toStrictEqual('function');
    });

    it('should contain correct CCOPY routine', () => {
      expect(blas.hasOwnProperty('ccopy')).toBeTruthy();
      expect(blas.ccopy.name).toStrictEqual('ccopy');
      expect(blas.ccopy.level).toStrictEqual(1);
      expect(blas.ccopy.type).toStrictEqual('c');
      expect(typeof blas.ccopy.function).toStrictEqual('function');
    });

    it('should contain correct CAXPY routine', () => {
      expect(blas.hasOwnProperty('caxpy')).toBeTruthy();
      expect(blas.caxpy.name).toStrictEqual('caxpy');
      expect(blas.caxpy.level).toStrictEqual(1);
      expect(blas.caxpy.type).toStrictEqual('c');
      expect(typeof blas.caxpy.function).toStrictEqual('function');
    });

    it('should contain correct CDOTU routine', () => {
      expect(blas.hasOwnProperty('cdotu')).toBeTruthy();
      expect(blas.cdotu.name).toStrictEqual('cdotu');
      expect(blas.cdotu.level).toStrictEqual(1);
      expect(blas.cdotu.type).toStrictEqual('c');
      expect(typeof blas.cdotu.function).toStrictEqual('function');
    });

    it('should contain correct CDOTC routine', () => {
      expect(blas.hasOwnProperty('cdotc')).toBeTruthy();
      expect(blas.cdotc.name).toStrictEqual('cdotc');
      expect(blas.cdotc.level).toStrictEqual(1);
      expect(blas.cdotc.type).toStrictEqual('c');
      expect(typeof blas.cdotc.function).toStrictEqual('function');
    });

    it('should contain correct SCASUM routine', () => {
      expect(blas.hasOwnProperty('scasum')).toBeTruthy();
      expect(blas.scasum.name).toStrictEqual('scasum');
      expect(blas.scasum.level).toStrictEqual(1);
      expect(blas.scasum.type).toStrictEqual('c');
      expect(typeof blas.scasum.function).toStrictEqual('function');
    });

    it('should contain correct ICAMAX routine', () => {
      expect(blas.hasOwnProperty('icamax')).toBeTruthy();
      expect(blas.icamax.name).toStrictEqual('icamax');
      expect(blas.icamax.level).toStrictEqual(1);
      expect(blas.icamax.type).toStrictEqual('c');
      expect(typeof blas.icamax.function).toStrictEqual('function');
    });
  });

  describe('Level 1 - Double Complex', () => {
    it('should contain correct ZROTG routine', () => {
      expect(blas.hasOwnProperty('zrotg')).toBeTruthy();
      expect(blas.zrotg.name).toStrictEqual('zrotg');
      expect(blas.zrotg.level).toStrictEqual(1);
      expect(blas.zrotg.type).toStrictEqual('z');
      expect(typeof blas.zrotg.function).toStrictEqual('function');
    });

    it('should contain correct ZDROT routine', () => {
      expect(blas.hasOwnProperty('zdrot')).toBeTruthy();
      expect(blas.zdrot.name).toStrictEqual('zdrot');
      expect(blas.zdrot.level).toStrictEqual(1);
      expect(blas.zdrot.type).toStrictEqual('z');
      expect(typeof blas.zdrot.function).toStrictEqual('function');
    });

    it('should contain correct ZSWAP routine', () => {
      expect(blas.hasOwnProperty('zswap')).toBeTruthy();
      expect(blas.zswap.name).toStrictEqual('zswap');
      expect(blas.zswap.level).toStrictEqual(1);
      expect(blas.zswap.type).toStrictEqual('z');
      expect(typeof blas.zswap.function).toStrictEqual('function');
    });

    it('should contain correct ZSCAL routine', () => {
      expect(blas.hasOwnProperty('zscal')).toBeTruthy();
      expect(blas.zscal.name).toStrictEqual('zscal');
      expect(blas.zscal.level).toStrictEqual(1);
      expect(blas.zscal.type).toStrictEqual('z');
      expect(typeof blas.zscal.function).toStrictEqual('function');
    });

    it('should contain correct ZDSCAL routine', () => {
      expect(blas.hasOwnProperty('zdscal')).toBeTruthy();
      expect(blas.zdscal.name).toStrictEqual('zdscal');
      expect(blas.zdscal.level).toStrictEqual(1);
      expect(blas.zdscal.type).toStrictEqual('z');
      expect(typeof blas.zdscal.function).toStrictEqual('function');
    });

    it('should contain correct ZCOPY routine', () => {
      expect(blas.hasOwnProperty('zcopy')).toBeTruthy();
      expect(blas.zcopy.name).toStrictEqual('zcopy');
      expect(blas.zcopy.level).toStrictEqual(1);
      expect(blas.zcopy.type).toStrictEqual('z');
      expect(typeof blas.zcopy.function).toStrictEqual('function');
    });

    it('should contain correct ZAXPY routine', () => {
      expect(blas.hasOwnProperty('zaxpy')).toBeTruthy();
      expect(blas.zaxpy.name).toStrictEqual('zaxpy');
      expect(blas.zaxpy.level).toStrictEqual(1);
      expect(blas.zaxpy.type).toStrictEqual('z');
      expect(typeof blas.zaxpy.function).toStrictEqual('function');
    });

    it('should contain correct ZDOTU routine', () => {
      expect(blas.hasOwnProperty('zdotu')).toBeTruthy();
      expect(blas.zdotu.name).toStrictEqual('zdotu');
      expect(blas.zdotu.level).toStrictEqual(1);
      expect(blas.zdotu.type).toStrictEqual('z');
      expect(typeof blas.zdotu.function).toStrictEqual('function');
    });

    it('should contain correct ZDOTC routine', () => {
      expect(blas.hasOwnProperty('zdotc')).toBeTruthy();
      expect(blas.zdotc.name).toStrictEqual('zdotc');
      expect(blas.zdotc.level).toStrictEqual(1);
      expect(blas.zdotc.type).toStrictEqual('z');
      expect(typeof blas.zdotc.function).toStrictEqual('function');
    });

    it('should contain correct DZASUM routine', () => {
      expect(blas.hasOwnProperty('dzasum')).toBeTruthy();
      expect(blas.dzasum.name).toStrictEqual('dzasum');
      expect(blas.dzasum.level).toStrictEqual(1);
      expect(blas.dzasum.type).toStrictEqual('z');
      expect(typeof blas.dzasum.function).toStrictEqual('function');
    });

    it('should contain correct IZAMAX routine', () => {
      expect(blas.hasOwnProperty('izamax')).toBeTruthy();
      expect(blas.izamax.name).toStrictEqual('izamax');
      expect(blas.izamax.level).toStrictEqual(1);
      expect(blas.izamax.type).toStrictEqual('z');
      expect(typeof blas.izamax.function).toStrictEqual('function');
    });
  });
});
