# eslint-config-kael89-ts

## ESLint configuration for TypeScript projects

This the base [ESLint](https://eslint.org/) configuration I use in personal TypeScript projects, as an installable `npm` package:

✔ Extends the popular [Airbnb Style Guide](https://github.com/airbnb/javascript)

✔ Uses [Prettier](https://prettier.io/) for code formatting

✔ Provides additional linting for [Jest](https://jestjs.io/), [React](https://reactjs.org/)

### Usage

1. Install the package and its minimum required peer dependencies:

```bash
npm install kael89/eslint-config-kael89-ts#v2.1.0 eslint prettier
```

2. Extend from this package in your [ESLint configuration](https://eslint.org/docs/user-guide/configuring). The simplest way to do so is adding an `eslintConfig` stanza in your project's `package.json`:

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

👉 For the best linting experience, we suggest including the settings specified in `tsconfig.json` in your project's TS configuration.

**Author:** Kostas Karvounis https://codinglicks.com
