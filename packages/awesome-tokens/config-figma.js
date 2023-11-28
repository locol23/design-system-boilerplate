const { transform } = require('@divriots/style-dictionary-to-figma')

module.exports = {
  source: ['tokens/**/*.json'],
  format: {
    figmaTokensPlugin: ({ dictionary }) => {
      const transformedTokens = transform(dictionary.tokens)
      return JSON.stringify(transformedTokens, null, 2)
    },
  },
  platforms: {
    json: {
      transformGroup: 'js',
      buildPath: 'dist/',
      files: [
        {
          destination: 'tokens.json',
          format: 'figmaTokensPlugin',
        },
      ],
    },
  },
}
