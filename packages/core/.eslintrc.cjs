module.exports = {
  extends: ['custom'],
  parserOptions: {
    tsconfigRootDir: __dirname,
  },
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['./setup.ts', './vite.config.ts', '**/*.test.ts', '**/*.test.tsx', '**/*.stories.tsx'],
      },
    ],
  },
}
