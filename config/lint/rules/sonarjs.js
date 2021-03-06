/** Config to extend eslint with sonarjs. */
module.exports = {
  extends: ["plugin:sonarjs/recommended"],
  plugins: ["sonarjs"],
  rules: {
    "sonarjs/no-all-duplicated-branches": 2,
    "sonarjs/no-extra-arguments": 2,
    "sonarjs/no-identical-conditions": 2,
    "sonarjs/no-identical-expressions": 2,
    "sonarjs/no-one-iteration-loop": 2,
    "sonarjs/no-use-of-empty-return-value": 2,
    "sonarjs/cognitive-complexity": ["error", 20],
    "sonarjs/max-switch-cases": 2,
    "sonarjs/no-collapsible-if": 2,
    "sonarjs/no-duplicate-string": 2,
    "sonarjs/no-duplicated-branches": 2,
    "sonarjs/no-identical-functions": 2,
    "sonarjs/no-inverted-boolean-check": 2,
    "sonarjs/no-redundant-boolean": 2,
    "sonarjs/no-small-switch": 2,
    "sonarjs/prefer-immediate-return": 2,
    "sonarjs/prefer-object-literal": 2,
    "sonarjs/prefer-single-boolean-return": 2,
    "sonarjs/prefer-while": 2,
  },
};
