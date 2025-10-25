import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from 'globals';
import { defineConfig, globalIgnores } from 'eslint/config';

// Plugins
import reactPlugin from 'eslint-plugin-react';
import reactRefresh from 'eslint-plugin-react-refresh';
import hooksPlugin from 'eslint-plugin-react-hooks';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import importPlugin from 'eslint-plugin-import';
import prettierPlugin from 'eslint-plugin-prettier';
import tsPlugin from '@typescript-eslint/eslint-plugin';

// Combine all your environments into globals
const allGlobals = {
  ...globals.browser,
  ...globals.node,
  ...globals.es2024,
};

const sharedPlugins = {
  'react-refresh': reactRefresh,
  'react-hooks': hooksPlugin,
  react: reactPlugin,
  'jsx-a11y': jsxA11yPlugin,
  import: importPlugin,
  prettier: prettierPlugin,
  '@typescript-eslint': tsPlugin,
};

const sharedRules = {
  // React
  ...reactPlugin.configs.recommended.rules,
  ...reactPlugin.configs['jsx-runtime'].rules,

  // Fast refresh
  ...reactRefresh.configs.vite.rules,

  // Hooks best practices
  ...hooksPlugin.configs['recommended-latest'].rules,

  // Import plugin
  ...importPlugin.configs.recommended.rules,
  ...importPlugin.configs.typescript.rules,

  // A11y
  ...jsxA11yPlugin.configs.recommended.rules,

  // Prettier integration
  ...prettierPlugin.configs.recommended.rules,

  // TypeScript-ESLint presets
  ...tsPlugin.configs.recommended.rules,
  ...tsPlugin.configs['recommended-type-checked'].rules,
  ...tsPlugin.configs['stylistic-type-checked'].rules,

  // Your custom rules
  'prettier/prettier': 'error',
  '@typescript-eslint/no-explicit-any': 'warn',
  '@typescript-eslint/no-floating-promises': 'error',
  '@typescript-eslint/no-unnecessary-condition': 'warn',
  'react/react-in-jsx-scope': 'off',
  'import/extensions': [
    'error',
    'ignorePackages',
    { ts: 'never', tsx: 'never', js: 'never', jsx: 'never' },
  ],
  'jsx-a11y/no-static-element-interactions': [
    'error',
    {
      handlers: ['onClick', 'onMouseDown', 'onMouseUp', 'onKeyPress', 'onKeyDown', 'onKeyUp'],
    },
  ],
  'jsx-a11y/click-events-have-key-events': 'error',
  'jsx-a11y/control-has-associated-label': [
    'error',
    {
      labelAttributes: ['aria-label', 'aria-labelledby'],
      controlComponents: ['Button', 'Input', 'IconButton'],
    },
  ],
  'jsx-a11y/label-has-associated-control': ['error', { assert: 'either' }],
  'react/button-has-type': 'error',
  // 'jsx-a11y/control-has-associated-label': 'warn',
  // 'jsx-a11y/label-has-associated-control': [
  //   'warn',
  //   {
  //     assert: 'either',
  //   },
  // ],
};

export default defineConfig([
  globalIgnores(['dist/**']),

  js.configs.recommended,
  tseslint.configs.recommended,

  {
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.svg', '.png', '.jpg'],
        },

        typescript: {
          projectService: ['./tsconfig.json'],
          alwaysTryTypes: true,
        },
      },
    },
  },

  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tseslint.parser,

      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },

        projectService: ['./tsconfig.json'],

        tsconfigRootDir: import.meta.dirname,
      },
      globals: allGlobals,
    },
    settings: {
      react: { version: 'detect' },
    },
    plugins: sharedPlugins,
    rules: sharedRules,
  },
]);
