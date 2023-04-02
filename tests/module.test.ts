// Import
import blas from '../src/index';

// Module test
describe('Module test', () => {
  test('Should pass the test', () => {
    expect(blas instanceof Object).toBeTruthy();
  });
});
