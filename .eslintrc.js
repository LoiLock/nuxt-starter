module.exports = {
  extends: [
      'plugin:@typescript-eslint/recommended',
      'plugin:import/recommended',
      'plugin:vue/vue3-essential',
    //   'plugin:vue/vue3-recommended',
      '@vue/airbnb',
      '@vue/typescript',
      '@nuxtjs/eslint-config-typescript',
  ],
  plugins: [
      '@typescript-eslint',
      '@html-eslint',
  ],
  parserOptions: {
      parser: '@typescript-eslint/parser',
      ecmaFeatures: {
          legacyDecorators: true,
      },
  },
  rules: {
      // // ! END OF SECTION TO BE REMOVED
      '@typescript-eslint/ban-ts-comment': ['error', {
        'ts-ignore': 'allow-with-description'
      }],
      '@typescript-eslint/camelcase': 'off',
      '@typescript-eslint/explicit-function-return-type': ['warn', {
          // allowExpressions is set to on because otherwise lazy Vue component imports get very tedious very quickly
          allowExpressions: true,
      }],
      '@typescript-eslint/no-empty-interface': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-useless-constructor': 'error',
      '@typescript-eslint/explicit-function-return-type': 'off',

      'no-empty-function': ['error', {
          allow: ['constructors'],
      }],

      'import/extensions': 'off',
      'import/no-extraneous-dependencies': 'off',
      'import/named': 'off',
      'import/no-cycle': 'off',
      'import/no-dynamic-require': 'warn',
      'import/prefer-default-export': 'off',

      'no-restricted-imports': ['error', {
          paths: ['../*', './*'],
          patterns: ['../*', './*'],
      }],

      'vue/no-static-inline-styles': 'error', // Will never remove this

      'array-bracket-spacing': ['error', 'never'],
      'object-curly-spacing': ['error', 'always'], // ? Because Emiel wanted me to add this

      'ban-ts-comment': 'off',
      '@html-eslint/element-newline': 'error',

      camelcase: 'off',
      'class-methods-use-this': 'off',

      'eol-last': 'error',

      'generator-star-spacing': 'off',
      'global-require': 'warn',
      'guard-for-in': 'error',
      radix: 'off',

      indent: [
          'error',
          2,
          {
              SwitchCase: 1,
          },
      ],

      'newline-after-var': ['error', 'always'], // ? Deprecated and replaced with the option below but not sure how to get them to match yet

      'padding-line-between-statements': [
          'error',
          {
              blankLine: 'always',
              prev: '*',
              next: [
                  'return',
              ],
          },
      ],

      'lines-between-class-members': ['error', 'always', {
          exceptAfterSingleLine: true,
      }],

      '@typescript-eslint/member-delimiter-style': ['error', {
          multiline: {
              delimiter: 'semi', // 'none' or 'semi' or 'comma'
              requireLast: true,
          },
          singleline: {
              delimiter: 'semi', // 'semi' or 'comma'
              requireLast: false,
          },
      }],

      '@typescript-eslint/consistent-type-imports': ['error', {
          prefer: 'type-imports',
      }],

      eqeqeq: 'error',

      'max-len': ['error', {
          code: 100,
          comments: 120,
      }],
      'vue/max-len': ['error', {
          code: 100,
          template: 120,
          comments: 120,
          ignorePattern: '',
          ignoreComments: false,
          ignoreTrailingComments: false,
          ignoreUrls: false,
          ignoreStrings: false,
          ignoreTemplateLiterals: false,
          ignoreRegExpLiterals: false,
          ignoreHTMLAttributeValues: false,
          ignoreHTMLTextContents: false,
      }],

      'no-tabs': 'error',

      'no-alert': 'off', // Alert was being used before ESLint
      'no-await-in-loop': 'off',
      'no-continue': 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-new': 'off',
      'no-param-reassign': ['warn', { props: false }],
      'no-restricted-syntax': 'off',
      'no-return-assign': ['warn', 'except-parens'],
      'no-trailing-spaces': 'error',
      'no-underscore-dangle': 'off',
      'no-plusplus': 'off',
      // `no-useless-constructor` throws error for unknown reason.
      'no-useless-constructor': 'off',
      'no-spaced-func': 'off',
      '@typescript-eslint/no-unused-vars': ['error'],
      'func-call-spacing': 'off',

      'object-curly-newline': ['error', {
          ImportDeclaration: 'never',
      }],

      'prefer-destructuring': ['error', {
          array: false,
          object: true,
      }],

      semi: ['error', 'always'],
      'sort-imports': 'error',

      'vue/html-indent': ['error', 2, {
          attribute: 1,
          baseIndent: 1,
          closeBracket: 0,
          alignAttributesVertically: true,
          ignores: [],
      }],
      'vue/script-indent': ['error', 2],
      'vue/no-multiple-template-root': 'off',
      'vue/no-unused-vars': 'error',
      'vue/attributes-order': ['error', {
          alphabetical: true,
      }],

      // Disable all accessibility rules
      'vuejs-accessibility/accessible-emoji': 'off',
      'vuejs-accessibility/alt-text': 'off',
      'vuejs-accessibility/anchor-has-content': 'off',
      'vuejs-accessibility/aria-props': 'off',
      'vuejs-accessibility/aria-role': 'off',
      'vuejs-accessibility/aria-unsupported-elements': 'off',
      'vuejs-accessibility/click-events-have-key-events': 'off',
      'vuejs-accessibility/form-control-has-label': 'off',
      'vuejs-accessibility/heading-has-content': 'off',
      'vuejs-accessibility/iframe-has-title': 'off',
      'vuejs-accessibility/interactive-supports-focus': 'off',
      'vuejs-accessibility/label-has-for': 'off',
      'vuejs-accessibility/media-has-caption': 'off',
      'vuejs-accessibility/mouse-events-have-key-events': 'off',
      'vuejs-accessibility/no-access-key': 'off',
      'vuejs-accessibility/no-autofocus': 'off',
      'vuejs-accessibility/no-distracting-elements': 'off',
      'vuejs-accessibility/no-onchange': 'off',
      'vuejs-accessibility/no-redundant-roles': 'off',
      'vuejs-accessibility/role-has-required-aria-props': 'off',
      'vuejs-accessibility/tabindex-no-positive': 'off',
  },
  overrides: [
      {
          files: [
              '*.vue',
          ],
          rules: {
            //   indent: 'off',
          },
      },
      {
          files: [
              '**/__tests__/*.{j,t}s?(x)',
              '**/tests/unit/**/*.spec.{j,t}s?(x)',
          ],
          env: {
              jest: true,
          },
      },
      {
          files: [
              '*',
          ],
          rules: {
              'import/order': 'off',
          },
      },
  ],
};
