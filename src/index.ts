// Import
import caxpy from './routines/1c/caxpy';
import ccopy from './routines/1c/ccopy';
import cdotc from './routines/1c/cdotc';
import cdotu from './routines/1c/cdotu';
import cgbmv from './routines/2c/cgbmv';
import cgemm from './routines/3c/cgemm';
import cgemv from './routines/2c/cgemv';
import cgerc from './routines/2c/cgerc';
import cgeru from './routines/2c/cgeru';
import chbmv from './routines/2c/chbmv';
import chemm from './routines/3c/chemm';
import chemv from './routines/2c/chemv';
import cher from './routines/2c/cher';
import cher2 from './routines/2c/cher2';
import cher2k from './routines/3c/cher2k';
import cherk from './routines/3c/cherk';
import chpmv from './routines/2c/chpmv';
import chpr from './routines/2c/chpr';
import chpr2 from './routines/2c/chpr2';
import crotg from './routines/1c/crotg';
import cscal from './routines/1c/cscal';
import csrot from './routines/1c/csrot';
import csscal from './routines/1c/csscal';
import cswap from './routines/1c/cswap';
import csymm from './routines/3c/csymm';
import csyr2k from './routines/3c/csyr2k';
import csyrk from './routines/3c/csyrk';
import ctbmv from './routines/2c/ctbmv';
import ctbsv from './routines/2c/ctbsv';
import ctpmv from './routines/2c/ctpmv';
import ctpsv from './routines/2c/ctpsv';
import ctrmm from './routines/3c/ctrmm';
import ctrmv from './routines/2c/ctrmv';
import ctrsm from './routines/3c/ctrsm';
import ctrsv from './routines/2c/ctrsv';
import dasum from './routines/1d/dasum';
import daxpy from './routines/1d/daxpy';
import dcopy from './routines/1d/dcopy';
import ddot from './routines/1d/ddot';
import dgbmv from './routines/2d/dgbmv';
import dgemm from './routines/3d/dgemm';
import dgemv from './routines/2d/dgemv';
import dger from './routines/2d/dger';
import dnrm2 from './routines/1d/dnrm2';
import drot from './routines/1d/drot';
import drotg from './routines/1d/drotg';
import drotm from './routines/1d/drotm';
import drotmg from './routines/1d/drotmg';
import dsbmv from './routines/2d/dsbmv';
import dscal from './routines/1d/dscal';
import dsdot from './routines/1d/dsdot';
import dspmv from './routines/2d/dspmv';
import dspr from './routines/2d/dspr';
import dspr2 from './routines/2d/dspr2';
import dswap from './routines/1d/dswap';
import dsymm from './routines/3d/dsymm';
import dsymv from './routines/2d/dsymv';
import dsyr from './routines/2d/dsyr';
import dsyr2 from './routines/2d/dsyr2';
import dsyr2k from './routines/3d/dsyr2k';
import dsyrk from './routines/3d/dsyrk';
import dtbmv from './routines/2d/dtbmv';
import dtbsv from './routines/2d/dtbsv';
import dtpmv from './routines/2d/dtpmv';
import dtpsv from './routines/2d/dtpsv';
import dtrmm from './routines/3d/dtrmm';
import dtrmv from './routines/2d/dtrmv';
import dtrsm from './routines/3d/dtrsm';
import dtrsv from './routines/2d/dtrsv';
import dzasum from './routines/1z/dzasum';
import dznrm2 from './routines/1d/dznrm2';
import icamax from './routines/1c/icamax';
import idamax from './routines/1d/idamax';
import isamax from './routines/1s/isamax';
import izamax from './routines/1z/izamax';
import sasum from './routines/1s/sasum';
import saxpy from './routines/1s/saxpy';
import scasum from './routines/1c/scasum';
import scopy from './routines/1s/scopy';
import scnrm2 from './routines/1s/scnrm2';
import sdot from './routines/1s/sdot';
import sdsdot from './routines/1s/sdsdot';
import sgbmv from './routines/2s/sgbmv';
import sgemm from './routines/3s/sgemm';
import sgemv from './routines/2s/sgemv';
import sger from './routines/2s/sger';
import snrm2 from './routines/1s/snrm2';
import srot from './routines/1s/srot';
import srotg from './routines/1s/srotg';
import srotm from './routines/1s/srotm';
import srotmg from './routines/1s/srotmg';
import ssbmv from './routines/2s/ssbmv';
import sscal from './routines/1s/sscal';
import sspmv from './routines/2s/sspmv';
import sspr from './routines/2s/sspr';
import sspr2 from './routines/2s/sspr2';
import sswap from './routines/1s/sswap';
import ssymm from './routines/3s/ssymm';
import ssymv from './routines/2s/ssymv';
import ssyr from './routines/2s/ssyr';
import ssyr2 from './routines/2s/ssyr2';
import ssyr2k from './routines/3s/ssyr2k';
import ssyrk from './routines/3s/ssyrk';
import stbmv from './routines/2s/stbmv';
import stbsv from './routines/2s/stbsv';
import stpmv from './routines/2s/stpmv';
import stpsv from './routines/2s/stpsv';
import strmm from './routines/3s/strmm';
import strmv from './routines/2s/strmv';
import strsm from './routines/3s/strsm';
import strsv from './routines/2s/strsv';
import zaxpy from './routines/1z/zaxpy';
import zcopy from './routines/1z/zcopy';
import zdotc from './routines/1z/zdotc';
import zdotu from './routines/1z/zdotu';
import zdrot from './routines/1z/zdrot';
import zdscal from './routines/1z/zdscal';
import zgbmv from './routines/2z/zgbmv';
import zgemm from './routines/3z/zgemm';
import zgemv from './routines/2z/zgemv';
import zgerc from './routines/2z/zgerc';
import zgeru from './routines/2z/zgeru';
import zhbmv from './routines/2z/zhbmv';
import zhemm from './routines/3z/zhemm';
import zhemv from './routines/2z/zhemv';
import zher from './routines/2z/zher';
import zher2 from './routines/2z/zher2';
import zher2k from './routines/3z/zher2k';
import zherk from './routines/3z/zherk';
import zhpmv from './routines/2z/zhpmv';
import zhpr from './routines/2z/zhpr';
import zhpr2 from './routines/2z/zhpr2';
import zrotg from './routines/1z/zrotg';
import zscal from './routines/1z/zscal';
import zswap from './routines/1z/zswap';
import zsymm from './routines/3z/zsymm';
import zsyr2k from './routines/3z/zsyr2k';
import zsyrk from './routines/3z/zsyrk';
import ztbmv from './routines/2z/ztbmv';
import ztbsv from './routines/2z/ztbsv';
import ztpmv from './routines/2z/ztpmv';
import ztpsv from './routines/2z/ztpsv';
import ztrmm from './routines/3z/ztrmm';
import ztrmv from './routines/2z/ztrmv';
import ztrsm from './routines/3z/ztrsm';
import ztrsv from './routines/2z/ztrsv';

// Routine interface
interface Routine {
  level: 1 | 2 | 3;
  type: 's' | 'd' | 'c' | 'z';
  function: (...args: any[]) => FVoid;
};

// Package interface
interface Package {
  [prop: string]: Routine;
}

// Basic Linear Algebra Subprograms
const blas: Package = {
  // Level 1 - Single
  srotg: { level: 1, type: 's', function: srotg },
  srotmg: { level: 1, type: 's', function: srotmg },
  srot: { level: 1, type: 's', function: srot },
  srotm: { level: 1, type: 's', function: srotm },
  sswap: { level: 1, type: 's', function: sswap },
  sscal: { level: 1, type: 's', function: sscal },
  scopy: { level: 1, type: 's', function: scopy },
  saxpy: { level: 1, type: 's', function: saxpy },
  sdot: { level: 1, type: 's', function: sdot },
  sdsdot: { level: 1, type: 's', function: sdsdot },
  snrm2: { level: 1, type: 's', function: snrm2 },
  scnrm2: { level: 1, type: 's', function: scnrm2 },
  sasum: { level: 1, type: 's', function: sasum },
  isamax: { level: 1, type: 's', function: isamax },

  // Level 1 - Double
  drotg: { level: 1, type: 'd', function: drotg },
  drotmg: { level: 1, type: 'd', function: drotmg },
  drot: { level: 1, type: 'd', function: drot },
  drotm: { level: 1, type: 'd', function: drotm },
  dswap: { level: 1, type: 'd', function: dswap },
  dscal: { level: 1, type: 'd', function: dscal },
  dcopy: { level: 1, type: 'd', function: dcopy },
  daxpy: { level: 1, type: 'd', function: daxpy },
  ddot: { level: 1, type: 'd', function: ddot },
  dsdot: { level: 1, type: 'd', function: dsdot },
  dnrm2: { level: 1, type: 'd', function: dnrm2 },
  dznrm2: { level: 1, type: 'd', function: dznrm2 },
  dasum: { level: 1, type: 'd', function: dasum },
  idamax: { level: 1, type: 'd', function: idamax },

  // Level 1 - Complex
  crotg: { level: 1, type: 'c', function: crotg },
  csrot: { level: 1, type: 'c', function: csrot },
  cswap: { level: 1, type: 'c', function: cswap },
  cscal: { level: 1, type: 'c', function: cscal },
  csscal: { level: 1, type: 'c', function: csscal },
  ccopy: { level: 1, type: 'c', function: ccopy },
  caxpy: { level: 1, type: 'c', function: caxpy },
  cdotu: { level: 1, type: 'c', function: cdotu },
  cdotc: { level: 1, type: 'c', function: cdotc },
  scasum: { level: 1, type: 'c', function: scasum },
  icamax: { level: 1, type: 'c', function: icamax },

  // Level 1 - Double complex
  zrotg: { level: 1, type: 'z', function: zrotg },
  zdrot: { level: 1, type: 'z', function: zdrot },
  zswap: { level: 1, type: 'z', function: zswap },
  zscal: { level: 1, type: 'z', function: zscal },
  zdscal: { level: 1, type: 'z', function: zdscal },
  zcopy: { level: 1, type: 'z', function: zcopy },
  zaxpy: { level: 1, type: 'z', function: zaxpy },
  zdotu: { level: 1, type: 'z', function: zdotu },
  zdotc: { level: 1, type: 'z', function: zdotc },
  dzasum: { level: 1, type: 'z', function: dzasum },
  izamax: { level: 1, type: 'z', function: izamax },

  // Level 2 - Single
  sgemv: { level: 2, type: 's', function: sgemv },
  sgbmv: { level: 2, type: 's', function: sgbmv },
  ssymv: { level: 2, type: 's', function: ssymv },
  ssbmv: { level: 2, type: 's', function: ssbmv },
  sspmv: { level: 2, type: 's', function: sspmv },
  strmv: { level: 2, type: 's', function: strmv },
  stbmv: { level: 2, type: 's', function: stbmv },
  stpmv: { level: 2, type: 's', function: stpmv },
  strsv: { level: 2, type: 's', function: strsv },
  stbsv: { level: 2, type: 's', function: stbsv },
  stpsv: { level: 2, type: 's', function: stpsv },
  sger: { level: 2, type: 's', function: sger },
  ssyr: { level: 2, type: 's', function: ssyr },
  sspr: { level: 2, type: 's', function: sspr },
  ssyr2: { level: 2, type: 's', function: ssyr2 },
  sspr2: { level: 2, type: 's', function: sspr2 },

  // Level 2 - Double
  dgemv: { level: 2, type: 'd', function: dgemv },
  dgbmv: { level: 2, type: 'd', function: dgbmv },
  dsymv: { level: 2, type: 'd', function: dsymv },
  dsbmv: { level: 2, type: 'd', function: dsbmv },
  dspmv: { level: 2, type: 'd', function: dspmv },
  dtrmv: { level: 2, type: 'd', function: dtrmv },
  dtbmv: { level: 2, type: 'd', function: dtbmv },
  dtpmv: { level: 2, type: 'd', function: dtpmv },
  dtrsv: { level: 2, type: 'd', function: dtrsv },
  dtbsv: { level: 2, type: 'd', function: dtbsv },
  dtpsv: { level: 2, type: 'd', function: dtpsv },
  dger: { level: 2, type: 'd', function: dger },
  dsyr: { level: 2, type: 'd', function: dsyr },
  dspr: { level: 2, type: 'd', function: dspr },
  dsyr2: { level: 2, type: 'd', function: dsyr2 },
  dspr2: { level: 2, type: 'd', function: dspr2 },

  // Level 2 - Complex
  cgemv: { level: 2, type: 'c', function: cgemv },
  cgbmv: { level: 2, type: 'c', function: cgbmv },
  chemv: { level: 2, type: 'c', function: chemv },
  chbmv: { level: 2, type: 'c', function: chbmv },
  chpmv: { level: 2, type: 'c', function: chpmv },
  ctrmv: { level: 2, type: 'c', function: ctrmv },
  ctbmv: { level: 2, type: 'c', function: ctbmv },
  ctpmv: { level: 2, type: 'c', function: ctpmv },
  ctrsv: { level: 2, type: 'c', function: ctrsv },
  ctbsv: { level: 2, type: 'c', function: ctbsv },
  ctpsv: { level: 2, type: 'c', function: ctpsv },
  cgeru: { level: 2, type: 'c', function: cgeru },
  cgerc: { level: 2, type: 'c', function: cgerc },
  cher: { level: 2, type: 'c', function: cher },
  chpr: { level: 2, type: 'c', function: chpr },
  cher2: { level: 2, type: 'c', function: cher2 },
  chpr2: { level: 2, type: 'c', function: chpr2 },

  // Level 2 - Double Complex
  zgemv: { level: 2, type: 'z', function: zgemv },
  zgbmv: { level: 2, type: 'z', function: zgbmv },
  zhemv: { level: 2, type: 'z', function: zhemv },
  zhbmv: { level: 2, type: 'z', function: zhbmv },
  zhpmv: { level: 2, type: 'z', function: zhpmv },
  ztrmv: { level: 2, type: 'z', function: ztrmv },
  ztbmv: { level: 2, type: 'z', function: ztbmv },
  ztpmv: { level: 2, type: 'z', function: ztpmv },
  ztrsv: { level: 2, type: 'z', function: ztrsv },
  ztbsv: { level: 2, type: 'z', function: ztbsv },
  ztpsv: { level: 2, type: 'z', function: ztpsv },
  zgeru: { level: 2, type: 'z', function: zgeru },
  zgerc: { level: 2, type: 'z', function: zgerc },
  zher: { level: 2, type: 'z', function: zher },
  zhpr: { level: 2, type: 'z', function: zhpr },
  zher2: { level: 2, type: 'z', function: zher2 },
  zhpr2: { level: 2, type: 'z', function: zhpr2 },

  // Level 3 - Single
  sgemm: { level: 3, type: 's', function: sgemm },
  ssymm: { level: 3, type: 's', function: ssymm },
  ssyrk: { level: 3, type: 's', function: ssyrk },
  ssyr2k: { level: 3, type: 's', function: ssyr2k },
  strmm: { level: 3, type: 's', function: strmm },
  strsm: { level: 3, type: 's', function: strsm },

  // Level 3 - Double
  dgemm: { level: 3, type: 'd', function: dgemm },
  dsymm: { level: 3, type: 'd', function: dsymm },
  dsyrk: { level: 3, type: 'd', function: dsyrk },
  dsyr2k: { level: 3, type: 'd', function: dsyr2k },
  dtrmm: { level: 3, type: 'd', function: dtrmm },
  dtrsm: { level: 3, type: 'd', function: dtrsm },

  // Level 3 - Complex
  cgemm: { level: 3, type: 'c', function: cgemm },
  chemm: { level: 3, type: 'c', function: chemm },
  cher2k: { level: 3, type: 'c', function: cher2k },
  cherk: { level: 3, type: 'c', function: cherk },
  csymm: { level: 3, type: 'c', function: csymm },
  csyr2k: { level: 3, type: 'c', function: csyr2k },
  csyrk: { level: 3, type: 'c', function: csyrk },
  ctrmm: { level: 3, type: 'c', function: ctrmm },
  ctrsm: { level: 3, type: 'c', function: ctrsm },

  // Level 3 - Double Complex
  zgemm: { level: 3, type: 'z', function: zgemm },
  zsymm: { level: 3, type: 'z', function: zsymm },
  zhemm: { level: 3, type: 'z', function: zhemm },
  zsyrk: { level: 3, type: 'z', function: zsyrk },
  zherk: { level: 3, type: 'z', function: zherk },
  zsyr2k: { level: 3, type: 'z', function: zsyr2k },
  zher2k: { level: 3, type: 'z', function: zher2k },
  ztrmm: { level: 3, type: 'z', function: ztrmm },
  ztrsm: { level: 3, type: 'z', function: ztrsm },
};

// Export
export default blas;
