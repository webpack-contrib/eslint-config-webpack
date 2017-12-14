module.exports = {
  rules: {
    // disallow await inside of loops
    // http://eslint.org/docs/rules/no-await-in-loop
    'no-await-in-loop': 'error',

    // disallow assignment operators in conditional expressions
    // http://eslint.org/docs/rules/no-cond-assign
    'no-cond-assign': ['error', 'always'],

    // disallow the use of console
    // http://eslint.org/docs/rules/no-console
    'no-console': 'warn',

    // disallow constant expressions in conditions
    // http://eslint.org/docs/rules/no-constant-condition
    'no-constant-condition': 'warn',

    // disallow control characters in regular expressions
    // http://eslint.org/docs/rules/no-control-regex
    'no-control-regex': 'error',

    // disallow the use of debugger
    // http://eslint.org/docs/rules/no-debugger
    'no-debugger': 'error',

    // disallow duplicate arguments in function definitions
    // http://eslint.org/docs/rules/no-dupe-args
    'no-dupe-args': 'error',

    // disallow duplicate keys in object literals
    // http://eslint.org/docs/rules/no-dupe-keys
    'no-dupe-keys': 'error',

    // disallow duplicate case labels
    // http://eslint.org/docs/rules/no-duplicate-case
    'no-duplicate-case': 'error',

    // disallow empty character classes in regular expressions
    // http://eslint.org/docs/rules/no-empty-character-class
    'no-empty-character-class': 'error',

    // disallow empty block statements
    // http://eslint.org/docs/rules/no-empty
    'no-empty': 'error',

    // disallow reassigning exceptions in catch clauses
    // http://eslint.org/docs/rules/no-ex-assign
    'no-ex-assign': 'error',

    // disallow unnecessary boolean casts
    // http://eslint.org/docs/rules/no-extra-boolean-cast
    'no-extra-boolean-cast': 'error',

    // disallow unnecessary parentheses
    // http://eslint.org/docs/rules/no-extra-parens
    // This is handled by Prettier in Defaults 2.0
    'no-extra-parens': 'off',

    // disallow unnecessary semicolons
    // http://eslint.org/docs/rules/no-extra-semi
    // This is handled by Prettier in Defaults 2.0
    'no-extra-semi': 'off',

    // disallow reassigning function declarations
    // http://eslint.org/docs/rules/no-func-assign
    'no-func-assign': 'error',

    // disallow variable or function declarations in nested blocks
    // http://eslint.org/docs/rules/no-inner-declarations
    'no-inner-declarations': 'error',

    // disallow invalid regular expression strings in RegExp constructors
    // http://eslint.org/docs/rules/no-invalid-regexp
    'no-invalid-regexp': 'error',

    // disallow irregular whitespace outside of strings and comments
    // http://eslint.org/docs/rules/no-irregular-whitespace
    'no-irregular-whitespace': 'error',

    // disallow calling global object properties as functions
    // http://eslint.org/docs/rules/no-obj-calls
    'no-obj-calls': 'error',

    // disallow calling some Object.prototype methods directly on objects
    // http://eslint.org/docs/rules/no-prototype-builtins
    'no-prototype-builtins': 'error',

    // disallow multiple spaces in regular expressions
    // http://eslint.org/docs/rules/no-regex-spaces
    'no-regex-spaces': 'error',

    // disallow sparse arrays
    // http://eslint.org/docs/rules/no-sparse-arrays
    'no-sparse-arrays': 'error',

    // disallow template literal placeholder syntax in regular strings
    // http://eslint.org/docs/rules/no-template-curly-in-string
    'no-template-curly-in-string': 'error',

    // disallow confusing multiline expressions
    // http://eslint.org/docs/rules/no-unexpected-multiline
    // This is handled by Prettier in Defaults 2.0
    'no-unexpected-multiline': 'off',

    // disallow unreachable code after return, throw, continue, and break statements
    // http://eslint.org/docs/rules/no-unreachable
    'no-unreachable': 'error',

    // disallow control flow statements in finally blocks
    // http://eslint.org/docs/rules/no-unsafe-finally
    'no-unsafe-finally': 'error',

    // disallow negating the left operand of relational operators
    // http://eslint.org/docs/rules/no-unsafe-negation
    'no-unsafe-negation': 'error',

    // require calls to isNaN() when checking for NaN
    // http://eslint.org/docs/rules/use-isnan
    'use-isnan': 'error',

    // enforce valid JSDoc comments
    // http://eslint.org/docs/rules/valid-jsdoc
    'valid-jsdoc': 'off',

    // enforce comparing typeof expressions against valid strings
    // http://eslint.org/docs/rules/valid-typeof
    'valid-typeof': ['error', { requireStringLiterals: true }],
  },
};
