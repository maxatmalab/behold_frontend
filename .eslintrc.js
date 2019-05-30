module.exports = {
    env: {
        browser: true,
        es6: true
    },
    parser: "babel-eslint",
    extends: ["eslint:recommended", 'plugin:prettier/recommended', "prettier/react"],
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly"
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2018,
        sourceType: "module"
    },
    plugins: ["react", "prettier"],
    rules: {
        indent: ["error", 4],
        "linebreak-style": ["error", "unix"],
        quotes: ["error", "single"],
        semi: ["error", "never"],
        "prettier/prettier": [
            "error",
            {
                trailingComma: "es5",
                singleQuote: true,
                printWidth: 100,
                semi: false,
                indent: 4
            }
        ]
    }
};
