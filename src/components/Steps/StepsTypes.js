// @flow
export const nextStep = 'nextStep';
export const backStep = 'backStep';

export type State = {
  ui: {
    counter: number,
  },
};

export type Action =
    { type: 'nextStep' }
  | { type: 'backStep' }
  ;
