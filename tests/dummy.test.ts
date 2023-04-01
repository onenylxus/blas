// Import
import blas from '../src/index';

// Dummy test
describe('Dummy test', () => {
  test('Should pass the test', () => {
    expect(blas instanceof Object).toBeTruthy();
  });
});
