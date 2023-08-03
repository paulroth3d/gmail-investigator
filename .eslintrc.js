module.exports = {
    "plugins": [
      "googleappsscript"
    ],
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true,
        "node": true,
        "jest": true,
        "googleappsscript/googleappsscript": true
    },
    "extends": "eslint:recommended",
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "rules": {
        'no-unused-vars': false
    }
};
