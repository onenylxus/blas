// Import
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
import dznrm2 from './routines/1d/dznrm2';
import idamax from './routines/1d/idamax';
import isamax from './routines/1s/isamax';
import sasum from './routines/1s/sasum';
import saxpy from './routines/1s/saxpy';
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

// Routine interface
interface Routine {
  name: string;
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
  srotg: { name: 'srotg', level: 1, type: 's', function: srotg },
  srotmg: { name: 'srotmg', level: 1, type: 's', function: srotmg },
  srot: { name: 'srot', level: 1, type: 's', function: srot },
  srotm: { name: 'srotmg', level: 1, type: 's', function: srotm },
  sswap: { name: 'sswap', level: 1, type: 's', function: sswap },
  sscal: { name: 'sscal', level: 1, type: 's', function: sscal },
  scopy: { name: 'scopy', level: 1, type: 's', function: scopy },
  saxpy: { name: 'saxpy', level: 1, type: 's', function: saxpy },
  sdot: { name: 'sdot', level: 1, type: 's', function: sdot },
  sdsdot: { name: 'sdsdot', level: 1, type: 's', function: sdsdot },
  snrm2: { name: 'snrm2', level: 1, type: 's', function: snrm2 },
  scnrm2: { name: 'scnrm2', level: 1, type: 's', function: scnrm2 },
  sasum: { name: 'sasum', level: 1, type: 's', function: sasum },
  isamax: { name: 'isamax', level: 1, type: 's', function: isamax },

  // Level 1 - Double
  drotg: { name: 'drotg', level: 1, type: 'd', function: drotg },
  drotmg: { name: 'drotmg', level: 1, type: 'd', function: drotmg },
  drot: { name: 'drot', level: 1, type: 'd', function: drot },
  drotm: { name: 'drotm', level: 1, type: 'd', function: drotm },
  dswap: { name: 'dswap', level: 1, type: 'd', function: dswap },
  dscal: { name: 'dscal', level: 1, type: 'd', function: dscal },
  dcopy: { name: 'dcopy', level: 1, type: 'd', function: dcopy },
  daxpy: { name: 'daxpy', level: 1, type: 'd', function: daxpy },
  ddot: { name: 'ddot', level: 1, type: 'd', function: ddot },
  dsdot: { name: 'dsdot', level: 1, type: 'd', function: dsdot },
  dnrm2: { name: 'dnrm2', level: 1, type: 'd', function: dnrm2 },
  dznrm2: { name: 'dznrm2', level: 1, type: 'd', function: dznrm2 },
  dasum: { name: 'dasum', level: 1, type: 'd', function: dasum },
  idamax: { name: 'idamax', level: 1, type: 'd', function: idamax },
};

// Export
export default blas;
