// Import
import blas from '../src/index';
import list from './list.json';

// Test routines function
const testRoutines = (routines: string[]): void => {
  routines.forEach((routine) => {
    it(`should contain correct ${routine.toUpperCase()} routine`, () => {
      expect(blas.hasOwnProperty(routine)).toBeTruthy();
      expect(blas[routine].name).toStrictEqual(routine);
    });
  });
};

// Module test
describe('Module test', () => {
  describe('Level 1 - Single', () => {
    testRoutines(list['1s']);
  });

  describe('Level 1 - Double', () => {
    testRoutines(list['1d']);
  });

  describe('Level 1 - Complex', () => {
    testRoutines(list['1c']);
  });

  describe('Level 1 - Double Complex', () => {
    testRoutines(list['1z']);
  });

  describe('Level 2 - Single', () => {
    testRoutines(list['2s']);
  });

  describe('Level 2 - Double', () => {
    testRoutines(list['2d']);
  });

  describe('Level 2 - Complex', () => {
    testRoutines(list['2c']);
  });

  describe('Level 2 - Double Complex', () => {
    testRoutines(list['2z']);
  });

  describe('Level 3 - Single', () => {
    testRoutines(list['3s']);
  });

  describe('Level 3 - Double', () => {
    testRoutines(list['3d']);
  });

  describe('Level 3 - Complex', () => {
    testRoutines(list['3c']);
  });

  describe('Level 3 - Double Complex', () => {
    testRoutines(list['3z']);
  });
});
