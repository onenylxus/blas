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

// Basic Linear Algebra Subprograms
const blas: Package = {
  // Level 1 - Single
  srotg,
  srotmg,
  srot,
  srotm,
  sswap,
  sscal,
  scopy,
  saxpy,
  sdot,
  sdsdot,
  snrm2,
  scnrm2,
  sasum,
  isamax,

  // Level 1 - Double
  drotg,
  drotmg,
  drot,
  drotm,
  dswap,
  dscal,
  dcopy,
  daxpy,
  ddot,
  dsdot,
  dnrm2,
  dznrm2,
  dasum,
  idamax,

  // Level 1 - Complex
  crotg,
  csrot,
  cswap,
  cscal,
  csscal,
  ccopy,
  caxpy,
  cdotu,
  cdotc,
  scasum,
  icamax,

  // Level 1 - Double complex
  zrotg,
  zdrot,
  zswap,
  zscal,
  zdscal,
  zcopy,
  zaxpy,
  zdotu,
  zdotc,
  dzasum,
  izamax,

  // Level 2 - Single
  sgemv,
  sgbmv,
  ssymv,
  ssbmv,
  sspmv,
  strmv,
  stbmv,
  stpmv,
  strsv,
  stbsv,
  stpsv,
  sger,
  ssyr,
  sspr,
  ssyr2,
  sspr2,

  // Level 2 - Double
  dgemv,
  dgbmv,
  dsymv,
  dsbmv,
  dspmv,
  dtrmv,
  dtbmv,
  dtpmv,
  dtrsv,
  dtbsv,
  dtpsv,
  dger,
  dsyr,
  dspr,
  dsyr2,
  dspr2,

  // Level 2 - Complex
  cgemv,
  cgbmv,
  chemv,
  chbmv,
  chpmv,
  ctrmv,
  ctbmv,
  ctpmv,
  ctrsv,
  ctbsv,
  ctpsv,
  cgeru,
  cgerc,
  cher,
  chpr,
  cher2,
  chpr2,

  // Level 2 - Double Complex
  zgemv,
  zgbmv,
  zhemv,
  zhbmv,
  zhpmv,
  ztrmv,
  ztbmv,
  ztpmv,
  ztrsv,
  ztbsv,
  ztpsv,
  zgeru,
  zgerc,
  zher,
  zhpr,
  zher2,
  zhpr2,

  // Level 3 - Single
  sgemm,
  ssymm,
  ssyrk,
  ssyr2k,
  strmm,
  strsm,

  // Level 3 - Double
  dgemm,
  dsymm,
  dsyrk,
  dsyr2k,
  dtrmm,
  dtrsm,

  // Level 3 - Complex
  cgemm,
  chemm,
  cher2k,
  cherk,
  csymm,
  csyr2k,
  csyrk,
  ctrmm,
  ctrsm,

  // Level 3 - Double Complex
  zgemm,
  zsymm,
  zhemm,
  zsyrk,
  zherk,
  zsyr2k,
  zher2k,
  ztrmm,
  ztrsm,
};

// Export
export default blas;
