/**
|--------------------------------------------------
| Errors
|--------------------------------------------------
*/

// @typescript-eslint/no-unused-vars
let a;
// Disable no-unused-vars since it comes in handy in examples
// This is done after we checked that it correctly shows an error
/* eslint-disable @typescript-eslint/no-unused-vars */

/**
|--------------------------------------------------
| Warnings
|--------------------------------------------------
*/

// simple-import-sort/sort
/* eslint-disable import/first */
/* eslint-disable import/extensions */
/* eslint-disable import/order */
import { localB, localA } from './local';
import dependency from 'dependency';
/* eslint-enable import/order */
/* eslint-enable import/extensions */
/* eslint-enable import/first */

/**
|--------------------------------------------------
| Correct
|--------------------------------------------------
*/

// @typescript-eslint/explicit-function-return-type
const returnType = () => {};

// @typescript-eslint/explicit-module-boundary-types
// import/prefer-default-export
export const moduleBoundaryTypes = () => {};

// @typescript-eslint/no-use-before-define
const c = () => b() + 1;
const b = () => 0;

// no-continue
// no-plusplus
for (let i = 0; i < 1; i++) {
  if (i > 1) {
    continue;
  }
}

// no-restricted-globals
isNaN(1);
isFinite(1);

// no-restricted-syntax
let x;
for (const item of [1, 2]) {
  x = item;
}

// radix
const int = parseInt('10');
