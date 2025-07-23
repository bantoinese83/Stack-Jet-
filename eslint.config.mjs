import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from 'globals';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

const weAreHighlyProficientInTypeScript = true;
const weLikeCodeStylingConsistencyEvenIfSomeRulesAreOpiniated = true;
const weDontMindSlowerRulesAsTheyAreUsuallyTheBestBecauseTheyUseTypeInformation = true;

export default [
  {
    ignores: ['node_modules', 'dist', 'build', 'coverage'],
  },
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
        ...globals.es2021,
      },
      parserOptions: {
        projectService: {
          allowDefaultProject: ['*.mjs', '*.js'],
        },
        tsconfigRootDir: import.meta.dirname,
        project: ['./tsconfig.eslint.json'],
        ecmaFeatures: {
          jsx: true,
        },
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: {
      js,
      tseslint,
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      // Add or adjust rules as needed
    },
  },
]; 