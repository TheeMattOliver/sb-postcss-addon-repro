# Repro

Install
`yarn`

Run Storybook
`yarn storybook`

Observe error

```
WARN   Failed to load preset: {"options":{"postcssLoaderOptions":{}},"type":"presets","name":"/sb-postcss-addon-bug-repro/node_modules/@storybook/addon-postcss/preset.js"} on level 1
ERR! /sb-postcss-addon-bug-repro/node_modules/@storybook/addon-postcss/dist/index.js:1
ERR! import { logger } from '@storybook/node-logger';
ERR! ^^^^^^
ERR!
ERR! SyntaxError: Cannot use import statement outside a module
ERR!     at Object.compileFunction (node:vm:352:18)
ERR!     at wrapSafe (node:internal/modules/cjs/loader:1031:15)
ERR!     at Module._compile (node:internal/modules/cjs/loader:1065:27)
ERR!     at Object.Module._extensions..js (node:internal/modules/cjs/loader:1153:10)
ERR!     at Module.load (node:internal/modules/cjs/loader:981:32)
ERR!     at Function.Module._load (node:internal/modules/cjs/loader:822:12)
ERR!     at Module.require (node:internal/modules/cjs/loader:1005:19)
ERR!     at require (node:internal/modules/cjs/helpers:102:18)
ERR!     at Object.<anonymous> (/sb-postcss-addon-bug-repro/node_modules/@storybook/addon-postcss/preset.js:1:18)
ERR!     at Module._compile (node:internal/modules/cjs/loader:1101:14)
ERR!  /sb-postcss-addon-bug-repro/node_modules/@storybook/addon-postcss/dist/index.js:1
ERR! import { logger } from '@storybook/node-logger';
ERR! ^^^^^^
ERR!
ERR! SyntaxError: Cannot use import statement outside a module
ERR!     at Object.compileFunction (node:vm:352:18)
ERR!     at wrapSafe (node:internal/modules/cjs/loader:1031:15)
ERR!     at Module._compile (node:internal/modules/cjs/loader:1065:27)
ERR!     at Object.Module._extensions..js (node:internal/modules/cjs/loader:1153:10)
ERR!     at Module.load (node:internal/modules/cjs/loader:981:32)
ERR!     at Function.Module._load (node:internal/modules/cjs/loader:822:12)
ERR!     at Module.require (node:internal/modules/cjs/loader:1005:19)
ERR!     at require (node:internal/modules/cjs/helpers:102:18)
ERR!     at Object.<anonymous> (/sb-postcss-addon-bug-repro/node_modules/@storybook/addon-postcss/preset.js:1:18)
ERR!     at Module._compile (node:internal/modules/cjs/loader:1101:14)

```
