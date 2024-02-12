// Import
import blas from '../src/index';
import library from './data/library.json';

// Test routines function
const testRoutines = (routines: string[]): void => {
  routines.forEach((routine) => {
    it(`should contain correct ${routine.toUpperCase()} routine`, () => {
      expect(Object.prototype.hasOwnProperty.call(blas, routine)).toBeTruthy();
      expect(blas[routine].name).toStrictEqual(routine);
    });
  });
};

// Module test
describe('Module test', () => {
  describe('Level 1 - Single', () => {
    testRoutines(library['1s']);
  });

  describe('Level 1 - Double', () => {
    testRoutines(library['1d']);
  });

  describe('Level 1 - Complex', () => {
    testRoutines(library['1c']);
  });

  describe('Level 1 - Double Complex', () => {
    testRoutines(library['1z']);
  });

  describe('Level 2 - Single', () => {
    testRoutines(library['2s']);
  });

  describe('Level 2 - Double', () => {
    testRoutines(library['2d']);
  });

  describe('Level 2 - Complex', () => {
    testRoutines(library['2c']);
  });

  describe('Level 2 - Double Complex', () => {
    testRoutines(library['2z']);
  });

  describe('Level 3 - Single', () => {
    testRoutines(library['3s']);
  });

  describe('Level 3 - Double', () => {
    testRoutines(library['3d']);
  });

  describe('Level 3 - Complex', () => {
    testRoutines(library['3c']);
  });

  describe('Level 3 - Double Complex', () => {
    testRoutines(library['3z']);
  });
});
