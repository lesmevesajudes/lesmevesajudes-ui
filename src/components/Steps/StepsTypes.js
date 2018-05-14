// @flow
export const NEXTSTEP = 'NEXTSTEP';
export const BACKSTEP = 'BACKSTEP';

export type State = {
  ui: {
    counter: number,
  },
};

export type Action =
    { type: 'NEXTSTEP' }
  | { type: 'BACKSTEP' }
  ;
