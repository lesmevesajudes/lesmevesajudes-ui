//@flow
import HelpTextMap from './HelpTextMap';

export type HelpText = {
  title?: string,
  body: string
}
export const helpText = (id: string): HelpText =>
    typeof id === 'string' && isHelpAvailable(id)
        ? HelpTextMap[id]
        : {body: ''};
export const isHelpAvailable = (id: string) => {
  return typeof HelpTextMap[id] !== 'undefined';
};
