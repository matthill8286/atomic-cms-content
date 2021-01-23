module.exports = {
  extends: ['@commitlint/config-conventional'],
  parserPreset: {
    parserOpts: {
      referenceActions: null,
      issuePrefixesCaseSensitive: true,
      issuePrefixes: ['MAG-'],
    },
  },
}
