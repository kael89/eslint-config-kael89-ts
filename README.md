# eslint-config-kael89-ts

## ESLint configuration for TypeScript projects

This the base [ESLint](https://eslint.org/) configuration I use in personal TS projects, as an installable `npm` package:

✔ Extends the popular [Airbnb Style Guide](https://github.com/airbnb/javascript)

✔ Can be used for both generic TypeScript and React.js projects

✔ Uses [Prettier](https://prettier.io/) for code formatting

### Usage

1. Install the package and its peer dependencies:

```bash
npm install kael89/eslint-config-kael89-ts#v2.0.0 eslint prettier
```

2. Extend from this package in your [ESLint configuration](https://eslint.org/docs/user-guide/configuring). Simplest way is to add an `eslintConfig` stanza in your project's `package.json`:

```json
  "eslintConfig": {
    "extends": "kael89-ts"
  }
```

3. If you use a TS configuration file other than the default (`tsconfig.json` under the project's root), you need to specify its path:

```json
  "eslintConfig": {
    "parserOptions": {
      "project": "ts/tsconfig.dev.json",
    }
  }
```

**Author:** Kostas Karvounis https://codinglicks.com
