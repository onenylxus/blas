// Import
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
};

// Export
export default blas;
