// @flow
export const nextStep = 'nextStep';
export const backStep = 'backStep';
export const buttonsHidden = 'hiddenButtons';
export const buttonsDisabled = 'buttonsDisabled';
export const buttonsOkey = 'buttonsOkey';
export type State = {
  counter: number,
  buttons_status: string,
};

export type Action =
    { type: 'nextStep' }
  | { type: 'backStep' }
  | { type: 'buttonsHidden'}
  | { type: 'buttonsDisabled'}
  | { type: 'buttonsOkey'}
  ;
