module.exports = {
    "extends": [
      "stylelint-scss",
      "stylelint-config-recommended",
      'stylelint-config-recommended-vue/scss',
      "stylelint-config-twbs-bootstrap",
      // "stylelint-magic-numbers"
    ],
    "overrides": [
      {
        "files": ["**/*.scss"],
        "customSyntax": "postcss-scss",
        "rules": {
          "at-rule-no-unknown": null
        }
      },
    ],
    "ignoreFiles": [
      "**/_variables.scss",
      "**/*.tsx",
      "**/*.ts",
      "**/*.js",
      "**/*.json"
    ],
    "rules": {
      "indentation": 4,
      "color-named": "never",
      "at-rule-no-unknown": null,
      "declaration-colon-space-after": "always-single-line",
      "declaration-colon-space-before": "never",
      "string-quotes": "single",
      "value-list-comma-newline-after": null,
      "value-list-comma-space-after": "always-single-line",
      "shorthand-property-no-redundant-values": true,
      "selector-max-compound-selectors": 6,
      // "magic-numbers/magic-numbers": [
      //   true,
      //   {
      //     "acceptedValues": [
      //       "100%",
      //       "50%",
      //       "1rem",
      //       "1",
      //       "2rem",
      //       ".5rem",
      //       ".75rem"
      //     ],
      //     // "acceptedNumbers": [0, 0.25, 0.5, 1, 1.5, 2],
      //     "severity": "error"
      //   }
      // ],
      // "magic-numbers/magic-colors": [true]
    }
  }
