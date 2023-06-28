// Import
import blas from '../src/index';
import routines from './routines.json';

// Define test variables
let level: 1 | 2 | 3;
let type: 's' | 'd' | 'c' | 'z';

// Test routines function
const testRoutines = (routines: string[]): void => {
  routines.forEach((routine) => {
    it(`should contain correct ${routine.toUpperCase()} routine`, () => {
      expect(blas.hasOwnProperty(routine)).toBeTruthy();
      expect(blas[routine].level).toStrictEqual(level);
      expect(blas[routine].type).toStrictEqual(type);
      expect(blas[routine].function.name).toStrictEqual(routine);
    });
  });
};

// Module test
describe('Module test', () => {
  describe('Level 1 - Single', () => {
    beforeAll(() => {
      level = 1;
      type = 's';
    });
    testRoutines(routines['1s']);
  });

  describe('Level 1 - Double', () => {
    beforeAll(() => {
      level = 1;
      type = 'd';
    });
    testRoutines(routines['1d']);
  });

  describe('Level 1 - Complex', () => {
    beforeAll(() => {
      level = 1;
      type = 'c';
    });
    testRoutines(routines['1c']);
  });

  describe('Level 1 - Double Complex', () => {
    beforeAll(() => {
      level = 1;
      type = 'z';
    });
    testRoutines(routines['1z']);
  });

  describe('Level 2 - Single', () => {
    beforeAll(() => {
      level = 2;
      type = 's';
    });
    testRoutines(routines['2s']);
  });

  describe('Level 2 - Double', () => {
    beforeAll(() => {
      level = 2;
      type = 'd';
    });
    testRoutines(routines['2d']);
  });

  describe('Level 2 - Complex', () => {
    beforeAll(() => {
      level = 2;
      type = 'c';
    });
    testRoutines(routines['2c']);
  });

  describe('Level 2 - Double Complex', () => {
    beforeAll(() => {
      level = 2;
      type = 'z';
    });
    testRoutines(routines['2z']);
  });

  describe('Level 3 - Single', () => {
    beforeAll(() => {
      level = 3;
      type = 's';
    });
    testRoutines(routines['3s']);
  });

  describe('Level 3 - Double', () => {
    beforeAll(() => {
      level = 3;
      type = 'd';
    });
    testRoutines(routines['3d']);
  });

  describe('Level 3 - Complex', () => {
    beforeAll(() => {
      level = 3;
      type = 'c';
    });
    testRoutines(routines['3c']);
  });

  describe('Level 3 - Double Complex', () => {
    beforeAll(() => {
      level = 3;
      type = 'z';
    });
    testRoutines(routines['3z']);
  });
});
