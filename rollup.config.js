// Import
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';

// Export
export default {
  input: 'src/index.ts',
  output: {
    name: 'blas',
    file: 'dist/bundle.js',
    format: 'umd',
    exports: 'default',
  },
  plugins: [
    commonjs(),
    json({ compact: true }),
    resolve({ preferBuiltins: true }),
    typescript({ outDir: 'dist' }),
    terser(),
  ],
  treeshake: true,
};
