//@flow
import HelpTextMap from './HelpTextMap';

type Props = {
  id: string
}

export const HelpText = (props: Props) => typeof props.id === 'string'
    ? (isHelpAvailable(props.id)
        ? HelpTextMap[props.id]
        : props.id)
    : null;
export const isHelpAvailable = (id: string) => {
  return typeof HelpTextMap[id] !== 'undefined';
};
