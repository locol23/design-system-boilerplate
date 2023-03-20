/// <reference types="vitest" />

import react from '@vitejs/plugin-react-swc'
import path from 'node:path'
import { defineConfig } from 'vite'
import linaria from '@linaria/vite'

export default defineConfig(() => ({
  plugins: [
    react(),
    linaria({
      babelOptions: {
        presets: ['@babel/preset-typescript', '@babel/preset-react'],
      },
      include: ['**/*.{ts,tsx}'],
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(path.join('src/index.ts')),
      fileName: 'component-library',
      formats: ['es', 'cjs'],
      name: 'component-library',
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
  test: {
    environment: 'happy-dom',
    globals: true,
    setupFiles: './setupTest.ts',
  },
}))
