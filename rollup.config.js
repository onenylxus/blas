// Import
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import nodePolyfills from 'rollup-plugin-polyfill-node';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';

const repositoryRoot = path.dirname(fileURLToPath(import.meta.url));
const sourceRoot = path.resolve(
  repositoryRoot,
  'src',
);

const absoluteImports = {
  name: 'absolute-imports',
  resolveId(source) {
    if (source === '@f') {
      return path.join(repositoryRoot, 'fortran-ts', 'src', 'index.ts');
    }

    if (!source.startsWith('@/')) {
      return null;
    }

    const aliasRoot = source.startsWith('@/utils/')
      ? path.resolve(repositoryRoot, 'utils')
      : sourceRoot;
    const suffix = source.startsWith('@/utils/')
      ? source.slice('@/utils/'.length)
      : source.slice(2);
    const target = path.resolve(aliasRoot, suffix);
    const candidates = [
      `${target}.ts`,
      `${target}.js`,
      path.join(target, 'index.ts'),
      path.join(target, 'index.js'),
      target,
    ];
    return candidates.find((candidate) => existsSync(candidate)) ?? null;
  },
};

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
    absoluteImports,
    commonjs(),
    json({ compact: true }),
    nodePolyfills(),
    resolve({ preferBuiltins: true }),
    typescript({ outDir: 'dist' }),
    terser(),
  ],
  treeshake: true,
};
