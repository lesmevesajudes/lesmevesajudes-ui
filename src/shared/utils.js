import { curry } from 'ramda';

export const debugLog = curry((message, argObj) => {
// eslint-disable-next-line no-console
  if (process.env.NODE_ENV !== 'test') console.log(`DEBUG: ${message}`, argObj);
  return argObj;
});
