// Import
import { URL } from 'url';
import path from 'path';
import TestSequencer from '@jest/test-sequencer';
import sequence from './data/sequence.json' assert { type: 'json' };

// Modify sequence with relative paths
const __dirname = new URL('.', import.meta.url).pathname;
const seq = sequence.map((file) => path.join(__dirname, file).slice(1));

// Custom test sequencer class
class CustomSequencer extends TestSequencer.default {
  sort(tests) {
    return tests.sort((left, right) => {
      const l = seq.indexOf(left.path);
      const r = seq.indexOf(right.path);

      if (l === r) {
        return 0;
      }
      if (l === -1) {
        return 1;
      }
      if (r === -1) {
        return -1;
      }
      return l < r ? -1 : 1;
    });
  }
};

// Export
export default CustomSequencer;

