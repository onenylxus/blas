// Import
import caxpy from './routines/1c/caxpy';
import ccopy from './routines/1c/ccopy';
import cdotc from './routines/1c/cdotc';
import cdotu from './routines/1c/cdotu';
import crotg from './routines/1c/crotg';
import cscal from './routines/1c/cscal';
import csrot from './routines/1c/csrot';
import csscal from './routines/1c/csscal';
import cswap from './routines/1c/cswap';
import dasum from './routines/1d/dasum';
import daxpy from './routines/1d/daxpy';
import dcopy from './routines/1d/dcopy';
import ddot from './routines/1d/ddot';
import dnrm2 from './routines/1d/dnrm2';
import drot from './routines/1d/drot';
import drotg from './routines/1d/drotg';
import drotm from './routines/1d/drotm';
import drotmg from './routines/1d/drotmg';
import dscal from './routines/1d/dscal';
import dsdot from './routines/1d/dsdot';
import dswap from './routines/1d/dswap';
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
import snrm2 from './routines/1s/snrm2';
import srot from './routines/1s/srot';
import srotg from './routines/1s/srotg';
import srotm from './routines/1s/srotm';
import srotmg from './routines/1s/srotmg';
import sscal from './routines/1s/sscal';
import sswap from './routines/1s/sswap';
import zaxpy from './routines/1z/zaxpy';
import zcopy from './routines/1z/zcopy';
import zdotc from './routines/1z/zdotc';
import zdotu from './routines/1z/zdotu';
import zdrot from './routines/1z/zdrot';
import zdscal from './routines/1z/zdscal';
import zrotg from './routines/1z/zrotg';
import zscal from './routines/1z/zscal';
import zswap from './routines/1z/zswap';

// Routine interface
interface Routine {
  level: 1 | 2 | 3;
  type: 's' | 'd' | 'c' | 'z';
  function: (...args: any[]) => void;
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
};

// Export
export default blas;
