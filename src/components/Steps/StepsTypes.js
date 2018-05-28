// @flow
export const nextStep = 'nextStep';
export const backStep = 'backStep';

export type State = {
  counter: number,
};

export type Action =
    { type: 'nextStep' }
  | { type: 'backStep' }
  ;
