module.exports = {
  "env": {
    "node": true,
    "es2022": true
  },
  "extends": [
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "prettier"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "tsconfig.json",
    "sourceType": "module"
  },
  "plugins": [
    "eslint-plugin-jsdoc",
    "@typescript-eslint"
  ],
  "rules": {
      "@babel/object-curly-spacing": "off",
      "@babel/semi": "off",
      "@typescript-eslint/adjacent-overload-signatures": "error",
      "@typescript-eslint/array-type": [
        "error",
        {
          "default": "array"
        }
      ],
      "@typescript-eslint/ban-types": [
        "error",
        {
          "types": {
            "Object": {
              "message": "Avoid using the `Object` type. Did you mean `object`?"
            },
            "Function": {
              "message": "Avoid using the `Function` type. Prefer a specific function type, like `() => void`."
            },
            "Boolean": {
              "message": "Avoid using the `Boolean` type. Did you mean `boolean`?"
            },
            "Number": {
              "message": "Avoid using the `Number` type. Did you mean `number`?"
            },
            "String": {
              "message": "Avoid using the `String` type. Did you mean `string`?"
            },
            "Symbol": {
              "message": "Avoid using the `Symbol` type. Did you mean `symbol`?"
            }
          }
        }
      ],
      "@typescript-eslint/brace-style": "off",
      "@typescript-eslint/comma-dangle": "off",
      "@typescript-eslint/comma-spacing": "off",
      "@typescript-eslint/consistent-type-assertions": "error",
      "@typescript-eslint/dot-notation": "error",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/func-call-spacing": "off",
      "@typescript-eslint/indent": "off",
      "@typescript-eslint/keyword-spacing": "off",
      "@typescript-eslint/member-delimiter-style": [
        "off",
        {
          "multiline": {
            "delimiter": "none",
            "requireLast": true
          },
          "singleline": {
            "delimiter": "semi",
            "requireLast": false
          }
        }
      ],
      "@typescript-eslint/naming-convention": "error",
      "@typescript-eslint/no-empty-function": "error",
      "@typescript-eslint/no-empty-interface": "error",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-extra-parens": "off",
      "@typescript-eslint/no-extra-semi": "off",
      "@typescript-eslint/no-misused-new": "error",
      "@typescript-eslint/no-namespace": "error",
      "@typescript-eslint/no-parameter-properties": "off",
      "@typescript-eslint/no-shadow": [
        "error",
        {
          "hoist": "all"
        }
      ],
      "@typescript-eslint/no-unused-expressions": "error",
      "@typescript-eslint/no-use-before-define": "off",
      "@typescript-eslint/no-var-requires": "error",
      "@typescript-eslint/object-curly-spacing": "off",
      "@typescript-eslint/prefer-for-of": "error",
      "@typescript-eslint/prefer-function-type": "error",
      "@typescript-eslint/prefer-namespace-keyword": "error",
      "@typescript-eslint/quotes": "off",
      "@typescript-eslint/semi": [
        "off",
        null
      ],
      "@typescript-eslint/space-before-blocks": "off",
      "@typescript-eslint/space-before-function-paren": "off",
      "@typescript-eslint/space-infix-ops": "off",
      "@typescript-eslint/triple-slash-reference": [
        "error",
        {
          "path": "always",
          "types": "prefer-import",
          "lib": "always"
        }
      ],
      "@typescript-eslint/type-annotation-spacing": "off",
      "@typescript-eslint/typedef": "off",
      "@typescript-eslint/unified-signatures": "error",
      "array-bracket-newline": "off",
      "array-bracket-spacing": "off",
      "array-element-newline": "off",
      "arrow-parens": [
        "off",
        "always"
      ],
      "arrow-spacing": "off",
      "babel/object-curly-spacing": "off",
      "babel/quotes": "off",
      "babel/semi": "off",
      "block-spacing": "off",
      "brace-style": [
        "off",
        "off"
      ],
      "comma-dangle": "off",
      "comma-spacing": "off",
      "comma-style": "off",
      "complexity": "off",
      "computed-property-spacing": "off",
      "constructor-super": "error",
      "curly": "off",
      "dot-location": "off",
      "dot-notation": "error",
      "eol-last": "off",
      "eqeqeq": [
        "error",
        "smart"
      ],
      "flowtype/boolean-style": "off",
      "flowtype/delimiter-dangle": "off",
      "flowtype/generic-spacing": "off",
      "flowtype/object-type-curly-spacing": "off",
      "flowtype/object-type-delimiter": "off",
      "flowtype/quotes": "off",
      "flowtype/semi": "off",
      "flowtype/space-after-type-colon": "off",
      "flowtype/space-before-generic-bracket": "off",
      "flowtype/space-before-type-colon": "off",
      "flowtype/union-intersection-spacing": "off",
      "for-direction": "error",
      "func-call-spacing": "off",
      "function-call-argument-newline": "off",
      "function-paren-newline": "off",
      "generator-star": "off",
      "generator-star-spacing": "off",
      "getter-return": "error",
      "guard-for-in": "error",
      "id-denylist": [
        "error",
        "any",
        "Number",
        "number",
        "String",
        "string",
        "Boolean",
        "boolean",
        "Undefined",
        "undefined"
      ],
      "id-match": "error",
      "implicit-arrow-linebreak": "off",
      "indent": "off",
      "indent-legacy": "off",
      "jsdoc/check-alignment": "error",
      "jsdoc/check-indentation": "error",
      "jsdoc/newline-after-description": "error",
      "jsx-quotes": "off",
      "key-spacing": "off",
      "keyword-spacing": "off",
      "linebreak-style": "off",
      "lines-around-comment": "off",
      "max-classes-per-file": [
        "error",
        1
      ],
      "max-len": "off",
      "multiline-ternary": "off",
      "new-parens": "off",
      "newline-per-chained-call": "off",
      "no-arrow-condition": "off",
      "no-async-promise-executor": "error",
      "no-bitwise": "error",
      "no-caller": "error",
      "no-case-declarations": "error",
      "no-class-assign": "error",
      "no-comma-dangle": "off",
      "no-compare-neg-zero": "error",
      "no-cond-assign": "error",
      "no-confusing-arrow": "off",
      "no-console": "error",
      "no-const-assign": "error",
      "no-constant-condition": "error",
      "no-control-regex": "error",
      "no-debugger": "error",
      "no-delete-var": "error",
      "no-dupe-args": "error",
      "no-dupe-class-members": "error",
      "no-dupe-else-if": "error",
      "no-dupe-keys": "error",
      "no-duplicate-case": "error",
      "no-empty": "error",
      "no-empty-character-class": "error",
      "no-empty-function": "error",
      "no-empty-pattern": "error",
      "no-eval": "error",
      "no-ex-assign": "error",
      "no-extra-boolean-cast": "error",
      "no-extra-parens": "off",
      "no-extra-semi": "off",
      "no-fallthrough": "off",
      "no-floating-decimal": "off",
      "no-func-assign": "error",
      "no-global-assign": "error",
      "no-import-assign": "error",
      "no-inner-declarations": "error",
      "no-invalid-regexp": "error",
      "no-invalid-this": "off",
      "no-irregular-whitespace": "off",
      "no-loss-of-precision": "error",
      "no-misleading-character-class": "error",
      "no-mixed-operators": "off",
      "no-mixed-spaces-and-tabs": "off",
      "no-multi-spaces": "off",
      "no-multiple-empty-lines": "off",
      "no-new-symbol": "error",
      "no-new-wrappers": "error",
      "no-nonoctal-decimal-escape": "error",
      "no-obj-calls": "error",
      "no-octal": "error",
      "no-prototype-builtins": "error",
      "no-redeclare": "error",
      "no-regex-spaces": "error",
      "no-reserved-keys": "off",
      "no-self-assign": "error",
      "no-setter-return": "error",
      "no-shadow": "error",
      "no-shadow-restricted-names": "error",
      "no-space-before-semi": "off",
      "no-spaced-func": "off",
      "no-sparse-arrays": "error",
      "no-tabs": "off",
      "no-this-before-super": "error",
      "no-throw-literal": "error",
      "no-trailing-spaces": "off",
      "no-undef": "error",
      "no-undef-init": "error",
      "no-underscore-dangle": "error",
      "no-unexpected-multiline": "off",
      "no-unreachable": "error",
      "no-unsafe-finally": "error",
      "no-unsafe-negation": "error",
      "no-unsafe-optional-chaining": "error",
      "no-unused-expressions": "error",
      "no-unused-labels": "error",
      "no-unused-vars": "error",
      "no-use-before-define": "off",
      "no-useless-backreference": "error",
      "no-useless-catch": "error",
      "no-useless-escape": "error",
      "no-var": "error",
      "no-whitespace-before-property": "off",
      "no-with": "error",
      "no-wrap-func": "off",
      "nonblock-statement-body-position": "off",
      "object-curly-newline": "off",
      "object-curly-spacing": "off",
      "object-property-newline": "off",
      "object-shorthand": "error",
      "one-var": [
        "error",
        "never"
      ],
      "one-var-declaration-per-line": "off",
      "operator-linebreak": "off",
      "padded-blocks": [
        "off",
        {
          "blocks": "never"
        },
        {
          "allowSingleLineBlocks": true
        }
      ],
      "prefer-const": "error",
      "quote-props": "off",
      "quotes": "off",
      "radix": "error",
      "require-yield": "error",
      "rest-spread-spacing": "off",
      "semi": "off",
      "semi-spacing": "off",
      "semi-style": "off",
      "space-after-function-name": "off",
      "space-after-keywords": "off",
      "space-before-blocks": "off",
      "space-before-function-paren": "off",
      "space-before-function-parentheses": "off",
      "space-before-keywords": "off",
      "space-in-brackets": "off",
      "space-in-parens": [
        "off",
        "never"
      ],
      "space-infix-ops": "off",
      "space-return-throw-case": "off",
      "space-unary-ops": "off",
      "space-unary-word-ops": "off",
      "spaced-comment": [
        "error",
        "always",
        {
          "markers": [
            "/"
          ]
        }
      ],
      "standard/array-bracket-even-spacing": "off",
      "standard/computed-property-even-spacing": "off",
      "standard/object-curly-even-spacing": "off",
      "switch-colon-spacing": "off",
      "template-curly-spacing": "off",
      "template-tag-spacing": "off",
      "unicode-bom": "off",
      "unicorn/empty-brace-spaces": "off",
      "unicorn/no-nested-ternary": "off",
      "unicorn/number-literal-case": "off",
      "use-isnan": "error",
      "valid-typeof": "off",
      "vue/array-bracket-newline": "off",
      "vue/array-bracket-spacing": "off",
      "vue/arrow-spacing": "off",
      "vue/block-spacing": "off",
      "vue/block-tag-newline": "off",
      "vue/brace-style": "off",
      "vue/comma-dangle": "off",
      "vue/comma-spacing": "off",
      "vue/comma-style": "off",
      "vue/dot-location": "off",
      "vue/func-call-spacing": "off",
      "vue/html-closing-bracket-newline": "off",
      "vue/html-closing-bracket-spacing": "off",
      "vue/html-end-tags": "off",
      "vue/html-indent": "off",
      "vue/html-quotes": "off",
      "vue/html-self-closing": "off",
      "vue/key-spacing": "off",
      "vue/keyword-spacing": "off",
      "vue/max-attributes-per-line": "off",
      "vue/max-len": "off",
      "vue/multiline-html-element-content-newline": "off",
      "vue/mustache-interpolation-spacing": "off",
      "vue/no-extra-parens": "off",
      "vue/no-multi-spaces": "off",
      "vue/no-spaces-around-equal-signs-in-attribute": "off",
      "vue/object-curly-newline": "off",
      "vue/object-curly-spacing": "off",
      "vue/object-property-newline": "off",
      "vue/operator-linebreak": "off",
      "vue/quote-props": "off",
      "vue/script-indent": "off",
      "vue/singleline-html-element-content-newline": "off",
      "vue/space-in-parens": "off",
      "vue/space-infix-ops": "off",
      "vue/space-unary-ops": "off",
      "vue/template-curly-spacing": "off",
      "wrap-iife": "off",
      "wrap-regex": "off",
      "yield-star-spacing": "off"
  }
};
