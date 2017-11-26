const BROWSERS = [
  'last 2 Chrome versions',
  'last 2 ChromeAndroid versions',
  'last 2 Firefox versions',
  'last 2 Safari versions',
  'last 2 ios versions',
  'last 2 edge versions',
  'last 2 ie versions',
  'last 2 Opera versions'
]

module.exports = {
  extends: 'stylelint-config-recommended-scss',
  plugins: [
    'stylelint-no-unsupported-browser-features'
  ],
  rules: {
    'plugin/no-unsupported-browser-features': [
      true,
      {
        'browsers': BROWSERS,
        'ignore': ['rem'],
        'severity': 'warning'
      }
    ],
    'no-empty-source': null
  }
}
