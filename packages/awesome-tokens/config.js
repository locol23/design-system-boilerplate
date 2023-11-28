module.exports = {
  source: ['tokens/**/*.json'],
  platforms: {
    ts: {
      transformGroup: 'js',
      buildPath: 'dist/',
      files: [
        {
          format: 'javascript/es6',
          destination: 'tokens.js',
        },
        {
          format: 'typescript/es6-declarations',
          destination: 'tokens.d.ts',
        },
      ],
    },
  },
}
