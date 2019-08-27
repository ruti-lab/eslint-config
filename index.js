const off = 0;
const error = 2;

module.exports = {
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            modules: true,
            experimentalDecorators: true
        }
    },
    env: {
        browser: true,
    },
    plugins: [
        '@typescript-eslint',
        'import',
        'vue'
    ],
    extends: [
        'airbnb-base',
        'plugin:import/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:vue/recommended'
    ],
    rules: {
        indent: [error, 4, {
            SwitchCase: 1,
        }],
        'max-len': [error, {
            code: 120,
            ignoreComments: true,
            ignoreUrls: true,
            ignoreRegExpLiterals: true,
        }],
        'no-plusplus': off,
        'require-jsdoc': [error, {
            require: {
                FunctionDeclaration: true,
                MethodDefinition: true,
                ClassDeclaration: true,
            },
        }],
        'space-before-function-paren': [error, 'always'],
        'valid-jsdoc': [error, {
            requireReturn: false,
            requireReturnDescription: false,
        }],

        'vue/html-indent': [error, 4]
    }
};
